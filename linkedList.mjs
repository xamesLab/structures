export class LList {
    size = 0
    head = null
    tail = null

    _createFirstNode (node) {
        this.head = node
        this.tail = node
        this.size++
    }

    toStart (val) {
        let newNode = new Node(val)

        if(!this.size) {
            this._createFirstNode(newNode)
            return
        }

        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    toEnd (val) {
        let newNode = new Node(val)

        if(!this.size) {
            this._createFirstNode(newNode)
            return
        }

        this.tail.next = newNode
        this.tail = this.tail.next
        this.size++
    }

    getList () {
        const list = []
        let node = this.head

        if(!this.size){
            return list
        }

        while(node){
            list.push(node.value)
            node = node.next
        }
        return list
    }

    removeOne (val) {
        if(!this.size) return

        let prevNode = null
        let node = this.head 

        while(node) {
            if(node.value === val) {
                if(!prevNode) {
                    this.head = node.next
                } else {
                    prevNode.next = node.next
                }
                return
            }
            prevNode = node
            node = node.next
        }
    }

    search (val) {
        if(!this.size) return

        let node = this.head

        while(node) {
            if(node.value === val) {
                return node
            }
            node = node.next
        }
    }
}

class Node {
    constructor (val) {
        this.value = val
        this.next = null
    }
}

//////// tests ////////

// const list = new LList()
// const list2 = new LList()

// list.toEnd(122)
// list.toEnd("test")
// list.toEnd("test1")
// list.toEnd("test")
// list.toEnd("test")
// list.toEnd("test11")
// list.toStart("st")
// list.toStart("st0")

// list2.toEnd(122)
// list2.toStart("st00")

// list.removeOne('test')
// console.log("result", list.search('test1'))

// console.log("list1", list.getList())
// console.log("list2", list2.getList())

