const signUp ={
  async  render(){
        return /*html*/`
        
        <div class=" bg-contain bg-[#1E1E1E] h-screen pt-20"> 
              <div class="flex w-2/4 m-auto bg-[#ffffff] rounded-xl py-10">
                <div class="basis-4/6">
                       <div class=" basis-4/6 py-4 px-4">
                        <form class="px-3">
                            <label class="flex flex-cols py-3 font-semibold text-2xl">Email</label>
                            <input class="w-full border py-2" type="text" id="email">
                            <label class="flex flex-cols py-3 ">Số điện thoại</label>
                            <input class="w-full border py-2" type="text" id="phone">
                            <label class="flex flex-cols py-3 ">Password</label>
                            <input class="w-full border py-2" type="password" id="password">
                            <button class="bg-red-500 text-center text-white rounded w-full my-3 py-3" > Đăng ký</button>

                           <div class=""> 
                           <h2 class="text-center">Hoặc ký bằng pỏnhúp</h2>
                            <div class="flex justify-center px-3 py-3">
                                  <img class="" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658816131/iqcrg8uyzj2unw70kina.png" width="58">
                                  <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658816204/lf5cd7yllaf6crmjunze.png" width="58">
                                  <img class="rounded-xl" src=" https://res.cloudinary.com/dtd8tra0o/image/upload/v1658816400/jsytvcqdm25bxpyixur1.jpg" width="58">
                                 
                            </div>
                           </div>


                        </form>
                       </div>              
              </div>
              <div class="basis-2/6 ">
                       <div class="flex justify-center pt-[103px]"> 
                          <img class="rounded" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658816807/pk2qvzc9edfaegquaafy.jpg" width="185px">
                       </div>
                      </div>
             </div>
        </div>
        
        `
    }
}
export default signUp;