console.log("Welcome to The Address Book Program Using JS") 
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact1 = new Contact("Sanjana", "Jain", "MDRoad", "Jaipur", "Raj",302004,9983270514, "sanjana.jain04@gmail.com")
console.log(contact1)