
import './style.css';
import Navigo from 'navigo'; // When using ES modules.
import Home from './pages/Home';
import Detail from './pages/Detail';
const router = new Navigo('/');
const app = document.querySelector<HTMLDivElement>('#app')!;
interface componentBase {
  render:(id:any) => any;
}
const print = async (component:componentBase,id:any) => {
  app.innerHTML = await component.render(id)
}
router.on({
 "/" : ()=> print(Home,""),
 "/pokemons/:id" : (param:any)=> {
  const id = +param.data.id;
  print(Detail,id)},

});
router.resolve();

