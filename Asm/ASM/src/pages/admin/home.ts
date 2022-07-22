import { apiGet, getAll } from "../../api/products";
import AdminHeader from "../../components/admin/header";
import { priceToVnd, reRender } from "../../config";
import { Product } from "../../models/products";

const homeadmin ={
    async  render(){
        const data =  await getAll();
        const datacellphone =  await apiGet('/products?category=Điện thoại');
        const category:Product[] = data.data;
        let Cellphone:Product[] = [];
        let categories = category.map(i => i.category)
        categories = categories.filter(function(item, pos) {
            return categories.indexOf(item) == pos;
        })
        if(localStorage.getItem('cellphone') != ''){
            const retrievedObject:any = localStorage.getItem('cellphone');
            let cellphone =  JSON.parse(retrievedObject);
            Cellphone = cellphone;
        } else{
            let cellphone:Product[] = datacellphone.data;
            cellphone = Cellphone;      
        }
        
          return /*html*/`
          ${AdminHeader.render()}
          <div class=""> 
               <div class="flex py-4">
               <div class="basis-2/12">
               ${categories.map(cate => /*html*/`
               <div class="flex py-1">
                       <img class="px-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658180991/Layer_2_1__umlhlc.png">
                       <div class="grow"><a id="cate" data-id="${cate}" href="">${cate}</a></div>                  
                   </div>
               `).join('')}
                   </div>
                       <div class="basis-10/12"> 
                            <div class="flex">
                                <div class="basis-1/2">
                                    <h1>lấy dataid</h1>
                                    <div class="flex">
                                        <span class=" basis-2/12 font-bold px-3 py-3">Bộ lọc:</span>
                                        <div class="basis-10/12">
                                            <div>Danh mục sản phẩm</div>
                                            <div>

                                                    <select id="cars" name="cars">
                                                    <option value="volvo">Volvo XC90</option>

                                                    </select>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="basis-1/2">
                                        <div class="flex justify-end"><img class="pr-16" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658504103/Icon_lo8cnj.png"></div>
                                </div>
                            </div>


                            <div class="content">

                                <table class="table-auto">
                                <thead>
                                <tr class="bg-[#FBFBFB] border-y border-[#DEE2E6] text-center">
                                    <th>#</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Thành tiền</th>
                                    <th>Mô tả</th>
                                    <th>Ẩn/hiện</th>
                                    <th>Thao tác</th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                ${Cellphone.map(cell =>               
                                    `<tr>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${cell.id}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${cell.name}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${priceToVnd(Number(cell.originalPrice))}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${cell.description}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">Ẩn</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">Thao tác</td>
                                    </tr>
                                    `).join('')}
                                
                               
                                </tbody>
                            
                            </div>
                       </div>
               </div>
          </div>
          
          `
      },
      async afterRender(){
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
                reRender('#app',homeadmin)
            })
        }
     }
  }
  export default homeadmin;