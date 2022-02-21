import { add } from "../../../api/product";
import NavAdmin from "../../../component/navadmin";
import axios from "axios";
import "toastr/build/toastr.min.css";
import { getAll } from "../../../api/category";
import { $ } from "../../../utils/selector";

const AddNewProduct = {
    async render(){
        const listCate = await getAll();
        const itemCate = await listCate.data;
        return /*html*/`
                <div class="container-xl">
                    <div class="grid grid-cols-[300px,auto] p-6">
                        <div class="bg-gray-600 rounded-l-lg">
                            ${NavAdmin.render()}
                        </div>
                        <div class="bg-gray-300 rounded-r-lg">
                            <div class="bg-white shadow">
                                <div class="max-w-7xl mx-auto py-[17px] px-4 sm:px-6 lg:px-8">
                                    <!-- This example requires Tailwind CSS v2.0+ -->
                                    <div class="">
                                        <div class="grid grid-cols-[25px,auto] items-center">
                                            <div class="w-[28px]">
                                                <i class="fas fa-search "></i>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Search ..." class="outline-none w-full h-[40px]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <!-- Replace with your content -->
                                    <div class="">
                                        <div class="">
                                            <div class="max-w-7xl mx-auto py-6 ">
                                                <!-- This example requires Tailwind CSS v2.0+ -->
                                                <div class="lg:flex lg:items-center lg:justify-between">
                                                    <div class="flex-1 min-w-0">
                                                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                                            Add new product
                                                        </h2>
                                                    </div>
                                                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                                        <a href="/admin/products" class="sm:ml-3">
                                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                            Back
                                                        </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-3">
                                            <div class="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8 border-4 border-dashed border-gray-200 rounded-lg">
                                                <div class="md:grid md:grid-cols-3 md:gap-6">
                                                    <div class="md:col-span-1">
                                                        <div class="px-4 sm:px-0">
                                                            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                                            <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-5 md:mt-0 md:col-span-2">
                                                    <form id="form-add" action="#" method="POST">
                                                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                                                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                                <div class="">
                                                                    <div class="col-span-3 sm:col-span-2">
                                                                        <label for="company-website" class="block text-sm font-medium text-gray-700"> Name </label>
                                                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                                                <input type="text" id="name-product" class="outline-none focus:ring-indigo-500 focus:border-indigo-500 border-b-2 transition-all duration-300 ease-linear p-[5px] flex-1 block w-full sm:text-sm" placeholder="Enter new product...">
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <div class="col-span-3 sm:col-span-2">
                                                                            <div>
                                                                                <label for="company-website" class="block text-sm font-medium text-gray-700"> Price </label>
                                                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                                                    <input type="text" id="price-product" class="outline-none focus:ring-indigo-500 focus:border-indigo-500 border-b-2 transition-all duration-300 ease-linear p-[5px] flex-1 block w-full sm:text-sm" placeholder="Enter new product...">
                                                                                </div>
                                                                            </div>
                                                                    </div>

                                                                    <div class="py-2">
                                                                        <div class="col-span-3 sm:col-span-2">
                                                                            <div>
                                                                                <select name="" id="categoryId" class="form-control shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border transition-all duration-300 ease-linear outline-none p-[5px] border-gray-300 rounded-md" required="required">
                                                                                    ${itemCate.map(item => /*html*/`
                                                                                        <option value="${item.id}">${item.name}</option>
                                                                                    `)}
                                                                                </select>
                                                                            </div>
                                                                    </div>

                                                                    <div class="">
                                                                        <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                                                                        <div class="mt-1">
                                                                            <textarea id="desc-product" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border transition-all duration-300 ease-linear outline-none p-[5px] border-gray-300 rounded-md" placeholder="Enter new description"></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <input type="file" id="img-product" class="outline-none focus:ring-indigo-500 focus:border-indigo-500 border-b-2 transition-all duration-300 ease-linear p-[5px] flex-1 block w-full sm:text-sm">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                                <button id="btn" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    },
    afterRender(){
        const formAdd = document.querySelector('#form-add');

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector('#img-product').files[0];
            const CLOUDINARY = "https://api.cloudinary.com/v1_1/dfxsbsoep/image/upload";
            

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "anhnvph14407");

            const { data } = await axios.post(CLOUDINARY, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })

            add({
                name: document.querySelector('#name-product').value,
                desc: document.querySelector('#desc-product').value,
                price: document.querySelector('#price-product').value,
                categoryId: $('#categoryId').value,
                avatar: data.url
            }).then(()=>{
                document.location.href='/admin/products'
            })  
            
        })
        
    }
}
export default AddNewProduct;