//VARIABLES
// there are three ways to declare variables
//var, let and const
// pag nadeclare ulit ang let mage-error na sya
//let pwde i-update ang variable
//while const will remain it's value

//DATA TYPES
const Name = "Mark Flores"; //string
const Age = 26; //number
const Rating = 56.67; //number
const isGraduated = true; //boolean
const Val = null; //object
const unk = undefined; //undefined
let Library;
Library = "Manila Library";
//Note: const must always have a value

//STRIMG manipulation
let String = `My name is ${Name} and I'm ${Age} years old`;

//ARRAYS
const Brands = ["Dell", "HP", "Apple", "Huawei", "Acer", "Asus"];

//OBJECT LITERALS
const People = {
    firstName: "Mark",
    lastName: "Flores",
    age: 26,
    favorites: ["watching anime", "spaghetti",
        "sopas", "matcha"
    ],
    familyMembers: {
        fatherName: "Mario Flores",
        motherName: "Elie Flores",
        sisterName: "Clowie",
        brotherName: "Chopper"
    }
};
//ARRAYS WITHIN OBJECTS
const Contacts = [{
        id: 114324,
        fullName: "Mark Flores",
        isSaved: "Phone"
    },
    {
        id: 35123,
        fullName: "Kram Serolf",
        isSaved: "Phone"
    },
    {
        id: 412332,
        fullName: "Clowie Chopper",
        isSaved: "SD Card"
    }
];
console.log(Contacts);