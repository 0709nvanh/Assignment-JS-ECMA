import Footer from "../component/footer";
import Header from "../component/header";
import { DecreaseQuantity, IncreaseQuantity, RemoveProduct } from "../utils/cart";
import { $ } from "../utils/selector";
import { reRender } from "../utils/rerender";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CartPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            return /*html*/`
                <div class="container-xl">
                    <div class="header h-[80px] bg-[#253237]">${Header.render()}</div>
                    <div class="cart-page p-6">
                        <div class="py-5"><h2 class="text-[20px] font-black">Shopping Cart</h2></div>
                        <div class="grid grid-cols-[960px,auto]">
                            <div>
                                <table>
                                    <tbody class="divide-y divide-slate-700 py-3">
                                            ${cart.map(item => /*html*/`
                                                <tr class="py-5">
                                                    <td class="py-3 pr-2 w-[130px] h-[125px]"><img class="w-[125px] h-[125px] w-fit" src="${item.avatar}"></td>
                                                    <td class="w-[320px]"><p class="font-bold mx-auto px-8">${item.name}</p></td>
                                                    <td class="w-[120px]"><p class="font-bold mx-auto">${item.price} $</p></td>
                                                    <td class="w-[250px]">
                                                        <div class="grid grid-cols-3 items-center">
                                                            <div class="px-3">
                                                                <button data-id="${item.id}" class="btn btn-decrease inline-flex text-[30px] w-[52px] px-4 py-2 border border-transparent rounded-[35px] hover:bg-gray-800 transition-all duration-200 ease-linear shadow-sm text-sm font-medium text-white bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-</button>
                                                            </div>
                                                            <div class="mx-auto">
                                                                <input type="number" value="${item.quantity}" class="w-[60px] border border-gray-500 p-2"/>
                                                            </div>
                                                            <div class="px-3">
                                                                <button data-id="${item.id}" class="btn btn-increase inline-flex text-[30px] w-[52px] px-4 py-2 border border-transparent rounded-[35px] hover:bg-gray-800 transition-all duration-200 ease-linear shadow-sm text-sm font-medium text-white bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">+</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6">
                                                        <button data-id="${item.id}" class="btn btn-remove"><i class="fa-solid fa-trash-can text-[20px] hover:text-[#FF0000] transition-all duration-300 ease-linear"></i></button>
                                                    </td>
                                                </tr>
                                            `).join("")}
                                    </tbody>
                                </table>
                            </div>
                            <div class="cart border h-[270px]">
                                <div class="py-3">
                                    <div class="p-5 grid grid-cols-2 gap-4">
                                        <p>items: <span id="itemTotalQuantity"></span></p>
                                        <p><span id="totalPrice"></span> $</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${Footer.render()}</div>
                </div>
        `
        } else { 
            return /*html*/`
                <div class="container-xl">
                    <div class="header h-[80px] bg-[#253237]">${Header.render()}</div>
                    <div>${Footer.render()}</div>
                </div>
            `
        }
    },
    afterRender(){
        const itemTotalQuantity = $('#itemTotalQuantity');
        const totalPrice = $('#totalPrice');

        let cart = [];
        let total = 0;
        let quantity = 0;
        cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
        if(cart.length>0){
            cart.forEach(item => {
                total += (+item.price)*(+item.quantity);
                quantity += item.quantity;
            })
            itemTotalQuantity.innerHTML = quantity;
            totalPrice.innerHTML = total;
        }


        const btns = $('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                if(btn.classList.contains('btn-increase')){
                    itemTotalQuantity.innerHTML = +itemTotalQuantity.innerHTML + 1;
                    IncreaseQuantity(id, () => {
                        reRender(CartPage, "#content");
                        toastr.success("Increase successfully");
                    })
                } else if(btn.classList.contains('btn-decrease')){
                    itemTotalQuantity.innerHTML = +itemTotalQuantity.innerHTML - 1;
                    DecreaseQuantity(id, () => {
                        reRender(CartPage, "#content");
                        toastr.success("Decrease successfully");
                    });
                } else {
                    RemoveProduct(id, () => {
                        reRender(CartPage, "#content")
                        toastr.success("Delete successfully")
                    })
                }
            })
        });
        
    }
}
export default CartPage;
