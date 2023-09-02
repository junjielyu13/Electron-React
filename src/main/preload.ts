import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import IPC from '../common/IPC';
import { type Channels } from '../common/type';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};
contextBridge.exposeInMainWorld('electron', electronHandler);
export type ElectronHandler = typeof electronHandler;

const testHandler = {
  test: (testname: any) => ipcRenderer.invoke(IPC.TEST, testname),
};
contextBridge.exposeInMainWorld(IPC.TEST, testHandler);
export type TestHandler = typeof testHandler;

const requestHandler = {
  request: () => ipcRenderer.invoke('deskRequest'),
};
contextBridge.exposeInMainWorld('deskRequest', requestHandler);
export type RequestHandler = typeof requestHandler;

const menutyperequestHandler = {
  menuTypeRequest: () => ipcRenderer.invoke('menuTypeRequest'),
};
contextBridge.exposeInMainWorld('menuTypeRequest', menutyperequestHandler);
export type MenuTypeRequestHandler = typeof menutyperequestHandler;
