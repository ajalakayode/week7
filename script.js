 
 
 let sentence = " i love you"
 console.log(sentence)

 
//  change to uppercase
 sentence = sentence.toUpperCase
 console.log(sentence)


console.log(sentence)

// change to lower case
sentence = sentence.toLowerCase
console.log(sentence)

// the lenght of string and lenth doesnto take a paren cos aint a functional method
let strlength = sentence.length
console.log(strlenght)

// the first character
let firstchar = sentence[0]
console.log(tenthChar)

// the fisrt character
let tenthChar = sentence[9]
console.log(tebthChar)

// the character at 22
let char22 =  sentence.charAt(22)
console.log(char22)


// add a concat to the string

let cat = ' and cat'
let catStr = sentence.concat(cat)
console.log(catStr)

// replace dog with goat
let goatSent = sentence.replace('dog', 'goat')
console.log(goatSent)

// replace all "the" with "that"
console.log(sentence.reolaceAll("the", "that"))

// repeat 5 times
console.log(sentence.repeat(5))

// slice to cut out, works best for an array
// cut out some str, ..... not that any var with question mark is option


// the below returns all back
console.log(sentence.slice())


console.log(sentence.slice(0, sentence.indexOf('fox')+3))

// from jump to end of string
console.log(sentence.slice(sentence.indexOf("jump")))
// above and below are same
console.log(sentence.slice(sentence.indexOf("jump"), sentence.length))

// the below removes the last letter
console.log(sentence.slice(sentence.indexOf("jump"), sentence.length-1))

// converts a str to an array
console.log(sentence.split())

// removes space gives words only
console.log(sentence.split(" "))

// splits at each character
console.log(sentence.split(""))

// does not splits but adds hypen
console.log(sentence.split("").join(-))

// convert t0 str
let num = 900
console.log(num.toString)

// console.log(typeof num.toString)

// below is radix and to base 16 as stated
let x = 255
console.log(num.toString(16))

// does str contain fox i.e using boolean 
console.log(sentence.includes("fox"))
console.log(sentence.includes("fox", 30))
console.log(sentence.includes("goat"))


// whether start with
console.log(sentence.startsWith("The"))

// whether ends with
console.log(sentence.endsWith("goat"))


