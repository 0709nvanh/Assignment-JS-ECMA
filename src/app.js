import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

window.addEventListener("DOMContentLoaded", () => {
    // router.on("admin/*", () => { }, {
    //     before(done) {
    //         if (localStorage.getItem("admin")) {
    //         } else {
    //         }
    //     },
    // });
    router.on({
        "/": () => {
            HomePage();
        },
        "/about": () => {
            AboutPage();
        },
        "/products": () => {
            ProductPage();
        },
        "/product/:id": ({ data }) => {
            ProductDetail(data);
        },
        "/admin/product": () => {
            console.log("admin product");
        },
        "/admin/product/:id/edit": () => {
            console.log("admin edit product");
        },
    });

    router.notFound(() => {
        console.log("Not found");
    })
        .resolve();
});