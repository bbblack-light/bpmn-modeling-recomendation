const {
    backend
} = window.getAppPreload();

console.log(backend)

function myFunctionSend() {
    backend.send('test:test')
}

async function myFunctionSendSync() {
    console.log(await backend.send('test:sync'))
}