
debugger;
//Begin character variables
    let name = '';
    let age = 140
// End character variables

// Begin Dwarf name generator

const femFirst = ['Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dariff', 'Delre', 'Diesa', 'Eldeth', 'Eridred', 'Falkrunn', 'Fallthra', 'Finellen', 'Gillydd', 'Gunnloda', 'Gurdis', 'Helgret', 'Helja', 'Hlin', 'Ilde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Oriff', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thordris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whudred', 'Yurgunn'];
const masFirst = ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Gilthur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangrim', 'Reirak', 'Rurik', 'Talkinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Uraim', 'Veit', 'Vonbin', 'Vondal', 'Whurbin'];
const dwarfClan = ['Aranore', 'Balderk', 'Battlehammer', 'Bigtoe', 'Bloodkith', 'Bofdann', 'Brawnanvil', 'Brazzik', 'Broodfist', 'Burrowfound', 'Caebrek', 'Daerdahk', 'Dankil', 'Daraln', 'Deepdelver', 'Durthane', 'Eversharp', 'Fallack', 'Fireforge', 'Foamtankard', 'Frostbeard', 'Glanhig', 'Goblinbane', 'Goldfinder', 'Gorunn', 'Graybeard', 'Hammerstone', 'Helcral', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Morigak', 'Orcfoe', 'Rakankrak', 'Ruby-Eye', 'Rumnaheim', 'Silveraxe', 'Silverstone', 'Steelfist', 'Stoutale', 'Strakeln', 'Strongheart', 'Thrahak', 'Torevir', 'Torunn', 'Trollbleeder', 'Trueanvil', 'Trueblood', 'Ungart'];
let dwarfName = '';

function getDwarf(dwarfGender){
    const firstIndex = Math.floor(Math.random() * 50);
    const clanIndex = Math.floor(Math.random() * 50);
    dwarfName += dwarfGender[firstIndex] + ' ' + dwarfClan[clanIndex]
}

function generateDwarf() {
    dwarfName = '';
        if (gender(genderValue) === 'female') {
            getDwarf(femFirst);
        } else if (gender(genderValue) === 'male') {
            getDwarf(masFirst);
        } else {
            const genderList = Math.floor(Math.random() * 2);
            if (genderList > 0) {
                getDwarf(femFirst);
            } else {
                getDwarf(masFirst);
            };
        };
        return dwarfName;
};
// End Dwarf name generator

// Begin Elf name generator
    //Define needed global variables
    const elvenPrefixes = ['Ael', 'Aer', 'Af', 'Ah', 'Al', 'Am', 'Ama', 'An', 'Ang', 'Ansr', 'Ar', 'Ari', 'Arn', 'Aza', 'Bael', 'Bes', 'Cael', 'Cal', 'Cas', 'Cla', 'Cor', 'Cy', 'Dae', 'Dho', 'Dre', 'Du', 'Eil', 'Eir', 'El', 'Er', 'Ev', 'Fera', 'Fi', 'Fir', 'Fis', 'Gael', 'Gar', 'Gil', 'Ha', 'Hu', 'Ia', 'Il', 'Ja', 'Jar', 'Ka', 'Kan', 'Ker', 'Keth', 'Koeh', 'Kor', 'Ky', 'La', 'Laf', 'Lam', 'Lue', 'Ly', 'Mai', 'Mal', 'Mara', 'My', 'Na', 'Nai', 'Nim', 'Nu', 'Ny', 'Py', 'Raer', 'Re', 'Ren', 'Rhy', 'Ry', 'Ru', 'Rua', 'Rum', 'Rid', 'Sae', 'Seh', 'Sel', 'Sha', 'She', 'Si', 'Sim', 'Sol', 'Sum', 'Syl', 'Ta', 'Tahl', 'Tha', 'Tho', 'Ther', 'Thro', 'Tia', 'Tra', 'Ty', 'Try', 'Uth', 'Ver', 'Vil', 'Von', 'Ya', 'Za', 'Zy'];
    const elvenSuffixes = ['ae', 'nae', 'ael', 'aias', 'aera', 'aer', 'aia', 'ah', 'aha', 'aith', 'aira', 'al', 'ala', 'la', 'lae', 'llae', 'ali', 'am', 'an', 'ana', 'a', 'ani', 'uanna', 'ar', 'ara', 'ra', 'ari', 'ri', 'aro', 'ro', 'as', 'ash', 'sah', 'ath', 'avel', 'brar', 'dar', 'adar', 'odar', 'deth', 'eath', 'eth', 'dre', 'drim', 'drimme', 'udrim', 'dul', 'ean', 'el', 'ele', 'ela', 'emar', 'en', 'er', 'erl', 'ern', 'ess', 'esti', 'evar', 'fel', 'afel', 'efel', 'hal', 'ahal', 'ihal', 'har', 'ihar', 'uhar', 'hel', 'ahel', 'ihel', 'ian', 'ianna', 'ia', 'ii', 'ion', 'iat', 'ik', 'il', 'iel', 'ila', 'lie', 'im', 'in', 'inar', 'ine', 'ir', 'ira', 'ire', 'is', 'iss', 'ist', 'ith', 'lath', 'lith', 'lyth', 'kash', 'ashk', 'okash', 'ki', 'lan', 'lan', 'lanna', 'lean', 'olan', 'ola', 'lam', 'ilam', 'ulam', 'lar', 'lirr', 'las', 'lian', 'lia', 'lis', 'elis', 'lys', 'lon', 'ellon', 'lyn', 'llin', 'lihn', 'mah', 'ma', 'mahs', 'mil', 'imil', 'umil', 'mus', 'nal', 'inal', 'onal', 'nes', 'nin', 'nine', 'nyn', 'nis', 'anis', 'on', 'onna', 'or', 'oro', 'oth', 'othi', 'que', 'quis', 'rah', 'rae', 'raee', 'rad', 'rahd', 'rail', 'ria', 'aral', 'ral', 'ryl', 'ran', 're', 'reen', 'reth', 'rath', 'ro', 'ri', 'ron', 'ruil', 'aruil', 'eruil', 'sal', 'isal', 'sali', 'san', 'sar', 'asar', 'isar', 'sel', 'asel', 'isel', 'sha', 'she', 'shor', 'spar', 'tae', 'itae', 'tas', 'itas', 'ten', 'iten', 'thal', 'that', 'ethal', 'etha', 'thar', 'ethat', 'ithar', 'ther', 'ather', 'thir', 'thi', 'ethil', 'thil', 'thus', 'thas', 'aethus', 'aethas', 'ti', 'eti', 'til', 'tril', 'tria', 'atri', 'atril', 'atria', 'ual', 'lua', 'uath', 'luth', 'uth', 'us', 'ua', 'van', 'vanna', 'var', 'vain', 'avain', 'vara', 'avar', 'avara', 'via', 'avia', 'vin', 'avin', 'wyn', 'ya', 'yr', 'yn', 'yth', 'zair', 'zara', 'azair', 'ezara' ];
    const elvenHousePrefixes = ['Alean', 'Alea', 'Arabi', 'Arkenea', 'Auvrea', 'Baequi', 'Banni', 'CyGreen', 'Dirth', 'Dryear', 'Dwin\'', 'Eyllis', 'Eyther', 'Freani', 'Gysse', 'Heasi', 'Hlae', 'Hunith', 'Kennyr', 'Kille', 'Maern', 'Melith', 'Myrth', 'Norre', 'Orle', 'Oussea', 'Rilynn', 'Teasen\'', 'Tyr', 'Tyrnea'];
    const elvenHouseSuffixes = ['altin', 'anea', 'annia', 'aear', 'arnith', 'atear', 'athem', 'dlues', 'elvris', 'eplith', 'ettln', 'ghynn', 'itryn', 'lylth', 'mitore', 'nddare', 'neldth', 'rae', 'raheal', 'rretyn', 'sithek', 'thym', 'tlarn', 'tlithar', 'tylar', 'undlin', 'urdrenn', 'valsa', 'virrea', 'zea']
    let elvenName = '';

    //Define functions to select name parts
    function getName() {
        const prefixIndex = Math.floor(Math.random() * elvenPrefixes.length)
        const suffixIndex = Math.floor(Math.random() * elvenSuffixes.length);
        elvenName += elvenPrefixes[prefixIndex];
        elvenName += elvenSuffixes[suffixIndex] + ' ';
    }

    function getHouseName() {
        const housePrefixIndex = Math.floor(Math.random() * elvenHousePrefixes.length);
        const houseSuffixIndex = Math.floor(Math.random() * elvenHouseSuffixes.length);
        elvenName += elvenHousePrefixes[housePrefixIndex] + elvenHouseSuffixes[houseSuffixIndex];
    }

    //Define function to randomize name and print to console
    function generateElf() {
        elvenName = '';
        getName();
        getHouseName();
        return elvenName;
    }
//End Elf name generator

//Begin Human name generator
const femHumFirst = ['Haven', 'Mariam', 'Damaris', 'Adrianna', 'Liana', 'Leslie', 'Kara', 'Diana', 'Karli', 'Kendra', 'Mikayla', 'Giuliana', 'Camila', 'Natasha', 'Rory', 'Mariela', 'Jacquelyn', 'Annalise', 'Mylie', 'Cassandra', 'Madalynn', 'Yesenia', 'Kaylah', 'Cierra', 'Riya', 'Annika', 'Eleanor', 'Mattie', 'Hailee', 'Kaitlynn', 'Marianna', 'Tiana', 'Karla', 'Mckinley', 'Kenzie', 'Karissa', 'Jazlene', 'Lucy', 'Mina', 'Natalee', 'Amara', 'Rose', 'Amina', 'Sofia', 'Karma', 'Ryan', 'Ally', 'Selah', 'Adalyn', 'Micah'];
const masHumFirst = ['Wyatt', 'Cesar', 'Maximillian', 'Kade', 'Raul', 'Armani', 'Jaylen', 'Terry', 'Remington', 'Elijah', 'Kareem', 'Ruben', 'Issac', 'Trevor', 'Ricky', 'Camron', 'Armando', 'Lamar', 'Makai', 'Dorian', 'Thaddeus', 'Cortez', 'Deven', 'Dennis', 'Osvaldo', 'Brenden', 'Cale', 'Jake', 'Ashton', 'Marlon', 'Karter', 'Cole', 'Layne', 'Kasey', 'Jovany', 'Memphis', 'Reed', 'Kristian', 'River', 'Andrew', 'Trey', 'Kelvin', 'Yahir', 'Jadiel', 'Gunnar', 'Peter', 'Jamie', 'Nico', 'Emilio', 'Ahmed'];
const humanClan = ['Gilmore', 'Jefferson', 'Weber', 'Castaneda', 'Colon', 'Walter', 'Ferrell', 'Anthony', 'Gardner', 'Zavala', 'Velasquez', 'Morrow', 'Snyder', 'Kim', 'Hogan', 'Best', 'Bird', 'Obrien', 'Rosales', 'Serrano', 'Patterson', 'Guerrero', 'George', 'Bradford', 'Dickson', 'Dalton', 'Mckay', 'Norris', 'Meza', 'Byrd', 'Perry', 'Pitts', 'Gross', 'Little', 'Roth', 'Mclean', 'Walton', 'Wilkerson', 'Nguyen', 'Castro', 'Johnson', 'Carrillo', 'Willis', 'Huffman', 'Berg', 'Shea', 'Hester', 'Harmon', 'Velazquez', 'Cox'];
let humanName = '';

function getHuman(humanGender){
    const firstHumIndex = Math.floor(Math.random() * 50);
    const clanHumIndex = Math.floor(Math.random() * 50);
    humanName += humanGender[firstHumIndex] + ' ' + humanClan[clanHumIndex];
}

function generateHuman() {
    humanName= '';
        if (gender(genderValue) === 'female') {
            getHuman(femHumFirst);
        } else if (gender(genderValue) === 'male') {
            getHuman(masHumFirst);
        } else {
            const genderList = Math.floor(Math.random() * 2);
            if (genderList > 0) {
                getHuman(femHumFirst);
            } else {
                getHuman(masHumFirst);
            };
        };
        return humanName;
};
// End Human Name Generator

//Begin data collection from page
    //Begin race data collection
        const race = (raceValue) => {
            switch (raceValue) {
                case "0":
                    return 'elf';
                    break;
                case "1":
                    return 'dwarf';
                    break;
                case "2":
                    return "human";
                    break;
                default:
                    return "dwarf";
                    break;
            };
        };
    //End race data collection

    //Begin gender data collection
        const gender = (genderValue) => {
            switch (genderValue) {
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
    const ageRange = (ageValue) => {
        switch (ageValue) {
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

//Age generators

// Elf generator
function generageElf() {
    if (ageRange(ageValue) === 'young') {
        return (16 + (Math.floor(Math.random() * 225)));
    } else if (ageRange(ageValue) === 'middle') {
        return (250 + (Math.floor(Math.random() * 225)));
    } else if(ageRange(ageValue) === 'old') {
        return (500 + (Math.floor(Math.random() * 225)));
    } else {
        return 250;
    };
};

function generageDwarf() {
    if (ageRange(ageValue) === 'young') {
        return (16 + (Math.floor(Math.random() * 117)));
    } else if (ageRange(ageValue) === 'middle') {
        return (115 + (Math.floor(Math.random() * 117)));
    } else if(ageRange(ageValue) === 'old') {
        return (233 + (Math.floor(Math.random() * 117)));
    } else {
        return 250;
    };
};

function generageHuman() {
    if (ageRange(ageValue) === 'young') {
        return (16 + (Math.floor(Math.random() * 14)));
    } else if (ageRange(ageValue) === 'middle') {
        return (30 + (Math.floor(Math.random() * 20)));
    } else if(ageRange(ageValue) === 'old') {
        return (50 + (Math.floor(Math.random() * 35)));
    } else {
        return 250;
    };
};

function generateAge() {
    if (race(raceValue) === 'elf') {
        return generageElf();
    } else if (race(raceValue) === 'dwarf') {
        return generageDwarf();
    } else if (race(raceValue) === 'human') {
        return generageHuman();
    } else {
        return 150;
    };
};
//End age generators

//Begin generating values for variables
    let pronoun = () => {
        if (gender(genderValue) === 'male') {
            return'He';
        } else if (gender(genderValue) === 'female') {
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

// Testing Area
let raceValue = '';
let genderValue = '';
let ageValue = '';
function getRadioValues() {
     raceValue = document.getElementById('Race').value;
     genderValue = document.getElementById('Gender').value;
     ageValue = document.getElementById('Age').value;
}

// Begin character generation sequence
    function generateCharacter() {
        const results = document.querySelector('#results');
        results.style.opacity = 0;
        //Generate name based on race  
        setTimeout (function() {  
            if (race(raceValue) === 'human') {
                name = generateHuman();
            } else if (race(raceValue) === 'elf') {
                name = generateElf();
            } else {
                name = generateDwarf();
            };
        //End name generation

        // Age generation
        age = generateAge();
        //End age generation

        //Output generated values
        //document.getElementById("results").innerHTML = `Your character is a ${gender(genderValue)} ${race(raceValue)} named ${name}. ${pronoun()} ${areIs()} ${age} years old.`;
        document.getElementById("results").innerHTML = `<h2>${name}</h2> <p>A ${gender(genderValue)} ${race(raceValue)} who is ${age} years old.</p>`;
        results.style.opacity = 1;
        }, 250);
    };
// End character generation sequence

const minNumber = 0;
const maxNumber = 2;

function randomizeCharacter() {
    function characterRandomizer(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
    };
    document.getElementById("Race").value = characterRandomizer(minNumber, maxNumber);
    document.getElementById("Gender").value = characterRandomizer(minNumber, maxNumber);
    document.getElementById("Age").value = characterRandomizer(minNumber, maxNumber);
};

// // Begin page specific commands
    document.getElementById("generate").addEventListener("click", generateCharacter);
    document.getElementById("randomize").addEventListener("click", randomizeCharacter);
// // End page specific commands