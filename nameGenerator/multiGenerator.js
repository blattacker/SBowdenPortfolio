import generateHuman from 'generateHuman.js';
import generateElf from 'generateElf.js';

let race = '';
let age = '';
let gender = '';
let name = '';


function generatedName() {
    switch (document.getElementsByName("race").value) {
        case "0":
            name = generateElf();
            break;
        case "1":
            name = generateDwarf();
            break;
        case "2":
            name = generateHuman();
            break;

    }
};

function generateAge() {
    switch (document.getElementsByName("age")) {
        case "0":
            age = generateAgeYoung();
            break;
        case "1":
            age = generateAgeMiddle();
            break;
        case "2":
            age = generateAgeOld();
            break;
    }
};

function generateGender() {
    switch (document.getElementsByName("gender")) {
        case "0":
            gender = " male";
            break;
        case "1":
            gender = " female";
            break;
        case "2":
            gender = " non-binary or gender nonconforming";
            break;
        case "3":
            gender = "n unknown gender";
            break;
    } 
};

let pronoun = () => {
    if (gender === ' male') {
        pronoun = 'He';
    } else if (gender === ' female') {
        pronoun = 'She';
    } else {
        pronoun = 'They';
    };
};

let areIs = () => {
    if (pronoun === 'They') {
        areIs = 'are';
    } else {
        areIs = 'is';
    };
};

function generateCharacter() {
    document.getElementById("generatedCharacter").innerHTML = `Your character is a${race} named ${generatedFirst} ${generatedLast}. ${pronoun} ${areIs} ${age} years old.`;
 };

 document.getElementById("generate").addEventListener("click", generateCharacter);


 /* TO DO
 Use the following code to make the selectors actually work:

 <!DOCTYPE html>
<html>
<script>
function generateName(race) {
	switch (race)
	{
	case "0":
		document.getElementById("chosenRace").innerHTML = "Elf";
		break
	case "1":
		document.getElementById("chosenRace").innerHTML = "Dwarf";
		break
	case "2":
		document.getElementById("chosenRace").innerHTML = "Human";
        break
    case "3":
    	document.getElementById("chosenRace").innerHTML = "Testing";
        break
    default:
    	alert("something broke...");
        break
	}
}
</script>

<h3>Choose Race</h3>
<label>
	<input type="radio" name="race" value="0" onclick="generateName(this.value);"> Elf 
</label>
<label>
	<input type="radio" name="race" value="1" onclick="generateName(this.value);"> Dwarf 
</label>
<label>
	<input type="radio" name="race" value="2" onclick="generateName(this.value);"> Human 
</label>
<label>
	<input type="radio" name="race" value="3" onclick="generateName(this.value);"> Random
</label><br><br>
<p id="chosenRace"></p>
</body>
</html>

END TO DO */
