/* Script to generate an age based on race
Remember that humans live to ~75
Remember that elves live to ~750
Remember that dwarves live to ~350 */

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
    if (race(raceValue) === 'Elf') {
        return generageElf();
    } else if (race(raceValue) === 'Dwarf') {
        return generageDwarf();
    } else if (race(raceValue) === 'Human') {
        return generageHuman();
    } else {
        return 150;
    };
};