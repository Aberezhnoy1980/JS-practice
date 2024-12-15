// const userAnswer = prompt('Зимой и летом одним цветом').toLowerCase;

// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else
//     console.log('Не угадал');

// const userAnswer2 = prompt('Сидит дед во сто шуб одет. Кто его рааздевает, тот слезы проливает').toLowerCase;

// if (userAnswer === 'лук') {
//     console.log('Угадал');
// } else
//     console.log('Не угадал');

//  use functions
const riddle = 'Зимой и летом одним цветом';
const answer = 'елка';

function guessTheWord(riddle, answer) {
    const userAnswer = prompt(riddle).toLowerCase();
    if (userAnswer === answer) {
        console.log('Congratulations! You are win!');
    } else
        console.log('Sorry, your answer is not correct');
}

// guessTheWord(riddle, answer);

function puzzle() {
    guessTheWord(riddle, answer);
}