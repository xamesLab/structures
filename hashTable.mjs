import {LList} from "./linkedList.mjs"

class HashTableForString {
    constructor (size) {
        this.size = Math.abs(size) || 10
        this.table = Array.from({length: this.size}, () => new LList())
    }

    _hash (s) {
        if(typeof s !== 'string') throw new Error(`wrong type of value ${s}`)

        const string = s.trim()
        let hash = 0

        for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i)   
        }
        return hash % this.size
    }

    _log (message) {
        console.log(message)
    }

    add (value) {
        try {
            const hash = this._hash(value)
            this.table[hash].toEnd(value)
        } catch (error) {
            this._log(error.message)
        }
    }

    del (value) {
        try {
            const hash = this._hash(value)
            this.table[hash].removeOne(value)
        } catch (error) {
            this._log(error.message)
        }
    }

    print () {
        this._log(`HashTable for strings (${this.size}):`)
        this.table.forEach((v,i) => {
            this._log(`${i} - ${JSON.stringify(v.getList())}`)
        })
    }

}

//////// tests ////////

const hashTable = new HashTableForString(5)
hashTable.add('test1')
hashTable.add(10)
hashTable.add('test')
hashTable.add('test34')
hashTable.add('test7128')
hashTable.add('teshsjhsjdhjhhht')
hashTable.print()
hashTable.del('test')
hashTable.print()



