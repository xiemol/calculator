function appendToScreen(value) {
    document.getElementById('screen').value += value;/*实现计算式子的拼接*/
}

function clearScreen() {
    document.getElementById('screen').value = '';/*清楚所有计算式*/
}

function deleteChar() {
    var screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);/*清楚计算式子一位*/
}

function calculate() {
    var expression = document.getElementById('screen').value;
    try {
        var result = eval(expression);
        document.getElementById('screen').value = result;/*直接调用eval函数对式子进行运算*/
    } catch (error) {
        document.getElementById('screen').value = 'Error';/*非法式子抛出异常*/
    }
}
