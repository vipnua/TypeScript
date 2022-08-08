import { getAll } from "../../api/products";


const headerClient ={
render(){
    return /*html*/`
    
    <div class="bg-yellow-500 py-1 flex text-white">
        <div class="basis-3/12"><div class="float-right pr-40"><a href="/"><img class="" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1659795150/hfp1o0emvj2ygyz0krdm.png" width="65" height="56"></div></a></div>
        <div class="basis-4/12 ">
                <form class="relative">
                <input id="search" class="w-full py-2 pl-6 my-3 rounded text-black"type="text">
                <img class="absolute w-6 pt-2" style="margin-top:-49px" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654614957/search_lwjcp6.png">
                <button id="btnSearch" type="submit"></button>
                <div id="matchlist" class="absolute top-14 left-0 text-red-500 rounded-sm">
                            
                    </div>
                </form>
                    
                </div>
        <div class="basis-3/12 flex ml-4 py-2">
            <div class="px-2 w-1/4">Gọi mua hàng 1800.2097</div>
            <div class="px-2 w-1/4 flex"><img class="w-7 h-7 mt-3 mr-1" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658162407/Frame_g2ogyd.png">Cửa hàng gần bạn</div>
            <div class="px-2 w-1/4 flex"><img class="w-7 h-7 mt-3 mr-1" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658162816/Frame_iizmu5.svg">Tra cứu đơn hàng</div>
            <div class="px-2 w-1/4 flex ">
              
                    <div class="relative">
                    <a href="/cartProduct">
                        <img class="w-7 h-7 mt-3 mr-1 " src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658162893/Frame_1_sgwuzw.png">
                        <span id="cartamount" class="absolute top-4 left-3"></span>
                        </div>
                        <div class="w-4">Giỏ hàng</div>
                        </a>
                    </div>
              
              
            </div>
        <div class="basis-2/12 flex">
             <div id="auth" class="px-2 w-1/4 flex pl-10 mt-2"></div>
             <button id="signout" class="px-2 w-1/4 flex pl-10 mt-2 hidden">Đăng xuất</button>
        </div>
    </div>
    `
},
}
export default headerClient