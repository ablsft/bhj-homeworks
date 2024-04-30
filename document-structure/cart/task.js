const products = document.querySelectorAll('.product')


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

        } else {

            if (!document.querySelector('.cart')) {
                const cart = document.createElement('div');
                cart.classList.add('cart');

                const cartTitle = document.createElement('div');
                cartTitle.classList.add('cart__title');
                cartTitle.innerText = 'Корзина';

                const cartProductsElement = document.createElement('div');
                cartProductsElement.classList.add('cart__products');

                cart.append(cartTitle, cartProductsElement);
                document.body.insertBefore(cart, document.querySelector('.products'));
            }

            const cartProducts = document.querySelector('.cart__products');
            const productId = product.dataset.id;

            let cartProduct = null;
            for (const productInCart of cartProducts.children) {
                if (productInCart.dataset.id === productId) {
                    cartProduct = productInCart;
                    break;
                }
            }

            if (e.target.classList.contains('product__add')) {
                if (!product.querySelector('.product__delete')) {
                    const productDelete = document.createElement('div');
                    productDelete.classList.add('product__delete');
                    productDelete.innerText = 'Удалить из корзины';
    
                    const productQuantity = product.querySelector('.product__quantity');
                    productQuantity.append(productDelete);
                }
                
                const productImage = product.querySelector('img').getAttribute('src');

                if (cartProduct) {
                    let cartProductCount = cartProduct.lastChild;
                    cartProductCount.textContent = Number(cartProductCount.textContent) + Number(productQuantityValue.textContent);
                
                } else {
                    const cartProduct = document.createElement('div');
                    cartProduct.classList.add('cart__product');
                    cartProduct.dataset.id = productId;
                    
                    const cartProductImage = document.createElement('img');
                    cartProductImage.setAttribute('src', productImage);
                    cartProductImage.classList.add('cart__product-image');
                    
                    const cartProductCount = document.createElement('div');
                    cartProductCount.classList.add('cart__product-count');
                    cartProductCount.innerText = productQuantityValue.textContent;
    
                    cartProduct.append(cartProductImage, cartProductCount);
                    cartProducts.append(cartProduct);
                }

            } else if (e.target.classList.contains('product__delete')) {
                let cartProductCount = cartProduct.lastChild;
                cartProductCount.textContent = Number(cartProductCount.textContent) - Number(productQuantityValue.textContent);
                
                if (Number(cartProductCount.textContent) < 1) {
                    cartProduct.remove();
                    e.target.remove();
                }

                if (!document.querySelector('.cart__product')) {
                    document.querySelector('.cart').remove();
                }
            }
        }
    });
});