var calc = ''
document.getElementById('result').value = '0'

function addChar(char, sym = false) {
    if (sym == false) {
        calc += char.toString()
        document.getElementById('result').value = calc
    } else {
        calc += ' ' + char.toString() + ' '
        document.getElementById('result').value = calc
    }
}

function erase() {
    calc = ''
    document.getElementById('result').value = '0'
}

function calculate() {
    if (document.getElementById('result').value === '0') {
        erase()
    } else {
        document.getElementById('result').value = eval(calc)
        calc = eval(calc)
    }
    
}

