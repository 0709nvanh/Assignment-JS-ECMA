import NavAdmin from "../../component/navadmin";

const Dashboard = {
    render(){
        return /*html*/`
            <div class="dashboard">
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
                                <div class="max-w-7xl mx-auto py-7 sm:px-6 lg:px-8">
                                    <!-- Replace with your content -->
                                    <h2 class="text-[24px] font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate pb-3">
                                        Thống kê
                                    </h2>

                                    <div class="py-3 border-4 border-dashed border-gray-200 rounded-lg h-[300px]">

                                    </div>
                                    <!-- /End replace -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
export default Dashboard;