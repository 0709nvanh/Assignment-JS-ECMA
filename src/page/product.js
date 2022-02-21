import { getAll, search } from "../api/product"
import Footer from "../component/footer";
import Header from "../component/header";
import { $ } from "../utils/selector";

const ProductPage = {
    async render(){
        const { data } = await getAll();
        return /*html*/`
                <div class="container-xl">
                    <div class="header h-[80px] bg-[#253237]">${Header.render()}</div>
                    <div>
                        <div class="grid grid-cols-[300px,auto]">
                            <div>
                                
                            </div>
                            <div class="mx-auto px-5 py-6">
                                <div class="py-4">
                                    <li class="ml-[38px] flex relative">
                                        <input type="search" id="name-category" class="outline-none focus:ring-indigo-500 focus:border-indigo-500 border-b-2 transition-all duration-300 ease-linear p-[5px] flex-1 block w-full sm:text-sm" placeholder="Enter new category...">
                                        <button type="submit"><i class="absolute right-0 top-[6px] cursor-pointer fas fa-search text-black font-semibold pr-[15px] text-[20px] hover:text-[#588067] transition-all"></i></button>
                                    </li>
                                </div>
                                <div class="grid grid-cols-5 gap-2" id="list-product">
                                    ${data.map((post) => /*html*/`
                                            <div key={post.id} class="border p-4 w-[200px] hover:border-cyan-300 rounded-sm">
                                            <a href="">
                                                <img class="py-2" src="${post.avatar}" alt="">
                                                <h3 class="py-[5px]"><a href="/product/${post.id}" class="text-black font-bold text-[14px]">${post.name}</a></h3>
                                                <div class="py-[5px]">
                                                    <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                                    <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                                    <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                                    <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                                    <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                                </div>
                                                <p class="text-sm text-gray-500 py-[5px]">$${post.price}.00 </p>                  
                                            </a>
                                            <div class="relative group">
                                                <div class="invisible absolute opacity-0 group-hover:opacity-100 group-hover:visible group-hover:rotate-0 -rotate-[75]">
                                                    <a href="/" class="hover:translate-y-[10px] ease-linear duration-300"><p class="uppercase text-[14px] hover:text-green-800">add to card</p></a>
                                                </div>
                                            </div>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${Footer.render()}</div>
                </div>
        `
    },
     afterRender(){
      const key = $('input[type="search"]');
      key.addEventListener('keyup',async()=> {
          console.log(key.value);
          const {data} = await search(key.value)
          $('#list-product').innerHTML = 
          data.map((post) => /*html*/`
            <div key={post.id} class="border p-4 w-[270px] hover:border-cyan-300 rounded-sm">
                <a href="">
                    <img class="py-2" src="${post.avatar}" alt="">
                    <h3 class="py-[5px]"><a href="/product/${post.id}" class="text-black font-bold text-[14px]">${post.name}</a></h3>
                    <div class="py-[5px]">
                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                    </div>
                    <p class="text-sm text-gray-500 py-[5px]">$${post.price}.00 </p>                  
                </a>
                <div class="relative group">
                    <div class="invisible absolute opacity-0 group-hover:opacity-100 group-hover:visible group-hover:rotate-0 -rotate-[75]">
                        <a href="/" class="hover:translate-y-[10px] ease-linear duration-300"><p class="uppercase text-[14px] hover:text-green-800">add to card</p></a>
                    </div>
                </div>
            </div>
        `).join("")
        
      })
    }
}
export default ProductPage;