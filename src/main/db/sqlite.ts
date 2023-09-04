/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { type Database, verbose } from 'sqlite3';

const TAG = '[sqlite3]';

export default class Sql {
  private static instance: Sql;

  public static getInstance(filename = path.join(__dirname, './database.db')) {
    return (this.instance ??= new Sql(filename));
  }

  public database: Database;

  private constructor(filename: string) {
    this.database = new (verbose().Database)(filename, async (error) => {
      if (error) {
        console.log(TAG, 'INIT FAILD');
        console.log(error);
      } else {
        await this.initDB();
      }
    });
  }

  private objKey(obj: Record<any, any>) {
    return JSON.stringify(Object.keys(obj)).replace(/[[\]]/g, '');
  }

  private objVaule(obj: Record<any, any>) {
    return JSON.stringify(Object.values(obj)).replace(/[[\]]/g, '');
  }

  private columnDefinitions(obj: Record<any, any>) {
    return Object.entries(obj)
      .map(([columnName, columnType]) => `${columnName} ${columnType}`)
      .join(', ');
  }

  public async create(tableName: string, column: Record<any, string>) {
    return new Promise((resolve, reject) => {
      this.database.run(
        `CREATE TABLE IF NOT EXISTS ${tableName} (${this.columnDefinitions(
          column
        )})`,
        (err) => {
          if (err) {
            console.log('err', err);
            reject(`CREATE ERROR: ${err}`);
          } else {
            resolve('CREATE SUCCESS');
          }
        }
      );
    });
  }

  public async insert(tableName: string, values: Record<any, any>) {
    return new Promise((resolve, reject) => {
      this.database.run(
        `INSERT INTO ${tableName} (${this.objKey(
          values
        )}) VALUES(${this.objVaule(values)})`,
        (err) => {
          console.log('err', err);
          if (err) {
            reject(`INSERT ERROR: ${err}`);
          } else {
            resolve('INSERT SUCCESS');
          }
        }
      );
    });
  }

  public update(tableName: string, statement: string) {
    this.database.run(`UPDATE ${tableName} ${statement}`, (err) => {
      if (err) {
        return console.log('UPDATE ERROR: ', err.message);
      }
      return this;
    });
  }

  public delete(tableName: string, statement: string) {
    this.database.run(`DELETE FROM ${tableName} ${statement}`, (err) => {
      if (err) {
        console.log(err.message);
      }
    });
  }

  public selectAll(tableName: string, statement: string = '') {
    return new Promise((resolve, reject) => {
      this.database.all(
        `SELECT * FROM ${tableName} ${statement}`,
        [],
        (err, rows) => {
          if (err) {
            reject(`SELECT ERROR: ${err}`);
          }
          resolve(rows);
        }
      );
    });
  }

  public selectOne(tableName: string, statement: string) {
    return new Promise((resolve, reject) => {
      this.database.get(
        `SELECT * FROM ${tableName} ${statement}`,
        [],
        (err, row) => {
          if (err) {
            reject(`SELECT ERROR: ${err}`);
          }
          resolve(row);
        }
      );
    });
  }

  public close() {
    this.database.close((err) => {
      if (err) {
        console.log(TAG, 'DB CLOSE FAILD', err.message);
      } else {
        console.log(TAG, 'DB CLOSE SUCCESSFUL');
      }
    });
  }

  private async isInitDB(): Promise<boolean> {
    let isInitDB: boolean = false;
    await this.selectOne('users', 'WHERE is_root = 1')
      .then(() => {
        isInitDB = false;
      })
      .catch(() => {
        isInitDB = true;
      });
    return isInitDB;
  }

  private async initDB() {
    if (await this.isInitDB()) {
      this.create('test', {
        id: 'integer primary key',
        name: 'varchar(20)',
      });

      await this.create('users', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        username: 'TEXT NOT NULL UNIQUE',
        password: 'TEXT NOT NULL',
        is_root: 'INTEGER DEFAULT 0',
        is_admin: 'INTEGER DEFAULT 0',
        created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
      });

      this.insert('users', {
        id: 1,
        username: 'admin',
        password: 'admin',
        is_root: '1',
        is_admin: '1',
      });

      await this.create('desk', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL UNIQUE',
        type: 'INTEGER DEFAULT 0 CHECK (type = 0 OR type = 1) ',
        created_at: 'DATETIME DEFAULT CURRENT_TIMESTAMP',
      });

      await this.insert('desk', { name: '桌子1' });
      await this.insert('desk', { name: '桌子2' });
      await this.insert('desk', { name: '桌子3' });
      await this.insert('desk', { name: '桌子4' });
      await this.insert('desk', { name: '桌子5' });
      await this.insert('desk', { name: '桌子6' });

      await this.create('menu_type', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL UNIQUE',
        created_at: 'DATETIME DEFAULT CURRENT_TIMESTAMP',
      });

      await this.insert('menu_type', { name: '饮料' });
      await this.insert('menu_type', { name: '酒水' });
      await this.insert('menu_type', { name: '面包' });
      await this.insert('menu_type', { name: '正餐' });
      await this.insert('menu_type', { name: '点心' });
      await this.insert('menu_type', { name: '其它' });

      await this.create('menu_item', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL UNIQUE',
        created_at: 'DATETIME DEFAULT CURRENT_TIMESTAMP',
      });
    }
    console.log(TAG, 'INIT SUCCESSFUL');
  }
}
