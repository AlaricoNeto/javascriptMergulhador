
var me  = {
    name: 'Alarico',
    age: 17
} 

function checkAge(person){
 console.log('A idade da pessoa é : ' + person.age)
 if (person.age >= 18)  {
    console.log('Caiu dentro do bloco')
 }
}

checkAge(me)