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

    length() {
        let count = 0;
        let runner = this.head;

        while (runner != null) {
            count++;
            runner = runner.next;
        }

        return count;
    }
}

let SLL1 = new SLL();
// add front
console.log(SLL1.addFront(15));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(23));

console.log(SLL1.length());