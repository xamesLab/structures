import {LList} from "./linkedList.mjs"

class HashTableForString {
    constructor (size) {
        this.size = Math.abs(size) || 10
    }

    _hash (str) {
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i)   
        }
        return hash % this.size
    }
}
