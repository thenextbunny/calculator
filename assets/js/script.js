function calculate (type, amount) {  
    if (type === 'action') {
        switch (amount) {
            case 'c':
                document.getElementById('result').value = ''
                break;
            case '+':
            case '-': 
            case '/': 
            case '*': 
            case '.':
                document.getElementById('result').value += amount;
                break;
            case '=':
                let fieldAmount = eval(document.getElementById('result').value);
                document.getElementById('result').value = fieldAmount;
                break;
        }
    } else if (type === 'amount') {
        document.getElementById('result').value += amount
    }
}