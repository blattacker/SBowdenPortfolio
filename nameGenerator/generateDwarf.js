const femFirst = ['Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dariff', 'Delre', 'Diesa', 'Eldeth', 'Eridred', 'Falkrunn', 'Fallthra', 'Finellen', 'Gillydd', 'Gunnloda', 'Gurdis', 'Helgret', 'Helja', 'Hlin', 'Ilde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Oriff', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thordris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whudred', 'Yurgunn'];
const masFirst = ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Gilthur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangrim', 'Reirak', 'Rurik', 'Talkinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Uraim', 'Veit', 'Vonbin', 'Vondal', 'Whurbin'];
const dwarfClan = ['Aranore', 'Balderk', 'Battlehammer', 'Bigtoe', 'Bloodkith', 'Bofdann', 'Brawnanvil', 'Brazzik', 'Broodfist', 'Burrowfound', 'Caebrek', 'Daerdahk', 'Dankil', 'Daraln', 'Deepdelver', 'Durthane', 'Eversharp', 'Fallack', 'Fireforge', 'Foamtankard', 'Frostbeard', 'Glanhig', 'Goblinbane', 'Goldfinder', 'Gorunn', 'Graybeard', 'Hammerstone', 'Helcral', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Morigak', 'Orcfoe', 'Rakankrak', 'Ruby-Eye', 'Rumnaheim', 'Silveraxe', 'Silverstone', 'Steelfist', 'Stoutale', 'Strakeln', 'Strongheart', 'Thrahak', 'Torevir', 'Torunn', 'Trollbleeder', 'Trueanvil', 'Trueblood', 'Ungart'];
let dwarfName = '';

function getDwarf(dwarfGender){
    const firstIndex = Math.floor(Math.random() * 50);
    const clanIndex = Math.floor(Math.random() * 50);
    dwarfName += dwarfGender[firstIndex] + dwarfClan[clanIndex]
}

function generateDwarf() {
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