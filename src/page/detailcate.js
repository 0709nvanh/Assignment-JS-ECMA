import { getProduct } from "../api/category"
const DetailCategory = {
    async render(id){
        const { data } = await getProduct(id);
        console.log(data);
        return /*html*/`
            <h1>Category : ${data.name}</h1>
            <div class="grid grid-cols-5 gap-4">
                ${data.products.map(item => /*html*/`
                    <div key={item.id} class="border p-4 w-[270px] hover:border-cyan-300 rounded-sm">
                        <a href="">
                            <img class="py-2" src="${item.avatar}" alt="">
                            <h3 class="py-[5px]"><a href="/product/${item.id}" class="text-black font-bold text-[14px]">${item.name}</a></h3>
                            <div class="py-[5px]">
                                <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                            </div>
                            <p class="text-sm text-gray-500 py-[5px]">$${item.price}.00 </p>                  
                        </a>
                    </div>
                `)}
            </div>
        `
    }
}

export default DetailCategory;