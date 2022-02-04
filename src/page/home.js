import FeatureProduct from "../component/featureproduct";
import ListProductHome from "../component/listproduct";

const HomePage = {
  async render() {
    return /*html*/ `
        <div class="relative">
          <div class="banner-small grid grid-cols-2 gap-8 pb-6 px-5 py-6">
            <div class="">
              <a href="" class="block overflow-hidden relative">
                <img class="hover:scale-105 duration-300 transition-transform ease-linear	" src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/1_3.jpg" alt="">
              </a>
            </div>
            <div class="grid grid-rowls-2 gap-8">
              <div class="block overflow-hidden relative">
                <img class="hover:scale-105 duration-300 transition-transform ease-linear	" src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/2_3.jpg" alt="">

              </div>
              <div class="block overflow-hidden relative">
                <img class="hover:scale-105 duration-300 transition-transform ease-linear	" src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/3_3.jpg" alt="">
              </div>
            </div>
          </div>



          <div class="mb-10 px-5 py-6">
            <div class="border p-4">
              <div class="grid grid-cols-4 gap-5">
                <div class="grid grid-cols-[45px,auto] gap-3 py-3">
                  <div class="box-cms">
                    <img src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/icon_cms1.png">
                  </div>
                  <div class="text-cms">
                    <h2 class="font-bold">Free Shipping</h2>
                    <p class="text-[14px]">On all orders over $75.00</p>
                  </div>
                </div>
                <div class="grid grid-cols-[45px,auto] gap-3 py-3">
                  <div class="box-cms">
                    <img src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/icon_cms2.png">
                  </div>
                  <div class="text-cms">
                    <h2 class="font-bold">Free Returns</h2>
                    <p class="text-[14px]">Returns are free within 9 days</p>
                  </div>
                </div>
                <div class="grid grid-cols-[45px,auto] gap-3 py-3">
                  <div class="box-cms">
                    <img src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/icon_cms3.png">
                  </div>
                  <div class="text-cms">
                    <h2 class="font-bold">100% Payment Secure</h2>
                    <p class="text-[14px]">Your payment are safe with us.</p>
                  </div>
                </div>
                <div class="grid grid-cols-[45px,auto] gap-3 py-3">
                  <div class="box-cms">
                    <img src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/icon_cms4.png">
                  </div>
                  <div class="text-cms">
                    <h2 class="font-bold">Support 24/7</h2>
                    <div class="text-[14px]">Contact us 24 hours a day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div class="best-sellers">
            <div class="title">
              <h2 class="text-[24px] font-bold text-[#253237] px-5">Best Sellers</h2>
              <p class=" px-5">Add bestselling products to weekly line up</p>
              <div class="product  px-5">
                ${await ListProductHome.render()}
              </div>
            <div>
          </div>

          <div class="py-5">
            <div class="grid grid-cols-2 bg-[#ebebeb]">
              <div class="img p-4">
                <img src="http://demo.posthemes.com/pos_ecolife/layout3/modules/posfeaturedproducts/img/cms.png" alt="">
              </div>
              <div class="py-5 px-3">
                <div>
                  <h2 class="text-[24px] font-bold text-[#253237]">Featured Products</h2>
                   <p><span class="text-[#888] text-[14px]">Add featured products to weekly line up
                   </span></p>
                </div>
                <div class="py-4 pr-5">
                  ${await FeatureProduct.render()}
                <div>
              </div>
            </div>
          </div>

          <div>
            <div class="popular_category px-5 pt-10">
              <div class="title">
                <h2 class="text-[24px] font-bold text-[#253237]">Popular Category</h2>
                <p class="">Add Popular Categories to weekly line up</p>
                <div class="product px-5 grid grid-cols-3 gap-5">
                  <div class="item_product overflow-hidden relative">
                    <img class="absolute inset-0 object-cover" src="http://demo.posthemes.com/pos_ecolife/layout3/modules/poslistcategories/images/thumb-1.jpg">
                    <div class="item-center justify-center absolute">
                      <button class="text-teal-100 tracking-wider">Shop now</button>
                    </div>
                  </div>
                </div>
              <div>
            </div>
          <div>
        </div>
        
        `;
  },
};
export default HomePage;
