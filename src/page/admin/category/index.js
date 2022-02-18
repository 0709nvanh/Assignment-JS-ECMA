import { getAll } from "../../../api/category";
import NavAdmin from "../../../component/navadmin";

const AdminCate = {
    async render(){
        const { data } = await getAll();
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
                                        <div class="max-w-7xl mx-auto py-6">
                                            <!-- This example requires Tailwind CSS v2.0+ -->
                                            <div class="lg:flex lg:items-center lg:justify-between">
                                                <div class="flex-1 min-w-0">
                                                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                                        Category Management
                                                    </h2>
                                                </div>
                                                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                                    <a href="/admin/products/add" class="sm:ml-3">
                                                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                        </svg>
                                                        Add new
                                                    </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pb-[10px]">
                                        <div class="max-w-7xl mx-auto pt-[5px] pb-3 sm:px-6 lg:px-8 border-4 border-dashed border-gray-200 rounded-lg">
                                            <!-- Replace with your content -->
                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="text-center px-6 py-3 text-[14px] w-[20px] font-bold text-gray-500 uppercase tracking-wider">STT</th>
                                                        <th scope="col" class="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Image</th>
                                                        <th scope="col" class="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                                        <th scope="col" class="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    ${data.map((cate, index) => /*html*/`
                                                    <tr>
                                                        <td class="text-center py-[5px]">${index + 1}</td>
                                                        <td><img class="items-center w-15 rounded-full h-16 mx-auto py-[5px]" src="${cate.avatar}" width="50"/></td>
                                                        <td class="text-center py-[5px]">${cate.name}</td>
                                                        <td class="items-center text-center">
                                                            <a class="text-blue-600 hover:font-bold pr-[5px]" href="/admin/category/${cate.id}/edit">Edit</a>
                                                            <button data-id="${post.id}" class="btn btn-remove text-red-600 hover:font-bold pr-[5px]">Delete</button>
                                                        </td>
                                                    </tr>
                                                    `).join("")}
                                                </tbody>
                                            </table>
                                            <!-- /End replace -->
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- /End replace -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export default AdminCate;