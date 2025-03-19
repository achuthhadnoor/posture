interface LicenseWindowManager {
  open: () => void;
  close: () => void;
}
interface SettingsWindowManager {
  open: () => void;
  close: () => void;
}

class WindowManager {
  license: LicenseWindowManager;
  settings: SettingsWindowManager;

  setLicenseWindow(license: LicenseWindowManager) {
    this.license = license;
  }
  setSettingsWindow(settings: SettingsWindowManager) {
    this.settings = settings;
  }
}

export default new WindowManager();
