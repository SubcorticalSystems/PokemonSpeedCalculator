//an array to store all pokemon and speed stats 
const pokemon = [
    "Calyrex Shadow", "Flutter Mane", "Iron Bundle" 
]
const pokemon_base_speed = {
    "Calyrex Shadow": 150, 
}
//checks for nature modifier and calculates increased speed stat by 10%
let nature;
function getNature(){
    nature = document.getElementById('pokemon-nature').value;
    return nature;
}
//reads and returns input for Individual Values (IVs)
let IvInput;
function IvFetcher(){  
    IvInput = document.getElementById('Iv').value;
if(IvInput > 31 ){
    IvInput = 31;
    document.getElementById('Iv').value = 31
    console.log('IvInput is greater than 31')
    return IvInput;
} else if (IvInput < 0){
    IvInput = 0;
    document.getElementById('Iv').value = 0
    console.log('IvInput is less than 0')
} 
return IvInput;
}
//reads and returns input for Effort Values (EVs) 
let EvInput;
function EvFetcher(){  
    EvInput = document.getElementById('Ev').value;
if(EvInput > 252 ){
    EvInput = 252;
    document.getElementById('Ev').value = 252
    console.log('EvInput is greater than 31')
    return EvInput;
} else if (EvInput < 0){
    EvInput = 0;
    document.getElementById('Ev').value = 0
    console.log('EvInput is less than 0')
} 
return EvInput;
}
//lets user input what level their format is using
let level = 50;
function getLevel(){
    level = document.getElementById('pokemon-level').value;
    if(level === "one"){
        level = 1;
    } else if (level === "fifty"){
        level = 50;
    } else if (level === "one hundred"){
        level = 100;
    }
    return level;
}
//search for pokemon
const searchInput = document.getElementById('pokemonSearch');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');
let pokemonOneSelection;
searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = pokemon.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  let content = results
    .map((item) => {return `<li id="pokemonSelectionOne" onclick=updater()>${item}</li>`;}).join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  pokemonOneSelection = document.getElementById('pokemonSelectionOne').innerText;
  return pokemonOneSelection;
}

function updater(){
    document.getElementById('pokemonSearch').value = document.getElementById('pokemonSelectionOne').innerText;
    searchWrapper.classList.remove('show');
}


console.log(pokemon_base_speed["Calyrex Shadow"]);