function Node(data) {
    this.data = data;
    this.subNode = [];
}

class Tree{
    constructor() {
        this.root = null;
    }

    add(data, parentNode) {
        const node = new Node(data);

        const parent  = parentNode ? this.findBTS(parentNode) : null;

        if (parent) {
            parent.subNode.push(node)
        } else {
            if (!this.root) {
                this.root = node;
            } else {
                return "Root already exists";
            }
        }
    }

    findBTS(data) {
        const queue = [this.root];
        let foundNode = null;

        this.traverseBTS((node) => {
            if (node.data === data) {
                foundNode = node;
            }
        })
        return foundNode;
    }

    traverseBTS(callback) {
        const queue = [this.root];

        if (callback) {
            while (queue.length) {
                const node = queue.shift();

                callback(node)

                for(const subNode of node.subNode) {
                    queue.push(subNode);
                }
            }
        }
    }
}

(function test() {
    let tree = new Tree()


    tree.add('No 1');
    tree.add('No 2', 'No 1');
    tree.add('No 3', 'No 1');
    tree.add('No 4', 'No 1');
    tree.add('No 5', 'No 2');
    tree.add('No 6', 'No 2');
    tree.add('No 7', 'No 3');
    tree.add('No 8', 'No 4');

    console.log(tree.findBTS('No 1'));
    console.log(tree.findBTS('No 2'));
    console.log(tree.findBTS('No 3'));

    // tree.traverseBFS((node) => {console.log(node)})
})()
