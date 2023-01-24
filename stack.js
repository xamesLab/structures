class Stack {
    constructor () {
        this.stack = []
        this.size = 0
    }

    addItem (val) {
        this.stack.push(val)
        this.size++
    }

    getItem () {
        if(this.size) {
            this.size--
            return this.stack.pop()
        }
        return null   
    }

    showItem () {
        if(this.size) {
            return this.stack[this.size - 1]
        }
        return null
    }
}

//////// tests ////////

const stack1 = new Stack()
const stack2 = new Stack()

stack1.addItem("134")
stack1.addItem("")
stack1.addItem("test")
stack1.addItem(134)

console.log(stack1.getItem())
console.log(stack2.getItem())

console.log(stack1.showItem())
console.log(stack2.showItem())
