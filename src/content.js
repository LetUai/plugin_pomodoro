
console.log('vindo do content... ')

// ------------- cronometro básico --------------------
const timer = (n) => new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('contando..');
    }, n);
});
//------------------------------------------------

async function getLevel( time, level)
{
   let mim = 0; 
   let pause = 0; 

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
chrome.runtime.onMessage.addListener(receiver);

// A message is received
function receiver(request, sender, sendResponse) {
    getLevel(request.time,request.level);
}