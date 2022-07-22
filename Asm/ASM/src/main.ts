
import './style.css';
import Navigo from 'navigo';
import Home from './pages/home';
import headerClient from './components/client/header';
import signUp from './pages/signup';
import homeadmin from './pages/admin/home';
import addProduct from './pages/admin/add';
import updateProduct from './pages/admin/update';
const router = new Navigo('/');
const app = document.querySelector<HTMLDivElement>('#app')!;
type ComponentBase = {
  render: (id:any) => Promise<string>;
  afterRender?: (id:any) => void
}
const print = async(component:ComponentBase,params?: any)=>{
  app.innerHTML = await component.render(params);
  if(component.afterRender) {
    await component.afterRender(params)
  }
}
router.on({
  '/':()=>print(Home,""),
  '/admin':()=>print(homeadmin,""),
  '/admin/add':()=>print(addProduct,""),
  '/admin/update/:id':(param:any)=>{const id = +param.data.id;print(updateProduct,id);},
  '/signup':()=>print(signUp,''),
})
router.resolve();