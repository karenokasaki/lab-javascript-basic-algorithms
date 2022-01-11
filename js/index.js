let hacker1 = 'karen'
console.log(`The driver's name is ${hacker1}`)

let navigator = 'amanda'
console.log(`The navigator's name is ${navigator}`)


// Iteration 2: Conditionals
// option 1 - using the for loop and arrays

let names = [hacker1, navigator] ;
let lengthNum = []
lenghtName(names)

function lenghtName(names) {
//para cada item dentro de names, contar o lenght do item
    let counter =[];
    for (let i = 0 ; i < names.length; i ++ ) {
        let name = names[i]
        // para cada letra dentro de cada item
        counter = name.length
        lengthNum.push(counter)
    }  
    console.log(lengthNum)

    let driver = lengthNum[0]
    let driver2 = lengthNum[1]

    if (driver > driver2) {
        console.log(`The driver has the longest name, it has ${driver} characters.`)
    } else if (driver < driver2) {
        console.log(`It seems that the navigator has the longest name, it has ${driver2} characters.`)
    } else if (driver === driver2) {
        console.log(`Wow, you both have equally long names, ${driver} characters!`)
    }
}

// option 2 - using .length

if ( hacker1.length > navigator.length) {
    console.log(`The driver has to longest name, it has ${hacker1.length} characters`)
} else if ( hacker1.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)    
    } else {
        console.log(`Wow, you both have equally long names, ${navigator.length} characters!`)
}

// Iteration 3: Loops
// 3.1

// option 1 
const myArr = hacker1.split("")
console.log(myArr.join(" ").toUpperCase())

// option 2 - without using .join()
spaceAndUpper(hacker1)

function spaceAndUpper (pessoa) {
    let newPessoa = ''

    for (let i = 0 ; i < pessoa.length; i++) {
        let letter = pessoa.charAt(i).toUpperCase() + " "
        newPessoa += letter
    } 
    console.log(newPessoa)
}


//3.2
function inverter(name){
    let str ='';
    for(let i = name.length - 1;i>= 0 ; i--){
        str+=name[i];
    }
    return str;
}
console.log(inverter(navigator));

// 3.3 Lexicographic Order
let lista = [hacker1, navigator]
lista.sort(); 
console.log(lista)

if (hacker1 === navigator){   
    console.log('What?! You both have the same name?')
} else {
    if(lista[0] === hacker1) {
        console.log(`The driver's name goes first.`)
    } else if (lista[0] === navigator) {
        console.log(`Yo, the navigator goes first definitely.`)
    } 
}

// BONUS 1: 
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dui magna. Aliquam semper rutrum placerat. Fusce sodales orci eget nulla finibus, ac fringilla purus ultrices. Curabitur augue dolor, viverra suscipit pulvinar ut, faucibus in mauris. Praesent ullamcorper faucibus eros. Sed vitae odio sed tortor rutrum tempus. Nam dapibus accumsan accumsan. Mauris lacinia auctor tellus ut tristique. Curabitur sit amet tincidunt purus. Sed et lobortis orci, ac mattis augue. Etiam non ornare felis, consectetur blandit lacus. Donec at magna urna. Donec pharetra felis quis efficitur tristique. Sed cursus ante et enim pellentesque, sit amet malesuada neque auctor. Morbi at elit nec ante interdum condimentum quis at ex. Duis porta ligula eget libero dictum tincidunt. Integer venenatis faucibus tortor, in tempor mauris tempor ut. Aliquam diam augue, accumsan quis pharetra et, rhoncus et tortor. Maecenas vitae felis quis nisi congue viverra. Nulla placerat, sapien non tincidunt ultricies, sem nunc efficitur augue, ac accumsan quam massa quis turpis. Vestibulum viverra dolor a est ullamcorper pretium. Aenean id lacinia augue, at facilisis turpis. Etiam tristique dui vitae dictum ultricies. Aliquam erat volutpat. Maecenas sit amet mattis lectus. Duis congue turpis nec ex fringilla gravida. In sodales diam a posuere pulvinar. Maecenas ac dolor id lectus volutpat mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut massa eros, luctus a varius nec, venenatis id lacus."

let newLorem = loremIpsum.split(' ') 

let loremNoSpace = '' ;
for (let i = 0 ; i < newLorem.length; i++) {
    loremNoSpace += newLorem[i];
}
console.log(`This Lorem has ${newLorem.length} words`)
console.log(`This Lorem has ${loremNoSpace.length} characters without space.`)

let counter = 0
for (let i = 0 ; i < newLorem.length; i++) {
    
    if (newLorem[i] === "et") {
        counter = counter + 1
    }  
}
console.log(`Number of times the word "et" was writting: ${counter} `)

// BONUS 2 
let phraseToCheck = 'karen okasaki'
checkPalindrome(phraseToCheck)


function checkPalindrome (check) {
    let phrase = check.split(' ')
    let newPhrase = "" ;
    let phraseReverse = '';

    for (let i=0 ; i < phrase.length ; i++ ){
        if (phrase[i] === " ") {
            continue
        } else {
            newPhrase += phrase[i]
        }
    }

    for (let i = newPhrase.length; i>0 ; i--) {
        phraseReverse += newPhrase[i-1]
    }   

    if (newPhrase === phraseReverse) {
        console.log("This phrase is a Palindrome!!!")
    } else {
        console.log("This phrase is not a Palindrome!!")
    }

} 