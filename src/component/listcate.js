import { getAll } from "../api/category"

const ListCategory = {
    async render(){
        const { data } = await getAll();
        console.log(data);
        return  /*html*/`
            <div class="px-6 py-2">
                <p class="py-3 font-black text-[20px]">Categories</p>
                ${data.map(item => /*html*/`
                    <div class="relative group">
                        <h1 class="hover:translate-x-[8px] duration-300 cursor-pointer hover:text-[#4fb68d] py-[5px]"><a href="/categories/${item.id}?_embed=products" class="text-[16px]">${item.name}</a></h1>
                    </div>
                `).join("")}
            </div>
        `
    }
}
export default ListCategory;