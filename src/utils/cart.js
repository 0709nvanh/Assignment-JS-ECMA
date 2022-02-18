let cart = [];

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
}

export const AddToCart = (newProduct) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += +newProduct.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const IncreaseQuantity = (id, next) => {
    cart.find(item => item.id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

export const DecreaseQuantity = (id, next) => {
    const CurrentProduct = cart.find(item => item.id === id);
    CurrentProduct.quantity--;
    if(CurrentProduct.quantity<1){
        const confirm = window.confirm("Bạn muốn xóa hay không?");
        if(confirm){
            cart = cart.filter(item => item.id != id);
            // toastr.success("Xóa sản phẩm thành công")
        } else {
            CurrentProduct.quantity = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

export const RemoveProduct = (id, next) => {
    const confirm = window.confirm("Bạn muốn xóa hay không?");
    if(confirm){
        cart = cart.filter(item => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}