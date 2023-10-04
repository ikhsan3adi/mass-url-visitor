import { ChildProcess } from 'node:child_process';

class Visitor {
  /**
   * @param {function(string, object?):Promise<ChildProcess>} open
   * @param {string[]} urls
   * @param {{name: string | readonly string[], arguments?: readonly string[] | undefined}} app
   * @returns {void}
   */
  constructor(open, urls, app) {
    if (!urls) throw new Error('Url cannot be empty!');

    this._open = open;
    this._urls = urls;
    this._app = app;
  }

  /**
   * execute
   * @param {number} count number of iteration
   * @returns {void}
   */
  execute(count) {
    for (let index = 0; index < count; index++) {
      this._urls.forEach(async (url) => {
        await this._open(url, { app: this._app });
      });
    }
  }
}

export default Visitor;
