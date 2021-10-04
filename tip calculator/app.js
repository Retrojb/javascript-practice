

const calculateTip = () => {
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
    console.log('Bill amount', amount);
    console.log(service);

    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return
    }
    
    if (persons === '1') {
        document.querySelector('#each').style.display = 'none';
    } else {
        document.querySelector('#each').style.display = 'block';
    }

    let total = (amount * service) / persons;
    total = total.toFixed(2);

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
};
window.onload = () => {
    document.querySelector('#calculate').onClick = calculateTip;
    console.log('Button was clicked')
}