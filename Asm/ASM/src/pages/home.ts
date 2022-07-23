
import { apiGet, getAll } from "../api/products";
import footerClient from "../components/client/footer";
import headerClient from "../components/client/header";
import { priceToVnd, reRender } from "../config";
import { Product } from "../models/products";

 const Home ={
    async render(){
        const datacellphone =  await apiGet('/products?category=Điện thoại');
        const data =  await getAll();
        let Cellphone:Product[] = [];
        const category:Product[] = data.data;

        let categories = category.map(i => i.category)
        categories = categories.filter(function(item, pos) {
            return categories.indexOf(item) == pos;
        })
       
        const paramUrl = new URLSearchParams(location.search);

        const search = paramUrl.get('search');

        if(search){
            const datacellphone = await apiGet(`/products?q=${search}`);
            let cellphone:Product[] = datacellphone.data;
            Cellphone=cellphone;
                console.log(cellphone)
        }else{

            if(localStorage.getItem('cellphone') != '' && localStorage.getItem('cellphone') != null|| undefined){
                const retrievedObject:any = localStorage.getItem('cellphone');
                let cellphone =  JSON.parse(retrievedObject);
                Cellphone = cellphone;
            } else{
                let cellphone:Product[] = datacellphone.data;
                cellphone = Cellphone;      
            }        
        }
        return /*html*/`
        ${headerClient.render()}

        <div class="flex px-60 py-3">
                <div class="basis-3/12"> 
                ${categories.map(cate => /*html*/`
                <div class="flex py-1">
                        <img class="px-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658180991/Layer_2_1__umlhlc.png">
                        <div class="grow"><a id="cate" data-id="${cate}" href="">${cate}</a></div>
                        <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654711823/Rectangle_9_gbzawf.png">
                    </div>
                `).join('')}
                    
                </div>
                <div class="basis-9/12"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658181122/Rectangle_6_cydnhs.png" width="1048px" height="382px" ></div>
        </div>

        <h1 class="px-60 py-3">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div class="grid gap-2 grid-cols-7 px-20">
        ${Cellphone?.map(cell => /*html*/`
               <a href="/product/${cell.id}">
               
               <div class="box p-4">
               <div class="flex justify-center p-2"><img class="" src="${cell.images?.thumbnail}" width="160px"></div>
               <h2 class="pb-6">${cell.name}</h2>
               <div class="flex">
                   <span class="basis-6/12 text-red-600">${(priceToVnd(Number(cell.sellerPrice)))}</span>
                   <span class="basis-6/12">1${priceToVnd(Number(cell.originalPrice))}</span>
               </div>
               <div class="bg-[#F3F4F6] rounded-lg border-2 px-1">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</div>
               <div class="flex"> 
                   <div id="rater">rater js</div>
                   <span class="px-2">số đánh giá</span>
               </div>
           </div>
               
               </a>
       

        `).join('')}
        
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
    },
    async afterRender(){

        const formSearch:any = document.querySelector('#search');
        console.log(formSearch)
        const btnSearch:any = document.querySelector('#btnSearch');
        btnSearch.addEventListener('click', (e:any)=> {
                
                history.replaceState(null, '',`?search=${formSearch.value}`);
                reRender('#app',Home);
        });



        const {data:data} = await getAll();
        const category:any = document.querySelectorAll('#cate');
        // console.log("category",category)
        for (const categories of category) {
            categories.addEventListener('click', (e: any) => 
            {e.preventDefault()
                const elementcate = categories.dataset.id;            
               const followcate =data.filter((item: { category: any } )=> { return item.category === elementcate});
                localStorage.clear();
                localStorage.setItem('cellphone',JSON.stringify(followcate))            
                reRender('#app',Home)
            })
        }
     }
            
}
export default Home;