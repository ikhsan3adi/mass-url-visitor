class Visitor {
  /**
   * @param { { open: object, openApp: object } } open
   * @param {object} urls
   * @param {object} app
   * @returns {void}
   */
  constructor(open, urls, app) {
    if (!urls) throw new Error('Url cannot be empty!');

    this._open = open.open;
    this._openApp = open.openApp;
    this._urls = urls;
    this._app = app;
  }

  /**
   * execute
   * @param {number} count
   * number of iteration
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
