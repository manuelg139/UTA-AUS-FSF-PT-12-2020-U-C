/* 
class Letter {
    //non letters and non digits are visible
    constructor(character) {
        this.character = character;
        this.visible = true;
        this.digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        this.letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.Uppercase = this.letterArray.map(function (element) {
            return element.toUpperCase();
        })
        if (this.letterArray.includes(character) || this.digitArray.includes (character) || this.Uppercase.includes(character)) {
            this.visible = false;
        } else {
            return "_";
        
        }
        //converts characters to a string
        character.toString();

        //converts letters to an empty string "_";
       
        
    }
} */


class Letter{

    constructor (char){

        this.char = char;
    
        const validChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        if (validChars.includes(char) || validChars.includes(char.toLowercase())){
            this.visible = false;

        } else {
            this.visible = true;
        }

    }
}

module.exports = Letter;