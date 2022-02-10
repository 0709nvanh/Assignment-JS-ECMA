import Navigo from "navigo";
import { signin } from "./src/api/user";
import Footer from "./src/component/footer";
import Header from "./src/component/header";
import Dashboard from "./src/page/admin/dashboard";
import AllProductAdmin from "./src/page/admin/product";
import AddNewProduct from "./src/page/admin/product/add";
import ContactPage from "./src/page/contact";
import DetailProduct from "./src/page/detail";
import HomePage from "./src/page/home";
import Signin from "./src/page/signin";
import Signup from "./src/page/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content,id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.querySelector('#app').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();
    if(content.afterRender) content.afterRender(id);
};
router.on({
  "/": () => {
    print(HomePage)
  },
  "/contact": () => {
    print(ContactPage)
  },
  "/product/:id": ({ data }) =>{
    print(DetailProduct, data.id);
  },
  "/admin/dashboard": () => {
    print(Dashboard);
  },
  "/admin/products": () =>{
    print(AllProductAdmin);
  },
  "/admin/products/add": () =>{
    print(AddNewProduct);
  },
  "/signin": () => {
    print(Signin);
  },
  "/signup": () => {
    print(Signup);
  }

});
router.resolve();
