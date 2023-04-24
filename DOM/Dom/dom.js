// console.log(window);
// console.log(window.document);
// To access window properties and method stuff we use dir
// console.dir(window.document);
// we generally don't use window.document we can directly use document
// console.log(document.body);
// here above we are accessing all body
// console.log(document.body.innerText);
// here above we are accessing inner text body
// Here below we are accesing innerHMTL of body
// console.log(document.body.innerHTML)

// console.log(document.links[0]);

// Here below by using document.body.innerHTML it changes all body content limited to what we have set
// document.body.innerHTML = '<h1>Hello World</h1>';

// console.log(document.getElementById('main'));
// const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>';
//Here above we have using getElementById, it grabs by id and on next step we have taken const main and changed document.body.innerText

// document.querySelector('#main h1').innerText = 'Hello';
//here above i have used query selector (0,0) in first element i have grab element id and in second element i have grab h1 and changed it to by using innerText "Hello"

let header= document.getElementById('term');
console.log(header);

header.innerText='Yours loan Calculator';
header.innerHTML='Kamehameha';
header.textContent="Mushahi Calculator";

let Payment = document.getElementById('payment');
Payment.innerText='Yours Thankyou';
Payment.innerHTML='<h1>MiyaMoto</h1>'
Payment.textContent='Best Payment Option';

let months = document.getElementById('months-to-pay');

months.innerText = 'How many months to pay';

let LoansAmount = document.getElementById('LoanAmount');
LoansAmount.innerText = 'Yours loan Amounts';

console.log(LoansAmount);