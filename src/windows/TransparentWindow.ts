import { BrowserWindow, screen } from "electron";
import windowManager from "./windowManager";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

class TransparentWindow {
  private window: BrowserWindow | null = null;

  private createWindow() {
    const {bounds} = screen.getPrimaryDisplay()
    this.window = new BrowserWindow({
      ...bounds,
      frame: false,
      transparent: true,
      enableLargerThanScreen:true,
      alwaysOnTop:true,
      webPreferences: {
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
    });

    this.window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    this.window.setAlwaysOnTop(true, "screen-saver", 1);
    this.window.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: true})
    this.window.webContents.openDevTools()

    // this.window.on("closed", () => {
    //   this.window = null;
    // });
  }
  open() {
    if (!this.window) this.createWindow();
    else this.window.show();
  }

  close() {
    if (this.window) this.window.close();
  }
}

windowManager.setTransparentWindow(new TransparentWindow());
