class Commit {
  constructor(parent, message, id) {
    this.id = id;
    this.message = message;
    this.parent = parent;
  }
}

class Grit {
  constructor(name) {
    this.name = name;
    this.lastCommitId = -1;
    this.head = null;
  }

  commit(message) {
    var commit = new Commit(this.head,message, ++this.lastCommitId);
    this.head = commit;
    return commit;
  }

  log() {
    var commit = this.head;
    var history = [];
    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }
    return history;
  }
}
