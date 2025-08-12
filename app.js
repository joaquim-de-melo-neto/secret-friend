let friends = [];
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

const input = document.getElementById("amigo");
const buttonAdd = document.querySelector(".button-add")
const friendsList = document.getElementById("listaAmigos");
const buttonDraw = document.querySelector(".button-draw");
const randomFriendList = document.getElementById("resultado");

const render = () => {
    const name = input.value;
    const isValidInput = validateInput(name);

    if (isValidInput) {
        friends.push(name);
        updateFriendsList();
        input.focus();
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
        randomFriendList.innerHTML = `<li><span>${randomFriend.textContent}</span></li>`;
    } else {
        alert("Você deve adicionar pelo menos um amigo.")
    }

}

const random = size => Math.floor(Math.random() * friends.length);

input.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        render();
    }
})
buttonAdd.addEventListener("click", render);
buttonDraw.addEventListener("click", renderRandomFriend);