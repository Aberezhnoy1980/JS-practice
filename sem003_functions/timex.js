function padTo2Digits(num) {
    return num.toString().padStart(2, '0'); // Преобразует 9 в 09, а 10 оставит без изменений
  }

Date.prototype.timeNow = function () {
    return `${padTo2Digits(this.getHours())}:${padTo2Digits(this.getMinutes())}:${padTo2Digits(this.getSeconds())}`;
};
function execCondition10() {
    // const userInput = prompt('Please, enter your name');
    let intervals = [
        '00:00:00',
        '05:00:00',
        '11:00:00',
        '17:00:00'
    ]
    const now = new Date();
    if (now.timeNow() > intervals[3])
        console.log('True');
    else
        console.log('False');
}

execCondition10();