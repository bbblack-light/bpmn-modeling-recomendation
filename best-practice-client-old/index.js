const { f } = require("./script");

const {
    backend
} = window.getAppPreload();

console.log(backend)

function myFunctionSend() {
    f()
    localStorage.getItem("secondwindow", "test:test")
    // backend.send('test:test')
}

async function myFunctionSendSync() {
    console.log(await backend.send('test:sync'))
}