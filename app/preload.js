const {
    contextBridge,
    ipcRenderer
} = require('electron');

const allowedEvents = [
    'save-sheme-state',
    'expert-system-resolve',
    'get-questionaire'
  ];

let executed = false;

contextBridge.exposeInMainWorld('getAppPreload', function() {

    if (executed) {
      throw new Error('window#getAppPreload can be accessed only once');
    }
  
    executed = true;
  
    return {
      backend: createBackend(ipcRenderer, process.platform)
    };
  });

  function createBackend(ipcRenderer, platform) {
    return {
      send,
      on,
      once
    };
  
    /**
       * Send a message to the backend, awaiting the answer,
       * resolved as a promise.
       *
       * @param {string} event
       * @param {...any} args
       *
       * @return {Promise<any>}
       */
    function send(event, ...args) {
      if (!allowedEvents.includes(event)) {
        throw new Error(`Disallowed event: ${event}`);
      }
  
  
      return new Promise((resolve, reject) => {
  
        once(event + ':response:', function(evt, args) {
          if (args[0] !== null) {
            reject(args[0]);
          }
  
          // promises can only resolve with one argument
          return resolve(args[1]);
        });
  
        ipcRenderer.send(event, args);
      });
  
    }
  
    /**
       * Subscribe to event.
       *
       * @param {string} event
       * @param {Function} callback
       * @returns {{ cancel: () => void }}
       */
    function on(event, callback) {
      ipcRenderer.on(event, callback);
  
      return {
        cancel() {
          ipcRenderer.off(event, callback);
        }
      };
    }
  
    /**
       * Subscribe to event for one call.
       *
       * @param {string} event
       * @param {Function} callback
       * @returns {{ cancel: () => void }}
       */
    function once(event, callback) {
      ipcRenderer.once(event, callback);
  
      return {
        cancel() {
          ipcRenderer.off(event, callback);
        }
      };
    }
}