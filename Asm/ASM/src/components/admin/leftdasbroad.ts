const leftDashBroad = {
    render(){
        return /*html*/`
        
        <div class="fixed h-screen w-2/12 flex flex-col justify-between bg-gradient-to-r from-[#0b703a] to-[#6fb23f] py-16"> 
                
                <div class="">

                    <div class="flex justify-center"><img class="rounded-full w-32 h-32 bg-auto" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1660587203/d3rmkij8otrjfcdcrgb5.jpg"></div>
                    
                    <h1 class ="py-8 my-4 text-center text-2xl text-white bg-white/20">Xin chào <span class="yourname"></span></h1>
                    
                    <div class="text-white">
                        <ul>
                            <li class="px-5 bg-[#44943b] rounded p-2 m-5 text-lg"><button>Danh sách sản phẩm</button></li>
                        </ul>
                    </div>
                </div>         
                <div class=""> 
                <div class="text-white">  <button id="signout" class="py-2 bg-[#a82525] rounded w-full text-lg">Go Out</button></div>
             </div>
        </div>     
        `
    }
}
export default leftDashBroad;