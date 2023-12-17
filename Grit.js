// const name =""
// const message =""
// const id = 0

class Commit {
  constructor(parent, message, id) {
    this.id = id;
    this.message = message;
    this.parent = parentc;
  }
}

class Grit {
  constructor(name) {
    this.name = name;
    this.lastCommitId = -1;
    this.head = null;

    const commit = (message) => {
      const commit = new Commit(this.head, ++this.lastCommitId, message);
      this.head = commit;
      return commit;
    };

    const log = () => {
      const commit = this.head;
      const history = [];
      while (commit) {
        history.push(commit);
        commit = commit.parent;
      }
    };
    return history;
  }
}

window.Grit = Grit;
