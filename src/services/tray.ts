import { app, Menu, MenuItemConstructorOptions, shell, Tray } from "electron";
import path from "path";
import { getGlobalShortCut, isDev } from "../utils/misc";

const setSetting = (name: string, value: any) => {
  console.log(name, value);
};

class TrayService {
  private tray: Tray | null = null;
  private autoLaunch = setSetting("autolaunch", false);
  private imagePath = isDev()
    ? path.join(__dirname, "../../assets/images/iconTemplate.png")
    : `${process.resourcesPath}/images/iconTemplate.png`;

  private helpItems: MenuItemConstructorOptions[] = [
    { label: "Help", enabled: false },
    {
      label: "Guide: How to...",
      click: () =>
        shell.openExternal(
          "https://achuth.notion.site/Press-Kit-1a3b994e395d43efbaf6727fed4429f1"
        ),
    },
    {
      label: "Send Feedback",
      click: () =>
        shell.openExternal(
          `mailto:hey@achuth.dev?subject=I am looking for information about the app.`
        ),
    },
    {
      label: "Give a tip!",
      click: () =>
        shell.openExternal("https://www.buymeacoffee.com/achuthhadnoor"),
    },
    {
      label: "Follow us",
      click: () => shell.openExternal("https://twitter.com/achuth_hadnoor"),
    },
    { type: "separator" },
  ];

  private appSettingsItems: MenuItemConstructorOptions[] = [
    { label: `Version ${app.getVersion()}`, enabled: false },
    {
      label: "Changelog",
      click: () =>
        shell.openExternal(
          `https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15`
        ),
    },
    {
      label: "About",
      click: () => shell.openExternal("https://getlapseapp.com"),
    },
    {
      label: "Auto launch",
      type: "checkbox",
      checked: false,
      click: () => {
        // updateSettings({ autolaunch: !autolaunch });
        // if (!is.development) {
        //   if (autolaunch) {
        //     autoLauncher.enable();
        //   } else {
        //     autoLauncher.disable();
        //   }
        // }
        // setSetting('autolaunch', !this.autoLaunch);
      },
    },
    {
      label: "Check for updates",
      click: () => {
        // Implement update check logic
      },
    },
    {
      type: "separator",
    },
    { label: "Debug log", enabled: false },
    {
      label: "Open log",
      click: () => {
        // openLogFile()
      },
    },
    { type: "separator" },
  ];

  init() {
    if (this.tray) return;
    this.tray = new Tray(this.imagePath);
    // this.tray.setTitle("♿︎");
    this.tray.on("click", () =>
      this.tray?.popUpContextMenu(this.updateTrayMenu())
    );
  }

  updateTrayMenu() {
    if (!this.tray) return;
    let menu;
    try {
      menu = this.setIdleTrayMenu();
      this.tray?.setContextMenu(menu);
      return menu;
    } catch (error) {
      console.error("Error updating tray menu:", error);
    }
  }

  private getTrialStatusLabel() {
    // const data = databaseManager.checkLicenseStatus();
    const isValid = true;
    return isValid ? "data.message" : "Trial expired. Upgrade now.";
  }

  private setIdleTrayMenu() {
    // this.tray?.setImage(this.imagePath);
    // this.tray?.setToolTip("Lapse | Start recording");

    const template: MenuItemConstructorOptions[] = [
      {
        label: "Pause posture",
        accelerator: getGlobalShortCut(),
        click: async () => {
          try {
            // test
          } catch (error) {
            console.error("Error starting recording:", error);
          }
        },
      },
      { type: "separator" },
      ...this.helpItems,
      ...this.appSettingsItems,
      { type: "separator" },
      { role: "quit" },
    ];
    return Menu.buildFromTemplate(template);
  }
}

export default new TrayService();
