console.log('Hello from Electron')

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.webContents.openDevTools()

  win.loadURL('http://192.168.100.4:3000/main-display/3')
  // win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})