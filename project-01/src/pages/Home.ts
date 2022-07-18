import { getAll } from "../api/pokemon"
import { Pokemon } from "../models/pokemon";
const Home = {
    render: async () => {
        const data = await getAll();
        const pokemons:Pokemon[] = data.data;
        return `
            <div class="max-w-6xl mx-auto grid grid-cols-5">
          
            ${pokemons.map(item => `
            <a href="/pokemons/${item.id}"> 
                           <div>
                        <img src="${item.image}">
                            <h3>${item.name}</h3>
                                <div class="flex space-x-2">
                     ${item.type.map(type =>
                   type.type.name == "poison" ? `<p class="bg-violet-700">${type.type.name}</p>` :
                   type.type.name == "normal" ? `<p class="bg-gray-300">${type.type.name}</p>` :
                   type.type.name == "flying" ? `<p class="bg-blue-300">${type.type.name}</p>` :
                        `<p>${type.type.name}</p> `
        ).join('')
            }
                    </div>

                        </div></a>
                    `).join('')
            }
            </div>
        `
    }
}
export default Home