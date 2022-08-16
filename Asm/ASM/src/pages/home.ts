
import { apiGet, getAll } from "../api/products";
import footerClient from "../components/client/footer";
import headerClient from '../components/client/header';
import { ifelement, percent, priceToVnd, reRender } from "../config";
import { Product } from "../models/products";

 const Home ={
    async render(){
        // const datacellphone =  await apiGet('/products?category=Điện thoại');
        const data =  await getAll();
        
        let Cellphone:Product[] = [];
        const category:Product[] = data.data;
        const accessory = await apiGet('/accessory');
        const accessories = await apiGet('/accessories');
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
        }else if(localStorage.getItem('cellphone') != '' && localStorage.getItem('cellphone') != null|| undefined){ 
                const retrievedObject:any = localStorage.getItem('cellphone');
                let cellphone =  JSON.parse(retrievedObject);
                Cellphone = cellphone;
            } else{
                Cellphone = data.data;  
            }        
        
        return /*html*/`
        ${headerClient.render()}

        <div class="flex px-60 py-3">
                <div class="basis-3/12"> 
                <div class="flex py-1">
                        <img class="px-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658180991/Layer_2_1__umlhlc.png">
                        <div class="grow"><a id="cate" data-id="all" href="">Tất cả sản phẩm</a></div>
                        <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654711823/Rectangle_9_gbzawf.png">
                    </div>
                ${categories?.map(cate => /*html*/`
                <div class="flex py-1">
                        <img class="px-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658180991/Layer_2_1__umlhlc.png">
                        <div class="grow"><a id="cate" data-id="${cate}" href="">${cate}</a></div>
                        <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654711823/Rectangle_9_gbzawf.png">
                    </div>
                `).join('')}
                    
                </div>
                <div class="basis-9/12"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658181122/Rectangle_6_cydnhs.png" width="1048px" height="382px" ></div>
        </div>

        <h1 class="px-60 py-3">Sản phẩm</h1>
        <div class="grid gap-2 grid-cols-7 px-20">
        ${ Cellphone.map(cell => /*html*/`
               <a class="hover:bg-gray-100 rounded hover:drop-shadow-xl" href="/#/product/${cell.id}"data-navigo>
               <div class="box p-4 static">
               <div class="absolute ml-2">
                        <span class="absolute text-red-600 mt-3 font-bold -rotate-45">${percent(cell.sellerPrice,cell.originalPrice)}</span>
                        <img class="" src="${ifelement(cell.sellerPrice)?'https://res.cloudinary.com/dtd8tra0o/image/upload/v1659820494/dl7aqs3dtxtalfpxuyme.png':''}" width="45px">
                    </div>
               <div class="flex justify-center p-2 ">
                 <img class="" src="${cell.images?.thumbnail}" width="160px" >
              
               </div>
               <h2 class="pb-6">${cell.name}</h2>
               <div class="flex">
                   <span class="basis-6/12 text-red-600">${ifelement(cell.sellerPrice)?(priceToVnd(Number(cell.sellerPrice))):'<span class="ml-10 text-black">Giá gốc:</span>'}</span>
                   <span class="basis-6/12">${(priceToVnd(Number(cell.originalPrice)))}</span>
               </div>
               <div class="bg-[#F3F4F6] rounded-lg border-2 px-1">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</div>
               <div class="flex"> 
               <div id="rater" data-rate-value="${cell.rate}"></div>
                 
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
            <div class="bg-[#FFA3A3] rounded-xl m-2">
                <span class="text-white text-sm pl-2 pb-7">Nổi bật</span>
                <div class="flex justify-center py-2"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658183179/Rectangle_8_prdbta.png"></div>
            </div>
            ${accessory.data.map((data: { name: String; image: String}) =>/*html*/`   
            <div class="bg-[#FFA3A3] rounded-xl m-2">
            <span class="text-white text-sm pl-2 pb-7">${data.name}</span>
            <div class="flex justify-center py-2"><img src="${data.image}"></div>
        </div>
            `).join('')}
        </div>
        
        <div class="flex justify-between py-4">
            <h1 class="">LINH KIỆN MÁY TÍNH</h1>
            <span>Xem tất cả</span>
        </div>
        
        <div class="grid grid-cols-10">
        
        ${accessories.data.map((data: { name: String; image: String}) =>/*html*/`   
        <div class="bg-[#FFA3A3] rounded-xl m-2">
        <span class="text-white text-sm pl-2 pb-7">${data.name}</span>
        <div class="flex justify-center py-2"><img src="${data.image}"></div>
    </div>
        `).join('')}
        </div>

        </div>

        ${footerClient.render()}
        `
    },
    async afterRender(){
        const {data:data} = await getAll();
        const category:any = document.querySelectorAll('#cate');
        const formSearch:any = document.querySelector('#search');
        const btnSearch:any = document.querySelector('#btnSearch');      
        const signout = document.querySelector('#signout') as HTMLInputElement;
        const auth = document.querySelector('#auth') as HTMLInputElement;
        const search = document.getElementById('search') as HTMLInputElement;
        const matchlist =document.getElementById('matchlist')as HTMLInputElement;
        const localstored = localStorage.getItem('cart');
        const cartamount = document.getElementById('cartamount') as HTMLInputElement;
        if(localstored){
            const cart = JSON.parse(localstored);
            cartamount.innerHTML = cart[0].amount;
        }

        const searchStates = async (searchtext: string) =>{
                    const states = await getAll();
                    let matches = states.data.filter((state: { name: string; abbr: string; })=>{
                        const regex = new RegExp(`^${searchtext}`,'gi');
                        return state.name.match(regex);
                    }) 
                    if(searchtext.length === 0){
                        matches = [];
                    }
                outputHtml(matches);
        }

        const outputHtml = (matches: { lenght: number; map: (arg0: (match: any) => string) => any; }) => {
            if(matches){

                const html = matches.map(match => `
                          <a href="#/product/${match.id}" data-navigo"> 
                          <div class="flex px-1 py-3 bg-slate-100 w-96 border border-gray-400"> 
                                 <div class="basis-2/12"><img src="https://cdn.tgdd.vn/Products/Images/522/240254/samsung-galaxy-tab-s7-fe-wifi-thumb-600x600.jpg"></div>
                                 <div class="basis-10/12">
                                     <div class="font-semibold text-base">${match.name}</div>
                                        <div class="flex">
                                            <div class="text-red-500 text-sm font-bold">${priceToVnd(Number(match.sellerPrice))}</div>
                                            <div class="text-gray-500 text-xs px-2 font-normal">${priceToVnd(Number(match.originalPrice))}</div>
                                            <div class="text-gray-500 text-xs font-normal">${percent(match.sellerPrice,match.originalPrice)}</div>
                                        </div>
                                        
                                 </div>
                            </div>
                          </a>
                
                `).join('');
                matchlist.innerHTML = html;
            }
        }

        search?.addEventListener('input',()=>searchStates(search.value))


        let storageUser = localStorage.getItem('User');         
            if(storageUser){
            let user = JSON.parse(storageUser);
               auth.innerHTML = `<a href="/">Hi! <span class="text-red-500 font-bold w-2">${(user.email).slice(0,5)}</span></a>`       
               signout.classList.remove('hidden')
               signout.addEventListener('click',()=>{
               const confirm= window.confirm('Bạn muốn đăng xuất khỏi tài khoản ko?')
                if(confirm){
                    localStorage.removeItem('User');
                    if(!localStorage.getItem('User')){
                        window.alert('Bạn đã đăng xuất')
                        location.href = ("/")
                    }
                }       
               })
             }else{
                auth.innerHTML = `<a href="/signin"></span class="">Đăng nhập</span></a>` 
             }
            
        


        btnSearch.addEventListener('click', (e:any)=> {
            e.preventDefault()
                history.replaceState(null, '',`?search=${formSearch.value}`);
                reRender('#app',Home);
        });

        for (const categories of category) {
            categories.addEventListener('click', (e: any) => 
            {e.preventDefault()
                const elementcate = categories.dataset.id;   
                let followcate='';
                
                if(elementcate == 'all'){
                    followcate = data;
                    localStorage.removeItem('cellphone');
                    localStorage.setItem('cellphone',JSON.stringify(followcate))   
                } else{
                    followcate =data.filter((item: { category: any } )=> { return item.category === elementcate});
                    localStorage.removeItem('cellphone');
                    localStorage.setItem('cellphone',JSON.stringify(followcate))            
                }          
                reRender('#app',Home)
            })
        }
     }
            
}
export default Home;