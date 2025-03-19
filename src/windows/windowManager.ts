interface LicenseWindowManager {
  open: () => void;
  close: () => void;
}
interface SettingsWindowManager {
  open: () => void;
  close: () => void;
}
interface TransparentWindow {
  open: () => void;
  close: () => void;
}
class WindowManager {
  license: LicenseWindowManager;
  settings: SettingsWindowManager;
  trasparent: TransparentWindow

  setLicenseWindow(license: LicenseWindowManager) {
    this.license = license;
  }
  setSettingsWindow(settings: SettingsWindowManager) {
    this.settings = settings;
  }
  setTransparentWindow(transparent: TransparentWindow) {
    this.trasparent = transparent;
  }
}

export default new WindowManager();
