// This file manages the virtual assistant functionality. 
// It handles user interactions with the assistant, processes queries, and provides responses based on predefined logic.

const assistantChat = document.getElementById('assistantChat');
const chatBody = document.getElementById('chatBody');

function toggleAssistant() {
    assistantChat.classList.toggle('open');
}

function showAssistant() {
    toggleAssistant();
    // saddMessage("¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?");
}

function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.padding = '1rem';
    messageElement.style.background = 'var(--bg-light)';
    messageElement.style.borderRadius = '0.5rem';
    messageElement.style.marginBottom = '1rem';
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}

// Example of processing a user query
function processQuery(query) {
    let response = "Lo siento, no entiendo tu pregunta.";
    
    if (query.includes("cáncer colorrectal")) {
        response = "El cáncer colorrectal es uno de los tipos de cáncer más comunes, pero también uno de los más prevenibles cuando se detecta a tiempo.";
    } else if (query.includes("cribado")) {
        response = "El cribado es un proceso para detectar enfermedades en personas que no presentan síntomas.";
    }
    
    addMessage(response);
}

// Event listener for user input (to be implemented in main.js)
document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userInput = e.target.value;
        addMessage(userInput);
        processQuery(userInput);
        e.target.value = ''; // Clear input
    }
});