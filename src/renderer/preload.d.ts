import {
  ElectronHandler,
  TestHandler,
  RequestHandler,
  MenuTypeRequestHandler,
} from '../main/preload';

declare global {
  interface Window {
    electron: ElectronHandler;
    test: TestHandler;
    deskRequest: RequestHandler;
    menuTypeRequest: MenuTypeRequestHandler;
  }
}

export {};
