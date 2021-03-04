// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;

    //THIS IS THE FUNCTION THAT MAKES IT WORK
    this.introduction = () => {
        console.log(`Hi my name is: ${this.name} and I work with ${this.tech}`);
      }
      this.dontinterrupt = () => {
        console.log(`Hi do not interrupt ${this.name} they are working with ${this.tech}`);
  
    };
}

// TODO: Create a new object using the 'Developer' constructor

const manuel = new Developer( 'Manuel','Javascript')
const angelica = new Developer('Angelica','jQuery')

// TODO: Call the 'introduction()' method on the new object

angelica.introduction();



//XTRA
manuel.dontinterrupt()

