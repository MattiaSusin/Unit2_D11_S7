class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }

    compareAge(userToCompare){
        if (this.age > userToCompare.age) {
            return console.log(this.firstName + " " + this.lastName + " " + "E' più grande di:", userToCompare.firstName + " " + userToCompare.lastName)
        } else if (this.age < userToCompare.age){
            return console.log(this.firstName + " " + this.lastName + " " + "E' più piccolo di:", userToCompare.firstName + " " + userToCompare.lastName)
        }
    }
}
    const User1 = new User("Alberto","Botti",35,"Verona");
    const User2 = new User("Marco","Rossi",25,"Padova");

    console.log(User1.compareAge(User2));

    //!ESERCIZIO 2

    class User {
        constructor(petName, ownerName, species, breed) {
          this.petName = petName;
          this.ownerName = ownerName;
          this.species = species;
          this.breed = breed;
        }

        sameOwner(otherPeth){
            return this.ownerName === otherPeth.ownerName
        }
    }


    const form = document.querySelector("form")

    form.onsubmit = function(event){

        event.preventDefault() //! NON FA AGGIORNARE LA PAGINA

        const petName = document.getElementById("petName").value;
        const ownerName = document.getElementById("ownerName").value;
        const species = document.getElementById("species").value;
        const breed = document.getElementById("breed").value;

    }