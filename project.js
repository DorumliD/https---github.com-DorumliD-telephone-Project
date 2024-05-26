// let myIcon = document.querySelector('.fa-phone');  // telefonni ikonkasi
// let phoneDiv = document.querySelector('.phone');  // telefonni katta divi
// let myTxtInput = document.querySelector('input[type="search"]');  // input type='text';
// let phoneWindow = document.getElementsByClassName('window')[0];  // telefon ichki displayi
// let addIcon = document.querySelector('input[type="button"]'); // qo'shish ikonkasi
// let removeEmoji = "❌";


// function display(){
//     phoneDiv.removeChild(myIcon);
//     phoneWindow.style.display = 'block';
// }


// function removeContact(span){
//     phoneWindow.removeChild(span.parentNode);
// }

// function addContact(){
//     let newContact = document.createElement('p');
//     if(myTxtInput.value==''){
//         alert("Iltimos, ma'lumot kiriting!");
//     }else{
//         newContact.innerText = myTxtInput.value;
//         localStorage.setItem('newContact', JSON.stringify(myTxtInput.value));
//         let deleteIcon = document.createElement('span');
        
//         deleteIcon.setAttribute('onclick', 'removeContact(this)');
        
//         deleteIcon.innerText = removeEmoji;
//         newContact.appendChild(deleteIcon);
//     phoneWindow.appendChild(newContact);
//     myTxtInput.value = '';
//     }
// }


// function searchContacts() {
//     let searchTerm = myTxtInput.value.toLowerCase(); // Получаем значение из поля ввода и приводим к нижнему регистру
//     let contacts = phoneWindow.querySelectorAll('p'); // Получаем все контакты в окне телефона
    
//     contacts.forEach(contact => {
//         let contactName = contact.innerText.toLowerCase(); // Получаем имя контакта и приводим к нижнему регистру
//         if (contactName.includes(searchTerm)) {
//             contact.style.display = 'block'; // Если имя контакта содержит искомый термин, показываем его
//         } else {
//             contact.style.display = 'none'; // Иначе скрываем контакт
//         }
//     });
// }

// myTxtInput.addEventListener('input', searchContacts); // Добавляем обработчик события для поля ввода
// myIcon.addEventListener('click', display);
// addIcon.addEventListener('click', addContact);



// let myIcon = document.querySelector('.fa-phone');  // telefonni ikonkasi
// let phoneDiv = document.querySelector('.phone');  // telefonni katta divi
// let myTxtInput = document.querySelector('input[type="search"]');  // input type='search';
// let phoneWindow = document.getElementsByClassName('window')[0];  // telefon ichki displayi
// let addIcon = document.querySelector('input[type="button"]'); // qo'shish ikonkasi
// let removeEmoji = "❌";
// let editEmoji = "✏️";


// function display(){
//     phoneDiv.removeChild(myIcon);
//     phoneWindow.style.display = 'block';
// }

// function removeContact(span){
//     phoneWindow.removeChild(span.parentNode);
//     updateLocalStorage();
// }

// function editContact(span){
//     let p = span.parentNode;
//     let currentText = p.childNodes[0].nodeValue;
//     let newText = prompt("Yangi kontaktni kiriting:", currentText);
//     if (newText !== null && newText!== "") {
//         p.childNodes[0].nodeValue = newText;
//         updateLocalStorage();
//     }
// }

// function addContact(){
//     if(myTxtInput.value == ''){
//         alert("Iltimos, ma'lumot kiriting!");
//     } else {
//         createContactElement(myTxtInput.value);
//         updateLocalStorage();
//         myTxtInput.value = '';
//     }
// }

// function createContactElement(contactText){
//     let newContact = document.createElement('p');
//     newContact.innerText = contactText;
    
//     let editIcon = document.createElement('span');
//     editIcon.setAttribute('onclick', 'editContact(this)');
//     editIcon.innerText = editEmoji;
    
//     let deleteIcon = document.createElement('span');
//     deleteIcon.setAttribute('onclick', 'removeContact(this)');
//     deleteIcon.innerText = removeEmoji;
    
//     newContact.appendChild(editIcon);
//     newContact.appendChild(deleteIcon);
    
//     phoneWindow.appendChild(newContact);
// }

// function updateLocalStorage(){
//     let contacts = [];
//     phoneWindow.querySelectorAll('p').forEach(p => {
//         contacts.push(p.childNodes[0].nodeValue);
//     });
//     localStorage.setItem('contacts', JSON.stringify(contacts));
// }

// function loadContacts(){
//     let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
//     contacts.forEach(contactText => {
//         createContactElement(contactText);
//     });
// }

// function searchContacts() {
//     let searchTerm = myTxtInput.value.toLowerCase(); // Получаем значение из поля ввода и приводим к нижнему регистру
//     let contacts = phoneWindow.querySelectorAll('p'); // Получаем все контакты в окне телефона
    
//     contacts.forEach(contact => {
//         let contactName = contact.childNodes[0].nodeValue.toLowerCase(); // Получаем имя контакта и приводим к нижнему регистру
//         if (contactName.includes(searchTerm)) {
//             contact.style.display = 'block'; // Если имя контакта содержит искомый термин, показываем его
//         } else {
//             contact.style.display = 'none'; // Иначе скрываем контакт
//         }
//     });
// }

// myTxtInput.addEventListener('input', searchContacts); // Добавляем обработчик события для поля ввода
// myIcon.addEventListener('click', display);
// addIcon.addEventListener('click', addContact);

// loadContacts(); // Загружаем контакты из localStorage при загрузке страницы


let myIcon = document.querySelector('.fa-scale-balanced');  // telefonni ikonkasi
let phoneDiv = document.querySelector('.phone');  // telefonni katta divi
let myTxtInput = document.querySelector('input[type="search"]');  // input type='search';
let phoneWindow = document.getElementsByClassName('window')[0];  // telefon ichki displayi
let addIcon = document.querySelector('input[type="button"]'); // qo'shish ikonkasi
let removeEmoji = "❌";
let editEmoji = "✏️";

function display(){
    phoneDiv.removeChild(myIcon);
    phoneWindow.style.display = 'block';
}

function removeContact(span){
    phoneWindow.removeChild(span.parentNode);
    updateLocalStorage();
}

function editContact(span){
    let p = span.parentNode;
    let currentText = p.childNodes[0].nodeValue;
    let newText = prompt("Yangilikni kiriting:", currentText);
    if (newText !== null && newText!== "") {
        p.childNodes[0].nodeValue = newText;
        updateLocalStorage();
    }
}

function addContact(){
    if(myTxtInput.value == ''){
        alert("Iltimos, ma'lumot kiriting!");
    } else {
        createContactElement(myTxtInput.value);
        updateLocalStorage();
        myTxtInput.value = '';
    }
}

function createContactElement(contactText){
    let newContact = document.createElement('p');
    newContact.innerText = contactText;
    newContact.draggable = true; // Enable dragging

    newContact.addEventListener('dragstart', handleDragStart); // Add event listener for dragstart
    newContact.addEventListener('dragend', handleDragEnd); // Add event listener for dragend

    let editIcon = document.createElement('span');
    editIcon.setAttribute('onclick', 'editContact(this)');
    editIcon.innerText = editEmoji;

    let deleteIcon = document.createElement('span');
    deleteIcon.setAttribute('onclick', 'removeContact(this)');
    deleteIcon.innerText = removeEmoji;

    newContact.appendChild(editIcon);
    newContact.appendChild(deleteIcon);

    phoneWindow.appendChild(newContact);
}

function updateLocalStorage(){
    let contacts = [];
    phoneWindow.querySelectorAll('p').forEach(p => {
        contacts.push(p.childNodes[0].nodeValue);
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts(){
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.forEach(contactText => {
        createContactElement(contactText);
    });
}

function searchContacts() {
    let searchTerm = myTxtInput.value.toLowerCase(); // Получаем значение из поля ввода и приводим к нижнему регистру
    let contacts = phoneWindow.querySelectorAll('p'); // Получаем все контакты в окне телефона

    contacts.forEach(contact => {
        let contactName = contact.childNodes[0].nodeValue.toLowerCase(); // Получаем имя контакта и приводим к нижнему регистру
        if (contactName.includes(searchTerm)) {
            contact.style.display = 'block'; // Если имя контакта содержит искомый термин, показываем его
        } else {
            contact.style.display = 'none'; // Иначе скрываем контакт
        }
    });
}

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.childNodes[0].nodeValue);
}

function handleDragEnd(event) {
    let phoneNumber = event.dataTransfer.getData('text/plain');
    initiateCall(phoneNumber);
}

function initiateCall(phoneNumber) {
    alert(`Initiating call to ${phoneNumber}`);
    // Here you can implement the actual call functionality if you have a backend or telephony API
}

myTxtInput.addEventListener('input', searchContacts); // Добавляем обработчик события для поля ввода
myIcon.addEventListener('click', display);
addIcon.addEventListener('click', addContact);

loadContacts(); // Загружаем контакты из localStorage при загрузке страницы
