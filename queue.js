class Queue {
    constructor () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addItem (val) {
        const item = new QueueItem(val)

        if(!this.size) {
            this.head = item
            this.tail = item
        } else {
            this.tail.next = item
            this.tail = this.tail.next
        }
        this.size++
    }

    getItem () {
        if(this.size) {
            const itemValue = this.head.value
            this.head = this.head.next
            this.size--

            return itemValue
        }
        return null
    }

    logItems () {
        if(this.size) {
            let item = this.head
            while(item) {
                console.log(item.value)
                item = item.next
            }
        }
        return null
    }
}

class QueueItem {
    constructor (val) {
        this.value = val
        this.next = null
    }
}

//////// tests ////////

const queue1 = new Queue()
const queue2 = new Queue()

queue1.addItem(23400)
queue1.addItem("234")
queue1.addItem("test")
queue1.addItem("test2")
queue1.addItem("lastItem")

queue1.logItems()
queue2.logItems()

console.log(">>>>get", queue1.getItem())
console.log(">>>>get", queue1.getItem())
console.log(">>>>get queue2", queue2.getItem())

queue1.logItems()