
const socket = io();
const messages = document.getElementById('messages');
const form = document.getElementById('f');
const input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (input.value) {
        socket.emit('new_message', input.value);
        input.value = '';
    }
});

socket.on('new_message', function(msg) {
    let item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
});

function changeNickname() {
    let nickname = prompt('Choose your nickname:');
    if (nickname) {
        socket.emit('change_nickname', nickname);
    }
}

changeNickname();