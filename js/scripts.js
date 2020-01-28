//Business logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
  contact.id=this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId;
}

AddressBook.prototype.findContact=function(id){
  for(var i=0; i<this.contacts.length; i++){
    if(this.contacts[i].id == id){
      return this.contacts[i];
    }
  }
  return false;
}

//Business logic for Contacts
function Contact(firstName, lastName, phoneNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}



// var addressBook = new AddressBook();
// var contact = new Contact("Ada", "Lovelace", "503-555-0100");
// var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);























// function Contact (firstName, lastName, phoneNumber){
//   this.firstName= firstName;
//   this.lastName=lastName;
//   this.phoneNumber=phoneNumber;
// }

// Contact.prototype.fullName=function(){return this.firstName + " " + this.lastName;}

// var pdx = {name: "Portland"};
// var sfo = {name: "San Francisco"};
// var sea = {name: "Seattle"};
// var cso = {name: "Aktau"};
// var dzn = {name: "Zhezkazgan"};

// var usa = {name: "United States of America"};
// var kazakhstan = {name: "Kazakhstan"};
// var uruguay = {name: "Uruguay"};

// var usa = {name: "United States of America", cities: [pdx, sfo, sea]};

// var kazakhstan = {name: "Kazakhstan", cities: [cso, dzn]};

// var uruguay = {name: "Uruguay", cities: []};

// usa.cities.forEach(function(city){
//   console.log("let's go to " + city.name + "!");
// });

// var mlz= {name: "Melo"};
// uruguay.cities.push(mlz);

// var tomatoes = {name: "Tomatoes", price: 2.99};
// var cucumbers = {name: "Cucumbers", price: 0.99};
// var onions = {name: "Onions", price: 0.79};

// var groceryStore = {name: "Michael's", products: [tomatoes, cucumbers, onions]};

// var iPhone = {name: "iPhone", price: 699};
// var android = {name: "Android", price: 499};
// var windowsPhone = {name: "Windows Phone", price: 399};

// var phoneStore = {name: "RadioShack", products: [iPhone, android, windowsPhone]};

// var stores = [groceryStore, phoneStore];

// stores.forEach(function(store){
//   console.log(store.name + " sells: ");
//   store.products.forEach(function(product){
//     console.log(product.name);
//   });
//   console.log("/n");
// });