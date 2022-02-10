import axios from 'axios';
import { getAll } from '../api/product';

const ListProductHome = {
    async render() {
        const { data } = await getAll();
        return /*html*/`
                <div class="py-6">
                    <div class="grid grid-cols-4 gap-4">
                        ${data.map((post) => /*html*/`
                                <div class="border p-4 w-[270px] hover:border-cyan-300 rounded-sm">
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
        
        `
    },
};
export default ListProductHome;