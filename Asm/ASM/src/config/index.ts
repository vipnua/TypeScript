export const priceToVnd = (x:number)=> {
    if(!x){
        return "";
    }
   return x.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}
export const reRender = async function (element:any, component:any) {
    if(element) {
        document.querySelector(element).innerHTML = await component.render()
    }
    if(component.afterRender) {
        component.afterRender()
    }
}
