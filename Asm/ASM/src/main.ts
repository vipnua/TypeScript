
import './style.css';
import Navigo from 'navigo';
import Home from './pages/home';
import headerClient from './components/client/header';
const router = new Navigo('/');
const app = document.querySelector<HTMLDivElement>('#app')!;
type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}
const print = async(component:ComponentBase,params?: any)=>{
  app.innerHTML = await component.render();
  if(component.afterRender) {
    component.afterRender()
  }
}
router.on({
  '/':()=>print(Home,""),
})
router.resolve();