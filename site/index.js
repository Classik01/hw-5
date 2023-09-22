const gameFirst = () => {
    let a = Number(prompt(`Введите номер месяца`));
    if (a === 1 || a === 2 || a === 12) {
        return alert(`Зима`);
    }
    else if (a <= 5 && a >= 3) {
        return alert(`Весна`);
    }
    else if (a <= 8 && a >=6) {
        return alert(`Лето`);
    }
    else if (a <= 11 && a >= 9) { 
        return alert(`Осень`);
    }
    else {
        return alert(`Неверное значение`);
    }
}