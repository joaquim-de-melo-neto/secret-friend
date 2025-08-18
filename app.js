// GLOBAL VARIABLES
let friends = [];
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

// HTML ELEMENTS
const input = document.getElementById("amigo");
const buttonAdd = document.querySelector(".button-add")
const friendsList = document.getElementById("listaAmigos");
const buttonDraw = document.querySelector(".button-draw");
const randomFriendList = document.getElementById("resultado");

// CODE
const render = () => {
    const name = input.value.trim();
    const alreadyExists = isDuplicated(name);
    const isValidName = validate(name);

    if (alreadyExists) {
        alert("Esse amigo já está na lista.");
    }
    else if (isValidName) {
        friends.push(name);
        updateFriendsList();
        input.focus();
    }
    else {
        alert("Por favor, insira um nome válido.");
    }
}

const isDuplicated = name => friends.includes(name);

const validate = name => regex.test(name);

const updateFriendsList = () => {
    clearFriendList();
    friends.forEach((friend) => friendsList.innerHTML += `<li><span>${friend}</span></li>`);
}

const clearFriendList = () => {
    input.value = "";
    friendsList.innerHTML = "";
};

const renderRandomFriend = () => {
    if (friends.length > 0) {
        const indexRandomFriend = random(friends.length);
        randomFriendList.innerHTML = `<li><span>${friends[indexRandomFriend]}</span></li>`;
        friends.splice(indexRandomFriend, 1);
        updateFriendsList();

        buttonDraw.focus();
    } else {
        alert("Você deve adicionar pelo menos um amigo.")
    }

}

const random = size => Math.floor(Math.random() * friends.length);

// EVENT LISTENERS
input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        render();
    }
})
buttonAdd.addEventListener("click", render);
buttonDraw.addEventListener("click", renderRandomFriend);