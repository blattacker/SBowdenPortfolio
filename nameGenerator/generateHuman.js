//Begin Human name generator
    const dictionary = {
        alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        vowels: ['A', 'E', 'I', 'O', 'U'],
        consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'],
        flexible: ['Y', 'H', 'L', 'R'],
    };

    let humanName = {
        firstName: '',
        lastName: '',
        lastStaged: '',
    };

    let dictionaryChooser = (stagedName) => {
        if (stagedName.length === 0){
            return 0;
        } else if (humanName.lastStaged === 'Q') {
            return 1;
        } else if (dictionary.consonants.indexOf(name.lastStaged) === -1) {
            return 2;
        } else {
            return 3;
        };
    };

    function generateLetter(which, source) {
        let i = Math.floor(Math.random()* source.length);
        humanName.lastStaged = source[i];
        if (which.length === 0) {
            return source[i];
        } else {
            return source[i].toLowerCase();
        }

    };

    function chooseDictionary(whichName) {
        switch (dictionaryChooser(whichName)){
            case 0:
                return dictionary.alphabet;
                break;
            case 1:
                return 'u';
                break;
            case 2:
                return dictionary.consonants;
                break;
            case 3:
                return dictionary.vowels;
                break;
        };
    };

    function generateName(nameToGenerate) {
        let l = Math.floor(Math.random() *10)
        for (let i = 0; i <= l; i++) {
        nameToGenerate += generateLetter(nameToGenerate, chooseDictionary(nameToGenerate));
        };
        return nameToGenerate;
    };

    function generateHuman() {
        return `${generateName(humanName.firstName)} ${generateName(humanName.lastName)}`;

    };
// End Human Name Generator