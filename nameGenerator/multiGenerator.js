
//Begin character variables
    let name = '';
    let age = 140
// End character variables

//Begin data collection from page
    //Begin race data collection
        const race = (raceValue) => {
            switch (raceValue) {
                case "0":
                    return 'Elf';
                    break;
                case "1":
                    return 'Dwarf';
                    break;
                case "2":
                    return "Human";
                    break;
                default:
                    return "Human";
                    break;
            };
        };
    //End race data collection

    //Begin gender data collection
        const gender = () => {
            switch (document.getElementsByName('gender')) {
                case "0":
                    return 'male';
                    break;
                case "1":
                    return 'female';
                    break;
                case "2":
                    return 'nonbinary';
                    break;
                default:
                    return "male";
                    break;
            };
        };
    //End gender data collection

    //Begin age data collection
    const ageRange = () => {
        switch (document.getElementsByName('age')) {
            case "0":
                return 'young';
                break;
            case "1":
                return 'middle';
                break;
            case "2":
                return "old";
                break;
            default:
                return "middle";
                break;
        };
    };
    //End age data collection

//End data collection from page

//Begin generating values for variables
    let pronoun = () => {
        if (gender() === 'male') {
            return'He';
        } else if (gender() === 'female') {
            return 'She';
        } else {
            return 'They';
        };
    };

    let areIs = () => {
        if (pronoun() === 'They') {
            return 'are';
        } else {
            return 'is';
        };
    };
// End generating values for variables

// Begin character generation sequence
    function generateCharacter() {
        //Generate name based on race    
            if (race === 'Human') {
                name = generateHuman();
            } else if (race === 'Elf') {
                name = generateElf();
            } else {
                name = 'Error';
            };
        //End name generation

        document.getElementById("generatedCharacter").innerHTML = `Your character is a ${race()} ${gender()} named ${name}. ${pronoun()} ${areIs()} ${age} years old.`;
    };
// End character generation sequence

// Begin page specific commands
    document.getElementById("generate").addEventListener("click", generateCharacter);
// End page specific commands


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
	<input type="radio" name="race" value="0" onclick="gender(this.value);"> Elf 
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
