
const chat = document.querySelector('#chat')
const chatInput = document.querySelector('#chatInput')
const sendBtn = document.querySelector('#sendBtn')

const chat2 = document.querySelector('#chat2')
const chatInput2 = document.querySelector('#chatInput2')
const sendBtn2 = document.querySelector('#sendBtn2')


function getMessages () {
    const messages = JSON.parse(localStorage.getItem('key')) || []

}

function showMessage () {
    const message = chatInput.value
    if(message !== ''){
        const chatParagraph = document.createElement('p');
        chatParagraph.textContent = `Toochi: ${message}`;
        chat2.appendChild(chatParagraph);
        chatInput.value = ''
    }
}
sendBtn.addEventListener('click', showMessage)

function showMessage2 () {
    const message2 = chatInput2.value
    if(message2 !== ''){
        const chatParagraph2 = document.createElement('p');
        chatParagraph2.textContent = `Dad: ${message2}`;
        chat.appendChild(chatParagraph2);
        chatInput2.value = ''
    }
}
sendBtn2.addEventListener('click', showMessage2)


function saveMessages() {
    localStorage.setItem('key', JSON.stringify(messages));
};


