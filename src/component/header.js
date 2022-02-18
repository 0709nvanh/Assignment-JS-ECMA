import NavAdmin from "./navadmin";

const Header = {
    render () {
      return /*html*/`
        <div class="header-top flex items-center justify-between">
          <div class="flex items-center">
            <img class="h-[80px]" src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/269732390_633473297852428_519585011039424478_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=e07dTmzlMcUAX_5hZBG&_nc_ht=scontent.fhan5-6.fna&oh=03_AVKSo4YuSoAUGpZZ2sr7kUcTGoNWGVoZRi-scGzJJzOk9w&oe=61FD1456"
              alt=""/>
            <ul class="flex">
              <li class="ml-[38px]">
                <a class="text-[14px] pb-[5px] border-b-2 border-white font-semibold text-[#f6f6f7]" href="/">Home</a>
              </li>
              <li class="ml-[38px] relative group">
                <a class="text-[14px] group-hover:border-b-2 pb-[5px] font-semibold text-[#f6f6f7]" href="/category">Category</a>
                <div class="absolute invisible z-50 opacity-0 duration-300 group-hover:opacity-100 group-hover:visible group-hover:rotate-0 -rotate-[75] 
                bg-white -left-[50px] top-[40px] p-[20px] box-border w-[1100px] border-2">
                  <div class="flex pb-[20px]">
                    <ul>
                      <li
                        class="text-[15px] font-bold mb-[13px] hover:text-[#4fb68d] cursor-pointer"
                      >
                        Fresh Fruit
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Bananas
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Apples & Pears
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Berries & Cherries
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Oranges & Citrus Fruit
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Grapes
                      </li>
                    </ul>
                    <ul class="ml-[90px]">
                      <li
                        class="text-[15px] font-bold mb-[13px] hover:text-[#4fb68d] cursor-pointer"
                      >
                        Fresh Vegetables
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Potatoes & Sweet Potatoes
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Onions & Leeks
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Carrots & Root Vegetables
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Broccoli & Cauliflower
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Cabbages & Greens
                      </li>
                    </ul>
                    <ul class="ml-[90px]">
                      <li
                        class="text-[15px] font-bold mb-[13px] hover:text-[#4fb68d] cursor-pointer"
                      >
                        Fresh Salad & Dips
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Lettuce & Salad Bags
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Tomatoes
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Cucumber
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Celery
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Peppers
                      </li>
                    </ul>
                    <ul class="ml-[90px]">
                      <li
                        class="text-[15px] font-bold mb-[13px] hover:text-[#4fb68d] cursor-pointer"
                      >
                        Milk, Butter & Eggs
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Milk
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Spreads & Margarine
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Fresh Cream & Custard
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Eggs
                      </li>
                      <li
                        class="text-[15px] text-[#888] mb-[7px] hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d]"
                      >
                        Baking & Cooking
                      </li>
                    </ul>
                  </div>
                  <a href="" class="w-[1061px] h-[134px] block overflow-hidden relative">
                    <img class="hover:scale-105 duration-300 transition-transform ease-linear"
                      width="1060px"
                      src="http://demo.posthemes.com/pos_ecolife/layout3/img/cms/banner-menu.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </li>
              <li class="ml-[38px] relative group">
                <a
                  class="text-[14px] hover:border-b-2 pb-[5px] font-semibold text-[#f6f6f7]"
                  href="">Blog</a>
                <ul
                  class="absolute opacity-0 invisible border-l-[1px] border-r-[1px] duration-300 group-hover:opacity-100 group-hover:visible group-hover:rotate-0 -rotate-[75] bg-white left-[0px] top-[40px] w-[215px] h-[168px]"
                >
                  <li
                    class="text-[15px] px-[15px] hover:text-[#4fb68d] py-[5px] border-b-[1px]"
                  >
                    <a
                      class="hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d] hover:translate-x-[10px] duration-300 cursor-pointer block"
                      href=""
                      >Potatoes & Sweet Potatoes
                    </a>
                  </li>
                  <li
                    class="text-[15px] px-[15px] hover:text-[#4fb68d] py-[5px] border-b-[1px]"
                  >
                    <a
                      class="hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d] hover:translate-x-[10px] duration-300 cursor-pointer block"
                      href=""
                      >Onions & Leeks
                    </a>
                  </li>
                  <li
                    class="text-[15px] px-[15px] hover:text-[#4fb68d] py-[5px] border-b-[1px]"
                  >
                    <a
                      class="hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d] hover:translate-x-[10px] duration-300 cursor-pointer block"
                      href=""
                      >Carrots & Root Vegetables
                    </a>
                  </li>
                  <li
                    class="text-[15px] px-[15px] hover:text-[#4fb68d] py-[5px] border-b-[1px]"
                  >
                    <a
                      class="hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d] hover:translate-x-[10px] duration-300 cursor-pointer block"
                      href=""
                      >Broccoli & Cauliflower
                    </a>
                  </li>
                  <li
                    class="text-[15px] px-[15px] hover:text-[#4fb68d] py-[5px] border-b-[1px]"
                  >
                    <a
                      class="hover:translate-x-[10px] duration-300 cursor-pointer hover:text-[#4fb68d] hover:translate-x-[10px] duration-300 cursor-pointer block"
                      href=""
                      >Cabbages & Greens
                    </a>
                  </li>
                </ul>
              </li>
              <li class="ml-[38px]">
                <a class="text-[14px] hover:border-b-2 pb-[5px] font-semibold text-[#f6f6f7]" href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="pr-[10px]">
            <div class="item-icon">
            <a href="/signin">Sign in</a>
            <a href="/signup">Sign up</a>
              <i class="cursor-pointer fas fa-search text-white font-semibold pr-[15px] text-[20px] hover:text-[#588067] transition-all"></i>
              
              <i class="cursor-pointer fas fa-shopping-cart text-white font-semibold text-[20px] pl-[8px] hover:text-[#63a77c] transition-all"></i>
            </div>
          </div>
        </div>`
    }
};
export default Header;
