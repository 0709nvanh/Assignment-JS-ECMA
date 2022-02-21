const NavAdmin = {
    render(){
        return /*html*/`
                    <div class="">
                        <div class="bg-gray-800">
                            <div class="user grid grid-cols-[70px,auto] items-center p-2 border rounded-tl-lg border-transparent">
                                <div class="avatar p-2">
                                    <img class="rounded-full h-[40px] w-[40px]" src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/34367459_2106552036290291_5339567449069060096_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=PKjDx-lGn08AX96nE7E&_nc_ht=scontent.fhan5-2.fna&oh=00_AT8GZYVh3C-tWcWuEck-bTEh40WgsvjCCwif1W1rgAFPLw&oe=62231111">
                                </div>
                                <div class="name">
                                    <p class="text-white font-bold text-[20px]">Nguyen Van Anh</p>
                                </div>
                            </div>
                        </div>
                        <div class="menu bg-gray-1 p-5">
                            <div class="hover:bg-gray-800  hover:border rounded-xl border-gray-600">
                                <div class="hover:translate-x-[8px] duration-300 cursor-pointer hover:text-[#4fb68d] font-bold p-2"><a class="text-white hover:text-[#4fb68d] p-2 w-full h-[20px]" href="/admin/dashboard">Home</a></div>
                            </div>
                            <div class="hover:bg-gray-800  hover:border rounded-xl border-gray-600">
                                <div class="hover:translate-x-[8px] duration-300 cursor-pointer hover:text-[#4fb68d] font-bold p-2"><a class="text-white hover:text-[#4fb68d] p-2 w-full h-[20px]" href="/admin/products">Product</a></div>
                            </div>
                            <div class="hover:bg-gray-800  hover:border rounded-xl border-gray-600">
                                <div class="hover:translate-x-[8px] duration-300 cursor-pointer hover:text-[#4fb68d] font-bold p-2"><a class="text-white hover:text-[#4fb68d] p-2 w-full h-[20px]" href="/admin/categories">Category</a></div>
                            </div>
                            <div class="hover:bg-gray-800  hover:border rounded-xl border-gray-600">
                                <div class="hover:translate-x-[8px] duration-300 cursor-pointer hover:text-[#4fb68d] font-bold p-2"><a class="text-white hover:text-[#4fb68d] p-2 w-full h-[20px]" href="">User</a></div>
                            </div>
                        </div>
                    </div>
        `
    },
    afterRender(){
        
    }
}
export default NavAdmin;