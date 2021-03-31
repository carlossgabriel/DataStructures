function Node(data) {
    this.data = data;
    this.subNode = [];
}

class DepthSearchTree{
    constructor() {
        this.root = null;
    }

    add(data, parentNode) {
        const node = new Node(data);

        const parent  = parentNode ? this.findBinaryTree(parentNode) : null;

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

    findBinaryTree(data) {
        const queue = [this.root];
        let foundNode = null;

        this.traverseBinaryTreeSearch((node) => {
            if (node.data === data) {
                foundNode = node;
            }
        })
        return foundNode;
    }

    traverseBinaryTreeSearch(callback) {
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

    depthSearch(data){

        const queue = [this.root];
        
        if(!this.root){
            console.log('No tree found');
            return false;
        }

        if(this.data == data){
            console.log('node found: ', data);
            return true;
        } else {
            
        }


        
    }

    /* 
        depthSearch(passar o valor da busca: data) {

            passar a raiz para iniciar a busca
            this.root
            
            if (node.data = data) {
                achou o nó que procura
                foundNode = node.data;
                return foundNode;
            } else {
                node
            }
        }
    */
}

(function test() {
    let tree = new DepthSearchTree()


    tree.add('No 1');
    tree.add('No 2', 'No 1');
    tree.add('No 3', 'No 1');
    tree.add('No 4', 'No 2');
    tree.add('No 5', 'No 2');
    tree.add('No 6', 'No 3');
    tree.add('No 7', 'No 3');
    tree.add('No 8', 'No 4');

    // console.log(tree.findBTS('No 1'));
    // console.log(tree.findBTS('No 2'));
    console.log(tree.findBinaryTree('No 8'));

    tree.traverseBinaryTreeSearch((node) => {console.log(node)})
})()
