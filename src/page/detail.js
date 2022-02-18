import { get, getAll } from "../api/product";

const DetailProduct = {
  async render(id) {
    const { data } = await get(id);
    const products = (await getAll()).filter((product) => product.id !== id);
    console.log(data);
    return /*html*/ `
            <div>
                <div class="text-center relative py-[110px] w-full h-full bg-no-repeat bg-cover" style="background-image: url('http://demo.posthemes.com/pos_ecolife/layout3/themes/theme_ecolife3/assets/img/bg_breadcrumb.jpg')">
                    <div class="container mx-auto">
                        <nav class="text-center">
                            <ol class="block">    
                                <li class="inline-block hover:text-green-800 hover:font-bold"><a class="pr-3" href="/">Home</a><i class="text-[10px] hover:text-black fas fa-arrow-right"></i></li>
                                <li class="inline-block text-center hover:text-green-800 hover:font-bold"><a class="px-3" href="/">Home</a><i class="text-[10px] fas fa-arrow-right"></i></li>
                                <li class="inline-block text-center text-green-700 font-bold"><a class="px-3" href="/"">${data.name}</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="container p-4 mx-auto">
                        <div class="grid grid-rows-3 gap-4">
                            <div class="grid grid-cols-2 gap-3">
                                <div class="image-content px-3">
                                    <img src="${data.avatar}">
                                </div>
                                <div class="text-content px-3">
                                    <h1 class="text-[24px] font-black mb-2">${data.name}</h1>
                                    <div class="flex items-center py-[5px]">
                                        <p class=" text-[16px] font-bold">Reference:</p>
                                        <span class="text-[14px] px-2">demo_${data.id}</span>
                                    </div>
                                    <div class="py-[5px]">
                                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                        <i class="fas fa-star text-[10px] text-[#fdd835]"></i>
                                    </div>
                                    <div class="price-content py-[5px]">
                                        <p class="text-[35px]">$${data.price}</p>
                                    </div>
                                    <div class="desc-content justify-center pt-[7px] pb-3">
                                        <p>${data.desc} Nào nâng ly vì gia đình! Những người gắn bó gần gũi nhất. Dù bạn nói gì, 
                                        bạn cũng biết sẽ luôn được yêu thương, ủng hộ, ngay, luôn và #mãi. Chào đón Năm Mới cùng
                                         những người yêu thương,  cả nhà cùng mở ngay 1 chai #JimBeam , Jim Beam Highball không
                                          màu mè với chất lượng, hương vị hòa quyện tuyệt vời bên cạnh giây phút quây quần.
                                           VÀ một ly #JimBeamHighball là sự kết hợp thú vị của hương vị truyền thống với chút phá 
                                           cách, cho Năm Mới tưng bừng. </p>
                                    </div>
                                    <hr>
                                    <div class="add-to-card grid grid-cols-[100px,auto] py-3">
                                        <div class="number">
                                            <input type="number" class="w-[90px] border rounded-xl border-zinc-300 outline-none p-3">
                                        </div>
                                        <button type="button" class="inline-flex items-center w-[152px] px-4 py-2 border border-transparent rounded-[35px] hover:bg-gray-800 transition-all duration-200 ease-linear shadow-sm text-sm font-medium text-white bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Add to card
                                        </button>
                                    </div>
                                    <div class="share-icons grid grid-cols-[70px,auto] items-center text-center">
                                        <div class="text pr-3">
                                            <h2 class="font-bold">Share</h2>
                                        </div>
                                        <div class="social_follow">
                                            <ul class="flex">
                                                <li><a class="hover:text-green-700 duration-300 ease-linear text-[14px] pr-[24px]" href=""><i class="fab fa-facebook-f"></i></a><li>
                                                <li><a class="hover:text-green-700 duration-300 ease-linear text-[14px] pr-[24px]" href=""><i class="fab fa-twitter"></i></a><li>
                                                <li><a class="hover:text-green-700 duration-300 ease-linear text-[14px] pr-[24px]" href=""><i class="fab fa-youtube"></i></a><li>
                                                <li><a class="hover:text-green-700 duration-300 ease-linear text-[14px] pr-[24px]" href=""><i class="fab fa-google"></i></a><li>
                                                <li><a class="hover:text-green-700 duration-300 ease-linear text-[14px] pr-[24px]" href=""><i class="fab fa-facebook-f"></i></a><li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="desc-long container mx-auto py-8">
                                <div>
                                    <h2 class="uppercase font-bold text-[24px] text-black">description</h2>
                                </div>
                                <div class="border p-8">
                                    <ul>
                                        <li><div>Score extra points when it comes to your sporty look with the Juicy Couture™ Juicy Quilted Terry Track Jacket.</div></li>
                                        <li><div>Soft terry construction in a quilted design.</div></li>
                                        <li><div>Brand detail at the back neckline.</div></li>
                                        <li><div>Front zipper closure.</div></li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div class="grid grid-cols-4 gap-4">
                                    ${data.map((products) => /*html*/`
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
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
};
export default DetailProduct;
