
const timer = (n) => new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('contando..');
    }, n);
});

 // ----------- instanciando os niveis ------------
let levelFlash = document.getElementById('flash');
let levelMedium = document.getElementById('medium');
let levelHard  = document.getElementById('hard');

//-------------- função para tratar a marcação dos radius ------------
let level  = undefined;

levelFlash.addEventListener('click',()=>{
    levelHard.checked = false;
    levelMedium.checked = false;
    level =  "flash";
});
levelHard.addEventListener('click',()=>{
    levelFlash.checked = false;
    levelMedium.checked = false;
    level = "hard";
});
levelMedium.addEventListener('click',()=>{
    levelFlash.checked = false;
    levelHard.checked = false;
    level = "medium";
});

//-------------------------------------------------------------------------

async function getLevel()
 {
    let time = document.getElementById("choice").value
    let mim =  0;
    let pause  = 0; 

    switch(level){
       case 'flash': 
       mim  = 1800;
       pause = 300;
       break;
       case 'medium':
       mim = 2400;
       pause = 480;
       break;
       case 'hard':
       mim = 3600;
       pause = 600;
       break;        
       default: 
       console.log('error');
   }


    if(time > 0 && mim > 0 && pause > 0){
        //---------- numero de repetições ------------
        for(var j  = 0; j <= time; j++){
            //--------- contador ---------
            if(j == time){
                alert('seu tempo de estudo acabou!')
            }
            for(var i = 0; i < mim; i++){
                console.log(i);
                console.log("--------" + j);
                await timer(1000);
             }
             //--------------- tempo de descanço--------
            await timer(1000 * pause)
        }
    }
} 


let start = document.getElementById("start-stop");
start.addEventListener("click", getLevel);