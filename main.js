import Navigo from "navigo";
import AdminCate from "./src/page/admin/category";
import AddCate from "./src/page/admin/category/add";
import Dashboard from "./src/page/admin/dashboard";
import AllProductAdmin from "./src/page/admin/product";
import AddNewProduct from "./src/page/admin/product/add";
import UpdateProduct from "./src/page/admin/product/update";
import CartPage from "./src/page/cart";
import CategoryPage from "./src/page/category";
import DetailProduct from "./src/page/detail";
import HomePage from "./src/page/home";
import Signin from "./src/page/signin";
import Signup from "./src/page/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("content").innerHTML = await content.render(id);
  if(content.afterRender) content.afterRender(id);
};

router.on('/admin/*/', () => {
  console.log("Truy cập đường dẫn admin/*");
}, {
  before(done, match){
    if(localStorage.getItem('user')){
      const userId = (JSON.parse(localStorage.getItem('user'))).id
  
      if(userId == 1){
        done();
      } else{
        document.location.href = "/"
      }
    } else {
      document.location.href = "/"
    }
  }
}) 
router.on({
  "/": () => { print(HomePage)},
  "/categories": () => { print(CategoryPage)},
  "/product/:id": ({ data }) => { print(DetailProduct, data.id)},
  "/admin/dashboard": () => { print(Dashboard)},
  "/admin/products": () => { print(AllProductAdmin)},
  "/admin/categories": () => { print(AdminCate)},
  "/admin/products/add": () => { print(AddNewProduct)},
  "/admin/product/:id/edit": ({ data }) => { print(UpdateProduct, data.id)},
  "/admin/categories/add": () => { print(AddCate)},
  "/signin": () => { print(Signin)},
  "/signup": () => { print(Signup)},
  "/cart": () => { print(CartPage)}

});
router.resolve();
