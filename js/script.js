console.log(`JS OK`);

// Chiedere all'utente il proprio nome, cognome, colore preferito e infine scrivere sulla pagina il "nonecognomecolorepreferito21"

/*
1. Recupero un elemento dalla pagina
2. Chiedere il nome all'utente
2b Lo salvo in una variabile (e verifico in console)
3. Chiedere il cognome all'utente
3b Lo salvo in una variabile (e verifico in console)
4. Chiedere il colore preferito all'utente
4b Lo salvo in una variabile (e verifico in console)
5. Inserisco nell'elemento la password come contenuto testuale 
*/

// Operazioni Preliminari

// Recupero un elemento dalla pagina
const passwordNumber = document.getElementById(`password`);
console.log(passwordNumber);

// Effettivo Svolgimento

// Chiedere il nome all'utente e verifico in console
const userName = prompt(`Come ti chiami?`, `Marco`);
console.log(userName);

// Chiedere il cognome all'utente e verifico in console
const userSurname = prompt(`Qual' è il tuo cognome?`, `Rossi`);
console.log(userSurname);

// Chiedere il colore preferito all'utente e verifico in console
const userColor = prompt(`Qual' è il tuo colore preferito?`, `Blu`);
console.log(userColor);

// Inserisco nell'elemento la password come contenuto testuale 
passwordNumber.innerText += ' ' + userName + userSurname + userColor + 21;