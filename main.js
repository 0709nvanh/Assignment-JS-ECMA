import Navigo from "navigo";
import Footer from "./src/component/footer";
import Header from "./src/component/header";
import ContactPage from "./src/page/contact";
import HomePage from "./src/page/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.querySelector('#app').innerHTML = await content;
    document.querySelector('#footer').innerHTML = Footer.render();
};
router.on({
  "/": () => {
    print(HomePage.render())
  },
  "/contact": () => {
    print(ContactPage.render())
  },
});
router.resolve();
