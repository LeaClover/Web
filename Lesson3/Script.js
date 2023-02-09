
function inputName() {
    let userName = prompt('Введите ваше имя', 'Тут должно быть ваше имя');
    return userName
}

function showName(userName) {
    alert(`Ваше имя - ${userName}. Приветствуем вас!`);
}

showName(inputName())
