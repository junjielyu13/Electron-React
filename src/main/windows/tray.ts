import { BrowserWindow, Tray, Menu, nativeImage } from 'electron';
import { getAssetPath } from '../utils/util';
import Sql from '../db/sqlite';

export default class TrayBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildTray(): Tray {
    this.mainWindow.on('closed', () => {
      //     mainWindow = null;
      this.mainWindow.destroy();
    });

    this.mainWindow.on('close', (event) => {
      this.mainWindow.hide();
      // win.setSkipTaskbar(true);
      event.preventDefault();
    });

    const icon = nativeImage.createFromPath(getAssetPath('icon.png'));
    const tray = new Tray(icon);
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'exit',
        click: () => {
          this.mainWindow.destroy();
          Sql.getInstance().close();
        },
      },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' },
    ]);

    tray.setContextMenu(contextMenu);
    tray.setToolTip('This is my application');
    tray.on('click', () => {
      if (this.mainWindow.isVisible()) {
        this.mainWindow.hide();
        this.mainWindow.setSkipTaskbar(false);
      } else {
        this.mainWindow.show();
        this.mainWindow.setSkipTaskbar(true);
      }
    });

    return tray;
  }
}
