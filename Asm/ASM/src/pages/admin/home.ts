import { apiGet, getAll, remove } from "../../api/products";
import AdminHeader from "../../components/admin/header";
import leftDashBroad from "../../components/admin/leftdasbroad";
import { priceToVnd, reRender } from "../../config";
import { Product } from "../../models/products";

const homeadmin ={
    async  render(){
        const data =  await getAll();
        const datacellphone =  await apiGet('/products?category=Điện thoại');
        const category:Product[] = data.data;
        const User = await apiGet(`/users/`);    
        
        const localUser = localStorage.getItem('User');
        let user = JSON.parse(localUser);
        const target = User.data.filter((u: { email: any; })=> u.email == user.email)
        if (!localUser || !target[0].role || target[0].role == 0) {
            return window.location.href = '/'
        }

        let Cellphone:Product[] = [];
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
        }else{
            if(localStorage.getItem('cellphone') != '' && localStorage.getItem('cellphone') != null){
            const retrievedObject:any = localStorage.getItem('cellphone');
            let cellphone =  JSON.parse(retrievedObject);
            Cellphone = cellphone;
            console.log(cellphone)
        } else{
            let cellphone:Product[] = datacellphone.data;
            Cellphone = cellphone;      
        }}
        
        
          return /*html*/`
          <div class=""> 
            <div class="flex">
                    <div class="basis-2/12"> ${leftDashBroad.render()}   </div>              
                    <div class="basis-10/12 bg-[#e5f3f4]"> 
                       <div class="header"> ${AdminHeader.render()}</div>
                        <div class="container px-2 py-2"> 

                             <div class="text-xl flex justify-between">
                                <span class="">Tên danh mục</span>
                               <a href="/admin/add"> <img class="h-10" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1660577033/kskxmbhfcmmk4bjwkwd9.png"></a>
                             </div>
                             
                             <div class="text-xl flex py-2">
                             <div class="form">
                                 
                                    <label class="mr-3" for="category">Sort : </label>
                                    <select id="category" class="rounded text-sm">
                                         <option value="all">Chọn 1 trường</option>
                                    ${categories?.map(c=>`
                                         <option value="${c}">${c}</option>
                                    `).join('')}
                                 
                                    </select>
                             </div>
                             </div>

                             <table class="table-auto">
                             <thead >
                               <tr  class="border border-gray-400 bg-gray-300">
                                 <th  class="border border-gray-400 px-1">id</th>
                                 <th  class="border border-gray-400 px-1">Tên sản phẩm</th>
                                 <th  class="border border-gray-400 px-1">ảnh</th>
                                 <th  class="border border-gray-400 px-1">Giá</th>
                                 <th  class="border border-gray-400 px-1">Giá KM</th>
                                 <th  class="border border-gray-400 px-1">Mô tả</th>
                                 <th  class="border border-gray-400 px-1">Hide</th>
                                 <th  class="border border-gray-400 px-1">Thao tác</th>
                               </tr>
                             </thead>
                             <tbody>
                             ${Cellphone.map(cell => /*html*/`
                                    <tr>
                                        <td class="border border-gray-400">${cell.id}</td>
                                        <td class="border border-gray-400 "><p class="truncate ...">${(cell.name).slice(0,50)}</p></td>
                                        <td class="border border-gray-400"><img src="${cell.images.image}" width="150px"></td>
                                        <td class="border border-gray-400 px-2">${priceToVnd(Number(cell.originalPrice))}</td>
                                        <td class="border border-gray-400 px-2">${priceToVnd(Number(cell.sellerPrice))?priceToVnd(Number(cell.sellerPrice)):'Is not seller'}</td>
                                        <td  class="border border-gray-400 px-2"><p class="">${(cell.description)?.slice(0,200)}</p></td>
                                        <td  class="border border-gray-400"><button><img class="px-1"  src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1660578153/idblf2iadvojaxc3dfev.png" width="35px"> </button></td>
                                        <td  class="border border-gray-400"><a href="/admin/update/${cell.id}"><img class="px-1" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1660581463/f5e4hclrfdeqs5v79yme.png" width="30px"> </a></td>
                                    </tr>
                             `).join('')}
                              
                             </tbody>
                           </table>

                        </div>
                    </div>
            </div>
           </div>
          
          `
      },
      async afterRender(){
        const data = await getAll();
        const formSearch = document.querySelector('#sreach') as HTMLInputElement;
        const btnSearch = document.querySelector('#btnSearch') as HTMLInputElement;
        const signout = document.querySelector('#signout') as HTMLInputElement;
        const yourname = document.querySelector('.yourname') as HTMLInputElement;
        const category:any = document.querySelectorAll('#category');

        let storageUser = localStorage.getItem('User');   

        for (const categories of category) {    
            categories.addEventListener('input', (e: any) => 
            {
                e.preventDefault() 
                const elementcate = categories.value;   
                console.log(elementcate)      
                const followcate =data.data.filter((c: any)=>c.category == elementcate);
                console.log(followcate)
                localStorage.removeItem('cellphone');
                localStorage.setItem('cellphone',JSON.stringify(followcate))        
                reRender('#app',homeadmin)    
            })
        }  
        

        const nameadmin = () =>{         
            const name = JSON.parse(storageUser).email
            if(storageUser){
                yourname.innerHTML = `${name}`;
                signout.addEventListener('click',(e)=>{
                    e.preventDefault()
                    const confirm= window.confirm('Bạn muốn đăng xuất khỏi tài khoản ko?')
                     if(confirm){
                         localStorage.removeItem('User');
                         if(!localStorage.getItem('User')){
                             window.alert('Bạn đã đăng xuất')
                             location.href = ("/")
                         }
                     }       
                    })
            }
        }
     
        nameadmin();

       

        btnSearch.addEventListener('click', (e:any)=> {
                e.preventDefault();
                history.replaceState(null, '',`?search=${formSearch.value}`);
                reRender('#app',homeadmin);
        });

        

        const products:any = document.querySelectorAll('#remove');
        
        for (let product of products) {
            product.addEventListener('click', async (e:any) => {
            e.preventDefault();
            const id = product.dataset.id;
            
                const confirm = window.confirm('Are you sure you want to remove this product?');
                if(confirm){
                    const data = await remove(id) ;
                  
                    reRender('#app',homeadmin);
                    if(data){
                        alert('Remove product');
                    }
                }
               
            })
        }

       
        
     }
  }
  export default homeadmin;