import { get, getAll } from "../api/product";
import { AddToCart } from "../utils/cart";
import { $ } from "../utils/selector";
import Footer from "../component/footer";
import Header from "../component/header";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DetailProduct = {
  async render(id) {
    const { data } = await get(id);
    const products = await getAll();
    // console.log(products);
    const productItems = products.data.filter((product) => product.id !== id);
    return /*html*/ `
            <div>
                <div class="header h-[80px] bg-[#253237]">${await Header.render()}</div>
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
                        <div>
                            <div class="grid grid-cols-[400px,auto] gap-3">
                                <div class="image-content px-3">
                                    <img class="w-[300px]" src="${data.avatar}">
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
                                        <p class="text-[14px]">${data.desc} N??o n??ng ly v?? gia ????nh! Nh???ng ng?????i g???n b?? g???n g??i nh???t. D?? b???n n??i g??, 
                                        b???n c??ng bi???t s??? lu??n ???????c y??u th????ng, ???ng h???, ngay, lu??n v?? #m??i. Ch??o ????n N??m M???i c??ng
                                         nh???ng ng?????i y??u th????ng,  c??? nh?? c??ng m??? ngay 1 chai #JimBeam , Jim Beam Highball kh??ng
                                          m??u m?? v???i ch???t l?????ng, h????ng v??? h??a quy???n tuy???t v???i b??n c???nh gi??y ph??t qu??y qu???n.
                                           V?? m???t ly #JimBeamHighball l?? s??? k???t h???p th?? v??? c???a h????ng v??? truy???n th???ng v???i ch??t ph?? 
                                           c??ch, cho N??m M???i t??ng b???ng. </p>
                                    </div>
                                    <hr>
                                    <div class="add-to-card grid grid-cols-[100px,auto] py-3">
                                        <div class="number">
                                            <input type="number" id="inputValue" value="1" class="w-[90px] border rounded-xl border-zinc-300 outline-none p-3">
                                        </div>
                                        <button type="button" id="addToCart" class="inline-flex items-center w-[152px] px-4 py-2 border border-transparent rounded-[35px] hover:bg-gray-800 transition-all duration-200 ease-linear shadow-sm text-sm font-medium text-white bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

                            <div class="py-10">
                                <div class="py-3">
                                    <h1><p class="font-black text-[18px]">You Might Also Like</p></h1>
                                    <p><span class="text-[12px] text-[#888888]">Add Related products to weekly line up</span></p>
                                </div>
                                <div class="grid grid-cols-4 gap-4">
                                    ${productItems.map((item) => /*html*/`
                                            <div class="border p-4 w-[270px] hover:border-cyan-300 rounded-sm">
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
                                            <div class="relative group">
                                                <div class="invisible absolute opacity-0 group-hover:opacity-100 group-hover:visible group-hover:rotate-0 -rotate-[75]">
                                                    <button id="btn" class="hover:translate-y-[10px] ease-linear duration-300">add to card</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>${Footer.render()}</div>
            </div>
        `;
  },
  afterRender(id){
      $('#addToCart').addEventListener('click', async () => {
          const { data } = await get(id);
          console.log(data);
          AddToCart({...data, quantity: Number($('#inputValue').value) ? Number($('#inputValue').value) : 1})
          toastr.success("Add to success");
      })
  }
};
export default DetailProduct;
