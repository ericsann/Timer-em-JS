function criaSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'UTC'});
}
criaSegundos();



const relogio  = document.querySelector('.relogio');
const iniciar  = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const zerar  = document.querySelector('.zerar');

let intervalId;
let startTime;
let elapsedTime = 0;

function iniciaRelogio(){
    intervalId = setInterval(function(){
        elapsedTime++; 
        // @ts-ignore
        relogio.innerHTML = criaSegundos(elapsedTime);
        startTime = elapsedTime;
    }, 1000);
}

iniciar?.addEventListener('click', function(e){  
    iniciaRelogio();
})
pausar?.addEventListener('click', function(e){   
    clearInterval(intervalId);
})
zerar?.addEventListener('click', function(e){
    clearInterval(intervalId);
    elapsedTime = 0;
    // @ts-ignore
    relogio.innerHTML = criaSegundos(elapsedTime);
})