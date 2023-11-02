var person1 = { 
    name: 'Ivonete',
    age : 41
}

var person2 = {
    name: "Sarah",
    age : 7
}

var person3 = {
    name: 'Levi',
    age : 22
} 

var list = [person1, person2, person3]


    for(var person of list) {
        console.log(person.name)
    }