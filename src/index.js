import fruits from './foods'
import { choice, remove } from './helpers'

let currFruit = choice(fruits)

console.log(`I'd like one ${currFruit}, please`)
console.log(`Here you go: ${currFruit}`)
console.log(`Delicious, may I have another?`)

let remaining = remove(currFruit, fruits)

console.log(`I'm sorry, we're all out. We have ${remaining.length} other fruits available!`)