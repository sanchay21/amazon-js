export const cart = [];

let cartQuantity = 0;
export function addToCart(productId){
    let matchingItem
        cart.forEach((cartItem) =>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
            cartQuantity+=1;

        }
        else{
            cart.push({
                productId:productId,
                quantity:1
            });
            cartQuantity+=1;
        }

        document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}