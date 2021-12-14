// This should either be a third-party module from NPM that does this better, or
//   it should be moved to a separate package in this monorepo.

export default class TreeLogger {
  _indent = 0;
  _logged = false;

  constructor(value) {
    this._tree = {
      children: [],
      value,
    };

    process.on('uncaughtException', this.handleUncaughtException);
  }

  addItem = value => {
    this.currentItem.children.push({
      children: [],
      value,
    });
  };

  get currentItem() {
    let currentItem = this._tree;
    for (let i = 0; i < this._indent; i++) {
      const currentItemChildrenCount = currentItem.children.length;
      currentItem = currentItem.children[currentItemChildrenCount - 1];
    }
    return currentItem;
  }

  handleUncaughtException = err => {
    if (this._logged) {
      return;
    }
    this.log();
    console.log('');
    console.error(err);
    console.log('');
    console.log('Failure');
    process.exit(1);
  };

  indent = () => {
    // This should throw an error if there is not a `currentItem` at this
    //   indentation level, i.e. `indent()` -> `indent()`
    this._indent++;
  };

  log = () => {
    this._logged = true;
    console.log('');
    this.logItem();
  };

  logItem = (...indices) => {
    let item = this._tree;
    let prefix = '';
    const indicesCount = indices.length;
    for (let i = 0; i < indicesCount; i++) {
      const index = indices[i];
      const lastIndex = item.children.length - 1;
      if (index === lastIndex) {
        if (i === indicesCount - 1) {
          prefix += '   └─';
        } else {
          prefix += '     ';
        }
      } else {
        if (i === indicesCount - 1) {
          prefix += '   ├─';
        } else {
          prefix += '   │ ';
        }
      }

      item = item.children[index];
    }
    console.log(`${prefix} ${item.value}`);

    const childrenCount = item.children.length;
    if (childrenCount > 0) {
      for (let i = 0; i < childrenCount; i++) {
        this.logItem(...indices, i);
      }
    }
  };

  unindent = () => {
    this._indent--;
  };
}
