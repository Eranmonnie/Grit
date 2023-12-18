class Commit {
  constructor(parent, message, id) {
    this.id = id;
    this.message = message;
    this.parent = parent;
  }
}

class Branch {
  constructor(name, commit) {
    this.name = name;
    this.commit = commit;
  }
}

class Grit {
  constructor(name) {
    this.name = name;
    this.branches = [];
    this.lastCommitId = -1;
    var master = new Branch("master", null);
    this.branches.push(master);
    this.head = master;
  }

  commit(message) {
    var commit = new Commit(this.head.commit, message, ++this.lastCommitId);
    this.head.commit = commit;
    return commit;
  }

  log() {
    var commit = this.head.commit;
    var history = [];
    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }
    return history;
  }

  checkout(name) {
    for (i = this.branches.length; i--; ) {
      if (this.branches[i] == name) {
        console.log(`Switched to existing branch ${name}`);
        this.head = this.branches[i];
        return this;
      }
    }

    var newBranch = new Branch(name, this.HEAD.commit);
    this.branches.push(newBranch);
    this.HEAD = newBranch;
    console.log(`Switched to existing branch ${name}`);
    return this;
  }
}
