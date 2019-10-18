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
        getName();
        getHouseName();
        return elvenName;
    }
//End Elf name generator