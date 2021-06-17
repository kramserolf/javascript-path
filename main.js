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

/*for loop
for (let i = 1; i <= 10; i++) {
    //console.log(i);
};*/

//while loop
/*let f = 1;
while (f < 11) {
    console.log(`While loop value is ${f}`);
    f++;
};*/

/*LOOP ARRAY OBJECTS
for (let contact of Contacts) {
    console.log(contact.fullName);

};*/

/*ARRAY SORT & FILTER
const ContactsFullname = Contacts.map(function(contact) {
    return contact.fullName;
});
console.log(ContactsFullname);*/

/*const ContactsPhone = Contacts.filter(function(contact) {
    return contact.isSaved == "Phone";
}).map(function(contact) {
    return contact.fullName;
});
console.log(ContactsPhone);*/

/*JSON
const ContactsJSON = JSON.stringify(Contacts);
console.log(ContactsJSON);*/