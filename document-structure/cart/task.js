const products = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products');


products.forEach(function (product) {
    product.addEventListener('click', (e) => {
        let productQuantityValue = product.querySelector('.product__quantity-value');
        let productQuantityValueNumber = Number(productQuantityValue.textContent);

        if (e.target.classList.contains('product__quantity-control_dec')) {
            if (productQuantityValueNumber > 1) {
                productQuantityValue.textContent = productQuantityValueNumber - 1;
            }

        } else if (e.target.classList.contains('product__quantity-control_inc')) {
            productQuantityValue.textContent = productQuantityValueNumber + 1;

        } else if (e.target.classList.contains('product__add')) {
            const productId = product.dataset.id;
            const productImage = product.querySelector('img').getAttribute('src');

            let cartProduct = null;
            for (const productInCart of cartProducts.children) {
                if (productInCart.dataset.id === productId) {
                    cartProduct = productInCart;
                    break;
                }
            }

            if (cartProduct) {
                let cartProductCount = cartProduct.lastChild;
                cartProductCount.textContent = Number(cartProductCount.textContent) + Number(productQuantityValue.textContent);
            
            } else {
                cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.dataset.id = productId;
                
                const cartProductImage = document.createElement('img');
                cartProductImage.setAttribute('src', productImage);
                cartProductImage.classList.add('cart__product-image');
                
                const cartProductCount = document.createElement('div');
                cartProductCount.classList.add('cart__product-count');
                cartProductCount.innerText = productQuantityValue.textContent;

                cartProducts.append(cartProduct);
                cartProducts.lastChild.append(cartProductImage, cartProductCount);
            }
        }
    });
});