import { ipcMain } from 'electron';
import { IPC } from '../../common/IPC';
import Sql from '../db/sqlite';

export default class Ipc {
  constructor(sql: Sql) {
    ipcMain.handle(IPC.TEST, async (event: any, testname: Record<any, any>) => {
      const { id, name } = testname;
      const res = await sql.insert('test', { id, name });
      return {
        code: 1,
        msg: res,
      };
    });
  }
}
