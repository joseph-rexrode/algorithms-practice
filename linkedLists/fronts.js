class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;

        this.head = newNode;
        return this;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
        return this;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }
}

let SLL1 = new SLL();
// add front
console.log(SLL1.addFront(15));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(23));
// remove front
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());
// front value
console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());

