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
    if(this.contacts[i]){
      if(this.contacts[i].id == id){
        return this.contacts[i];
      }
    }  
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for(var i=0; i<this.contacts.length; i++) {
    if(this.contacts[i]) {
      if(this.contacts[i].id == id) {
        delete this.contacts[id];
        return true;
      }
    }
  };
  return false;
}

//Business logic for Contacts
function Contact(firstName, lastName, phoneNumber, email, addresses){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.addresses = [];
  // this.workAddress = workAddress;
  // this.homeAddress = homeAddress;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

//Business logic for addresses

function Address(address, type) {
this.address = address;
this.type = type;
}


Contact.prototype.addAddress = function(address) {
  this.addresses.push(address);
}

//User Interface Logic

var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email").html(contact.email);
  
for(var i=0; i<contact.addresses.length; i++){
  if(contact.addresses[i]){
    $(".address").append(contact.addresses[i].type + " " + contact.addresses[i].address);
  }
}

  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function(){
    showContact(this.id); 
    $("#buttons").on("click", ".deleteButton", function(){
      addressBook.deleteContact(this.id);
      $("#show-contact").hide();
      displayContactDetails(addressBook);
    });
  });
};

$(document).ready(function(){
  attachContactListeners();
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedType = $("select#new-type").val();


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email").val("");
    $("input#new-address").val("");
    $("select#new-type").val("");


    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail);  
    var newAddress = new Address(inputtedAddress, inputtedType);
    newContact.addAddress(newAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
});





















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