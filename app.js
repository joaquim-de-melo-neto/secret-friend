let friends = [];
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

const input = document.getElementById("amigo");
const buttonAdd = document.querySelector(".button-add")
const friendsList = document.getElementById("listaAmigos");
const buttonDraw = document.querySelector(".button-draw");

const render = () => {
    const name = input.value;
    const isValidInput = validateInput(name);

    if (isValidInput) {
        friends.push(name);
        updateFriendsList();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

const validateInput = name => regex.test(name);

const updateFriendsList = () => {
    clearFriendList();
    friends.forEach((friend, index) => friendsList.innerHTML += `<li id="friend-${index}"><span>${friend}</span></li>`);
}

const clearFriendList = () => {
    input.value = "";
    friendsList.innerHTML = "";
};

const renderRandomFriend = () => {
    if (friends.length > 0) {
        const indexRandomFriend = random(friends.length);
        let randomFriend = document.getElementById(`friend-${indexRandomFriend}`);
        randomFriend.style.color = "purple";
    } else {
        alert("Você deve adicionar pelo menos um amigo.")
    }

}

const random = size => Math.floor(Math.random() * friends.length);

buttonAdd.addEventListener("click", render);
buttonDraw.addEventListener("click", renderRandomFriend);