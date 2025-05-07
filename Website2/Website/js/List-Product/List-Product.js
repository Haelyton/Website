document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-button');
  
    addButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productCard = button.closest('.main-products');
        const productImage = productCard.querySelector('img');
        const productName = productImage.alt || "Produto";
        const priceText = productCard.querySelector('.price').textContent;
  
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
        cart.push({ name: productName, price: priceText });
  
        localStorage.setItem('cart', JSON.stringify(cart));
  
        alert(`${productName} adicionado ao carrinho!`);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    const userBalance = 200.00;
    let total = 0;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `<span>${item.name}</span> <span>${item.price}</span>`;
        cartItemsList.appendChild(li);

        const price = parseFloat(item.price.replace('R$', '').replace('.', '').replace(',', '.'));
        total += price;
    });

    totalPriceEl.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;

    checkoutButton.addEventListener('click', () => {
        if (total <= userBalance) {
            alert('✅ Compra finalizada com sucesso!');
            localStorage.removeItem('cart');
            location.reload();
        } else {
            alert('❌ Saldo insuficiente para finalizar a compra.');
        }
    });
});

document.getElementById('clear-cart-button').addEventListener('click', function () {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  document.getElementById('total-price').textContent = 'Total: R$ 0,00';

  localStorage.removeItem('cart');
});


  
  