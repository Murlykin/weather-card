//  Num counter
function numCounter(selector, number, time, step) {
    const counter = document.querySelector(selector)

    let res = 0

    const allTime = Math.round(time / (number / step))

    let interval = setInterval(() => {
        res = res + step

        if (res === number) {
            clearInterval(interval)
        }
        counter.innerHTML = res
    }, allTime)
}

// ДАНА ФУНКЦІЯ МОЖЕ БУТИ ВИКЛИКАНА НЕОБМЕЖЕНА КІЛЬКІСТЬ РАЗІВ

// Перший аргумент - селектор, куди виводитимемо результат (с. якщо клас і з # якщо id). ПРИКЛАД: '.num1' або '#num1'
// Другий аргумент - кінцеве значення, яке буде показано на сторінці
// Третій аргумент - час анмації (мілісекунди)
// Четвертий аргумен - крок анімації (наприклад додаємо по 1 або 10 або 100)
numCounter('#num1', 600, 2000, 10)
