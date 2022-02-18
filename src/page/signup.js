import { signup } from "../api/user";
import { $ } from "../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css"
import Header from "../component/header";
import Footer from "../component/footer";

const Signup = {
    render(){
        return /*html*/`
                <div class="container-xl">
                    <div class="header h-[80px] bg-[#253237]">${Header.render()}</div>
                    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-md w-full space-y-8">
                            <div>
                                <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
                                    Đăng ký tài khoản
                                </h2>
                            </div>
                            <form id="formSignup" class="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true">
                                <div class="rounded-md shadow-sm -space-y-px">
                                    <div class="py-3">
                                        <div class="py-[5px]">
                                            <label for="email-address" class="text-[#333] font-semibold">Username</label>
                                        </div>
                                        <input id="username" name="text" type="text" autocomplete="email" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
                                    </div>
                                    <div class="py-3">
                                        <div class="py-[5px]">
                                            <label for="email-address" class="text-[#333] font-semibold">Email</label>
                                        </div>
                                        <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
                                    </div>
                                    <div class="py-3">
                                        <div class="py-[5px]">
                                            <label for="password" class="text-[#333] font-semibold">Mật khẩu</label>
                                        </div>
                                        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
                                    </div>
                                    
                                    <div class="pt-7">
                                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            </svg>
                                            </span>
                                            Đăng ký
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>${Footer.render()}</div>
                </div>
        `
    },
    afterRender(){
        $('#formSignup').addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    username : $('#username').value,
                    email : $('#email').value,
                    password : $('#password').value
                }) 
                toastr.success("Đăng ký thành công!")
                if(data){
                    setTimeout(() => {
                        document.location.href="/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.success(error.response.data);
                $('#formSignup').reset();
            }
        })
    }
}
export default Signup