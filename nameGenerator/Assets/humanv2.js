const femHumFirst = ['Haven', 'Mariam', 'Damaris', 'Adrianna', 'Liana', 'Leslie', 'Kara', 'Diana', 'Karli', 'Kendra', 'Mikayla', 'Giuliana', 'Camila', 'Natasha', 'Rory', 'Mariela', 'Jacquelyn', 'Annalise', 'Mylie', 'Cassandra', 'Madalynn', 'Yesenia', 'Kaylah', 'Cierra', 'Riya', 'Annika', 'Eleanor', 'Mattie', 'Hailee', 'Kaitlynn', 'Marianna', 'Tiana', 'Karla', 'Mckinley', 'Kenzie', 'Karissa', 'Jazlene', 'Lucy', 'Mina', 'Natalee', 'Amara', 'Rose', 'Amina', 'Sofia', 'Karma', 'Ryan', 'Ally', 'Selah', 'Adalyn', 'Micah'];
const masHumFirst = ['Wyatt', 'Cesar', 'Maximillian', 'Kade', 'Raul', 'Armani', 'Jaylen', 'Terry', 'Remington', 'Elijah', 'Kareem', 'Ruben', 'Issac', 'Trevor', 'Ricky', 'Camron', 'Armando', 'Lamar', 'Makai', 'Dorian', 'Thaddeus', 'Cortez', 'Deven', 'Dennis', 'Osvaldo', 'Brenden', 'Cale', 'Jake', 'Ashton', 'Marlon', 'Karter', 'Cole', 'Layne', 'Kasey', 'Jovany', 'Memphis', 'Reed', 'Kristian', 'River', 'Andrew', 'Trey', 'Kelvin', 'Yahir', 'Jadiel', 'Gunnar', 'Peter', 'Jamie', 'Nico', 'Emilio', 'Ahmed'];
const humanClan = ['Gilmore', 'Jefferson', 'Weber', 'Castaneda', 'Colon', 'Walter', 'Ferrell', 'Anthony', 'Gardner', 'Zavala', 'Velasquez', 'Morrow', 'Snyder', 'Kim', 'Hogan', 'Best', 'Bird', 'Obrien', 'Rosales', 'Serrano', 'Patterson', 'Guerrero', 'George', 'Bradford', 'Dickson', 'Dalton', 'Mckay', 'Norris', 'Meza', 'Byrd', 'Perry', 'Pitts', 'Gross', 'Little', 'Roth', 'Mclean', 'Walton', 'Wilkerson', 'Nguyen', 'Castro', 'Johnson', 'Carrillo', 'Willis', 'Huffman', 'Berg', 'Shea', 'Hester', 'Harmon', 'Velazquez', 'Cox'];
let humanName = '';

function getHuman(humanGender){
    const firstHumIndex = Math.floor(Math.random() * 50);
    const clanHumIndex = Math.floor(Math.random() * 50);
    humanName += humanGender[firstHumIndex] + humanClan[clanHumIndex]
}

function generateHuman() {
        if (gender(genderValue) === 'female') {
            getHuman(femFirst);
        } else if (gender(genderValue) === 'male') {
            getHuman(masFirst);
        } else {
            const genderList = Math.floor(Math.random() * 2);
            if (genderList > 0) {
                getHuman(femFirst);
            } else {
                getHuman(masFirst);
            };
        };
        return humanName;
};