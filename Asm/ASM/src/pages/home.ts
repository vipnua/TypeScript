
import { get } from "../api/products";
import footerClient from "../components/client/footer";
import headerClient from "../components/client/header";
import { Product } from "../models/products";

 const Home ={
    async render(){
        const {data:Products} =  await get('')
        return /*html*/`
        ${headerClient.render()}

        <div class="flex px-60 py-3">
                <div class="basis-3/12"> 
                    <div class="flex">
                        <img class="px-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658180991/Layer_2_1__umlhlc.png">
                        <div class="grow">Điện thoại</div>
                        <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654711823/Rectangle_9_gbzawf.png">
                    </div>
                </div>
                <div class="basis-9/12"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658181122/Rectangle_6_cydnhs.png" width="1048px" height="382px" ></div>
        </div>

        <h1 class="px-60 py-3">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>

        <div class="grid grid-cols-7 px-20">
                <div class="box p-4">
                    <div class="flex justify-center p-2"><img class="" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658181641/Rectangle_7_l1bxo2.png" width="160px"></div>
                    <h2 class="pb-6">iPhone 11 64GB I Chính hãng VN/A</h2>
                    <div class="flex">
                        <span class="basis-6/12 text-red-600">10.790.000 ₫</span>
                        <span class="basis-6/12">18.000.000 ₫   </span>
                    </div>
                    <div class="bg-[#F3F4F6] rounded-lg border-2 px-1">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</div>
                    <div class="flex"> 
                        <div id="rater">rater js</div>
                        <span class="px-2">số đánh giá</span>
                    </div>
                </div>
        </div>

        <div class="px-60 py-3 ">
        <div class="flex justify-between py-4"> 
            <h1 class="">PHỤ KIỆN</h1>
            <span>Xem tất cả</span>
        </div>

        <div class="grid grid-cols-10">
            <div class="bg-[#FFA3A3] rounded-xl">
                <span class="text-white text-sm pl-2 pb-7">Nổi bật</span>
                <div class="flex justify-center py-2"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658183179/Rectangle_8_prdbta.png"></div>
            </div>
        </div>
        
        <div class="flex justify-between py-4">
            <h1 class="">LINH KIỆN MÁY TÍNH</h1>
            <span>Xem tất cả</span>
        </div>
        
        <div class="grid grid-cols-10">
            <div class="bg-[#FFA3A3] rounded-xl">
                <span class="text-white text-sm pl-2 pb-7">Nổi bật</span>
                <div class="flex justify-center py-2"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658183179/Rectangle_8_prdbta.png"></div>
            </div>
        </div>

        </div>

        ${footerClient.render()}
        `
    }
}
export default Home;