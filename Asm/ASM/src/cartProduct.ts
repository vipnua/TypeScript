
import headerClient from "./components/client/header";

const cartProduct ={
   async render(){
           return /*html*/`
        ${headerClient.render()}
        
        <div class="flex justify-center"> 
                 <div class="flex">
                        <div class="basis-3/12">Trở về</div>
                        <div class="basis-9/12">Giỏ hàng</div>
                 </div>
                <div class="flex">
                     <div class="basis-4/12">
                      <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658816962/uls3daydqqbsj6iexq3h.jpg">
                       </div>
                     <div class="basis-8/12">Giỏ hàng</div>
                </div>
        </div>

        `
    }
}
export default cartProduct;