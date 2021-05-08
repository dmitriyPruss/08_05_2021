const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

// const cat1 = {
//     name: "Vasiliy",
//     color: "black&white",
//     isMale: true,
// };
// console.log('cat1 :>> ', cat1);
// const cat2 = {
//     name: "Murka",
//     color: 'red',
//     isMale: false,
//     furnitureDamage: true,
// };

// cat1.breed = 'siamiz';
// console.log('cat1 :>> ', cat1);

// cat1.name = 'Vas';
// console.log('cat1 :>> ', cat1);

// const property1 = 'name';
// const cat3 = {
//     [property1]: "Murka",
// };

// console.log('cat3 :>> ', cat3);

// const humanPetya = {
//     firstName: 'Petro',
//     lastName: 'Petrosyan',
//     eyes: 'brown',
//     hair: 'yellow',
//     height: 175,
//     weight: 84,
//     nationality: 'french',
//     bmi() {
//         return this.weight / this.height ** 2;
//     },
//     showFullName() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(humanPetya.bmi());
// console.log(humanPetya.showFullName());

// functions-constructors



const cat1 = new Cat('Vasil', 'red', true, false);
const cat2 = new Cat('Murka', 'black', false, true);
console.log('cat2.meow() :>> ', cat2.meow());

function Cat(name, color, isMale, isFurnitureDamaged) {
    // const this = {};

    this.name = name;
    this.color = color;
    this.isMale = isMale;
    this.isFurnitureDamaged = isFurnitureDamaged;
    this.meow = function() {
       return "MEOW!";
    };
    // return this;
};


const human007 = new Human('Agent', '007', 35, true);
function Human(profession, num, age, isMale) {
    this.profession = profession;
    this.num = num;
    this.age = age;
    this.isMale = isMale;
};
console.log('human007 :>> ', human007);