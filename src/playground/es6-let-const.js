var nameVar = 'julio'
nameVar = 'Mike'
console.log('nameVar:', nameVar)

let nameLet = 'Jen'
nameLet = 'Julio'
console.log('nameLet',nameLet)

const nameConst = 'Frank'
console.log('nameConst',nameConst)

function getPathName(){
    var pathName = 'Mal'
    return pathName
}

getPathName();
console.log()

const fullName = 'Jon Mead'

let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}