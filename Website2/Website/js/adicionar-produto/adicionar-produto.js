
let contadorItems = 0

const addButton = document.querySelectorAll('.add-button');
const cartCount = document.getElementById('cart-count');

addButton.forEach(button => {
    button.addEventListener('click', () => {
        contadorItems++;
        cartCount.textContent = contadorItems;
        cartCount.style.display = 'inline-block';
    });

})
