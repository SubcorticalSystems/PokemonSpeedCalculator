
const pokemon_base_speed = {
    calyrex_shadow: 150, flutter_mane: 135, iron_bundle: 136, 
}

let nature;
function getNature(){
    nature = document.getElementById('pokemon-nature').value;
    return nature;
}

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