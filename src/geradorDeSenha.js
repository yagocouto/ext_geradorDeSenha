"use strict";
/**
 * Gerador de Senhas Aleatórias
    Descrição: Um app que gera senhas seguras com opções de personalização.
    Tecnologias: TypeScript, HTML, CSS.
    Funcionalidades:
    Escolha de comprimento da senha
    Inclusão de números, letras e símbolos
    Copiar a senha para a área de transferência
*/
const copy = document.querySelector('#copy');
const passwordText = document.querySelector('span');
const passwordLength = document.querySelector('#passLength');
const generateButton = document.querySelector('#generatePassword');
const numberCheckInput = document.querySelector('#number');
const symbolsCheckInput = document.querySelector('#symbols');
const lettersCheckInput = document.querySelector('#letters');
generateButton?.addEventListener('click', () => {
    if (passwordLength instanceof HTMLInputElement) {
        const passLength = parseInt(passwordLength?.value) || 0;
        if (isNaN(passLength) || passLength <= 0) {
            alert('Digite um tamanho válido para a senha.');
            return;
        }
        randomGenerate(passLength);
    }
});
function randomGenerate(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*_-+=?'.split('');
    const numbers = '0123456789'.split('');
    const symbols = '!@#$&*_-+=?'.split('');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let includeNumbers = numberCheckInput?.checked;
    let includeSymbols = symbolsCheckInput?.checked;
    let includeLetters = lettersCheckInput?.checked;
    if (!(includeNumbers || includeSymbols || includeLetters)) {
        console.log('Você precisa selecionar pelo menos uma opção');
        return;
    }
    characters = includeNumbers ? characters : removeCharacters(characters, numbers);
    characters = includeSymbols ? characters : removeCharacters(characters, symbols);
    characters = includeLetters ? characters : removeCharacters(characters, letters);
    const password = Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]);
    if (passwordText instanceof HTMLSpanElement) {
        passwordText.innerText = password.join('');
    }
}
function removeCharacters(characters, ...groupsToRemove) {
    return characters.filter((item) => !groupsToRemove.some(group => group.includes(item)));
}
