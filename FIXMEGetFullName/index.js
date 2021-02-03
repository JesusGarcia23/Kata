// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

//  Broken 
class Dinglemouse{

    constructor( firstName, lastName ){
    }
    
    getFullName(){
      return firstName+" "+lastName
    }
    
  }

  
//  Fixed 
class Dinglemouse{

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName() {
      return this.firstName ? this.firstName.concat(this.lastName ? " " + this.lastName : "") : this.lastName;
    }
    
  }