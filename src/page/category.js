import { getAll } from "../api/category"
import Footer from "../component/footer";
import Header from "../component/header";

const CategoryPage = {
    async render(){
        const { data } = await getAll();
        return /*html*/`
            <div class="container-xl">
                <div class="header h-[80px] bg-[#253237]">${Header.render()}</div>
                <div class="px-5 py-6">
                    <h2 class="font-bold py-4 text-[20px]">Category</h2>
                    <div class="grid grid-cols-5 gap-2">
                        ${data.map((cateItem) => /*html*/`
                                <div key={post.id} class="border p-4 w-[270px] hover:border-cyan-300 rounded-sm">
                                    <a href="">
                                        <img class="py-2" src="${cateItem.avatar}" alt="">
                                        <h3 class="py-[5px]"><a href="/product/${cateItem.id}" class="text-black font-bold text-[14px]">${cateItem.name}</a></h3>
                                        <div class="py-[5px]">
                                            <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                            <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                            <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                            <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                            <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                        </div>               
                                    </a>
                                </div>
                        `).join("")}
                    </div>
                </div>
                <div>${Footer.render()}</div>
            </div>
        `
    }
}

export default CategoryPage;