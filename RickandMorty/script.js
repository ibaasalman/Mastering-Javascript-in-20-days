const url = 'https://rickandmortyapi.com/api/character';
const characterList = document.querySelector("#characterList");

getData();
async function getData(){
    //try{
    const data = await fetch(url);
    const {results} = await data.json();
    render(results.filter((i)=>{
        return i.status === "Alive";
    }).splice(0,50))
   // }catch(error){
   //     alert("Error while feching data")
   // } 
} 

const render = (data)=>{

    for(const {name, image, location, species,  gender} of data){
        
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.setAttribute("src",image);
        const h2 = document.createElement("h2");
        h2.textContent=name;
        const flex = document.createElement("div")
        flex.classList.add("flex");
       

        const sp = document.createElement("div");
        sp.textContent = species;
        sp.classList.add("species")
        flex.appendChild(sp);

        const gen = document.createElement("div");
        gen.textContent = gender;
        gen.classList.add("gen")
        flex.appendChild(gen);

        const loc = document.createElement("p");
        loc.textContent = location.name;
        flex.appendChild(loc);
        
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(flex);
        characterList.appendChild(li);
        // <div>
        //             <a href="">hhh</a>
        //             <div class="flex">
        //                 <div>gg</div>
        //                 <div>gg</div>
        //             </div>
        //         </div>
        
    }
}