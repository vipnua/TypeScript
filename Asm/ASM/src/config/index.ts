import axios from "axios";
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
export const uploadFile = (file:any) => {
    const CLOUDINARY_NAME = "dtd8tra0o";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "s69rnwub";
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);
    const res = axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    });
    return res;
  };

