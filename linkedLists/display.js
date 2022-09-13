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

    display() {
        let arr = [];
        let runner = this.head;
        if (!this.head) {
            return null;
        }

        while (runner != null) {
            arr.push(runner.data);
            runner = runner.next;
        }

        let str = arr.join(", ");
        return str;
    }
}

let SLL1 = new SLL();

console.log(SLL1.addFront(15));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(23));

console.log(SLL1.display());



