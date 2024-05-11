const { f } = require("./script");

const {
    backend
} = window.getAppPreload();

console.log(backend)

function myFunctionSend() {
    f()
    // localStorage.setItem("secondwindow", "test:test")
    // backend.send('test:test')
}

async function myFunctionSendSync() {
    console.log(await backend.send('test:sync'))
}