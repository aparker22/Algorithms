/* tree.js */

class Node {
  constructor (character, occurence) {
      this.character = character;
      this.occurence = occurence;
      this.left = null;
      this.right = null;
  }

  display() {
      return '[' + this.character + '|' + this.occurence + ']';
  }
}

class Tree {
  constructor() { //newNode, oldTree)  {
      //this.root = new Node(null, newNode.occurence + oldTree.root.occurence);
      //this.root.left = newNode;
      //this.root.right = oldTree.root;
      this.root = null;
  }

  // Methods
  addNode(node) {
  // add occurence of root and new node, put this in a new node as root
      //if (this.root == null) {
      //    this.root = new Node(null,
      let tempNode = new Node(null, node.occurence + this.root.occurence);
      tempNode.right = this.root;
      tempNode.left = node;
      this.root = tempNode;
  }

  findPath(target, currentNode, lr) {
      let tempNode = currentNode;
      let path = [];


      if (tempNode.character === target || tempNode == null) {
          return;
      } else {

          path.push(lr);
          findPath(target, currentNode.left, '0');
          findPath(target, currentNode.right, '1');
      }
      return path;
  }


  display() {
      let str = '';
      for(let i = 0; i < 40; i++) {
          str += ' ';
      }
      console.log(str + this.root + str);
  }
}


let message = 'hello';

let stringSplit = message.split('');

let count = function (arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++ prev[curr] || 1, prev), {})
};

console.log(count(stringSplit));
let letterFreq = count(stringSplit);

let array = [];
for (let prop in letterFreq) {
  if (letterFreq.hasOwnProperty(prop)) {
      console.log(prop + ':' + letterFreq[prop]);
      array.push([prop, letterFreq[prop]]);
  }
}

let compareBySecondColumn = (a, b) => {
  if (a[1] === b[1]) {
      return 0;
  } else {
      return (a[1] < b[1]) ? -1 : 1;
  }
}

array.sort(compareBySecondColumn);
console.log(array);

let tempvalue = array.shift();
let leftnode = new Node(tempvalue[0], tempvalue[1]);
tempvalue = array.shift();
let rightnode = new Node(tempvalue[0], tempvalue[1]);
let temproot = new Node(null, leftnode.occurence + rightnode.occurence);
temproot.left = leftnode;
temproot.right = rightnode;

let tree = new Tree();
tree.root = temproot;

for (let i = 0; i < array.length; i++) {
  let tempNode = new Node(array[i][0], array[i][1]);
  console.log(tempNode.character);
  tree.addNode(tempNode);
}
console.log(tree.display());