import { get } from "../api/pokemon"
import { Pokemon } from "../models/pokemon";
const Detail = {
   async render(Id:any){
   console.log("🚀 ~ file: Detail.ts ~ line 5 ~ render ~ Id", Id)

    //   const id = location.href.slice(31);
      const data = await get(Id);
      const pokemon:Pokemon= data.data
      console.log("🚀 ~ file: Detail.ts ~ line 8 ~ render ~ pokemon", pokemon)
      
      return /*html*/`

            <div class="flex justify-center "> 
                <div class="flex-column border border-slate-800 rounded px-3 py-3">
                <img class="object-contain h-40 w-40" src="${pokemon.image}">
                <h3 class="font-bold">Name : ${pokemon.name}</h3>
                <h3 class="font-bold">Weight : ${pokemon.weight}</h3>
                <h3 class="font-bold">Height : ${pokemon.height}</h3>
                <div class="flex space-x-2 font-bold mb-3">
                ${pokemon.type.map(type =>
                    type.type.name == "poison" ? `<p class="bg-violet-700">${type.type.name}</p>` :
                    type.type.name == "normal" ? `<p class="bg-gray-300">${type.type.name}</p>` :
                    type.type.name == "flying" ? `<p class="bg-blue-300">${type.type.name}</p>` :
                         `<p>${type.type.name}</p> `
         ).join('')
                    }     
                    </div> 
                    <a class="bg-blue-300 rounded px-1 py-1" href="/" >Back to Home</a>
                </div>
            </div>             
      `
    }
}
export default Detail;