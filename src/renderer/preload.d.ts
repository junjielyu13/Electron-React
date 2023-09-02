import { ElectronHandler, TestHandler, RequestHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    test: TestHandler;
    deskRequest: RequestHandler;
  }
}

export {};
