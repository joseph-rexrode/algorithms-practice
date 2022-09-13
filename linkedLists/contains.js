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

    contains(value) {
        var isHere = false;

        let runner = this.head;

        while (runner != null) {
            if (runner.data == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

let SLL1 = new SLL();

console.log(SLL1.addFront(15));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(23));

console.log(SLL1.contains(15));
console.log(SLL1.contains(1));
