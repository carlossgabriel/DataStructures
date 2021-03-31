function Node(data) {
  this.data = data;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
    this.end = 0;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBinaryFirstSearch(toNodeData) : null;
    if (parent) {
      parent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "Root node is already assigned";
      }
    }
  }

  remove(data) {
    if (this.root.data === data) {
      this.root = null;
    }

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      for (let [index, child] of node.children.entries()) {
        if (child.data === data) {
          node.children.splice(index, 1);
        } else {
          queue.push(child);
        }
      }
    }
  }

  contains(data) {
    return !!this.findBinaryFirstSearch(data);
  }

  findBinaryFirstSearch(data) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      console.log('node after shift: ', node);
      if (node.data === data) {
        return node;
      }
      for (const child of node.children) {
        queue.push(child);
        console.log('queue after push: ', queue);
      }
    }
    return null;
  }

  depth(node, fn) {
    if (node) {
      if (fn) {
        fn(node);
      }
      for (const child of node.children) {
        this.depth(child, fn);
      }
    }
  }

  runDepthSearch(fn, method) {
    const current = this.root;
    if (method) {
      this[`${method}`](current, fn);
    } else {
      this.depth(current, fn);
    }
  }

  print() {
    if (!this.root) {
      return console.log("No root node found");
    }
    const newline = new Node("|");
    const queue = [this.root, newline];
    let string = "";
    while (queue.length) {
      const node = queue.shift();
      string += `${node.data.toString()} `;
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      for (const child of node.children) {
        queue.push(child);
      }
    }
    console.log(string.slice(0, -2).trim());
  }

  printByLevel(limit) {
    console.log("end ifbeforewhile", this.end);
    console.log("");
    if (!this.root) {
      return console.log("No tree found");
    }
    const newline = new Node("\n");
    const queue = [this.root, newline];
    let string = "";
    if (limit == this.end) {
      this.end++;
      return "you've reached the limit";
    }
    while (queue.length) {
      const node = queue.shift();
      string += node.data.toString() + (node.data !== "\n" ? " " : "");
      if (node === newline && queue.length) {
        queue.push(newline);
        console.log("end if node === new line", this.end);
      }
      for (const child of node.children) {
        console.log("end for child of node.children", this.end);
        queue.push(child);
      }
    }
    console.log(string.trim());
  }
}

const tree = new Tree();
tree.add("1");
tree.add("2", "1");
tree.add("3", "1");
tree.add("4", "2");
tree.add("5", "2");
tree.add("6", "3");
tree.add("7", "3");
tree.add("8", "4");
tree.add("9", "4");
tree.add("10", "5");
tree.print();
console.log("--- profundidade");
tree.runDepthSearch((node) => {
  console.log(node.data);
}, "depth");
tree.printByLevel(2);
