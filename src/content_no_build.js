const Swal = require('sweetalert2')

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
            switchAlert()
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


// Função que mostra o alert de confirmação
function alertConfirm() {
    Swal.fire({
      title: 'Come on!',
      imageUrl: '../assets/banner03.png',
      allowOutsideClick: false,
      allowEscapeKey: false,
      background: `
        #212723
      `,
      backdrop: `
        #FFFFFF60
      `,
      confirmButtonText: `Begin`,
      confirmButtonColor: `
        #564fd1
      `,
    })
  }

  function switchAlert() {

    let timerInterval
    Swal.fire({
      title: 'Rest',
      html: ' Time: <b></b>:<strong></strong> ',
      imageUrl: '../assets/banner02.png',
      timer: (2)*1000,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      background: `
        #212723
      `,
      backdrop: `
        #FFFFFF60
      `,

      onBeforeOpen: () => {
          //Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              const strong = content.querySelector('strong')
              if (b) {
                b.textContent = Math.floor((Swal.getTimerLeft() / 1000)/60)
                strong.textContent = Math.floor((Swal.getTimerLeft() % 6e4)/1000)
              }
            }
          }, 100)
      },

      onClose: () => {
        clearInterval(timerInterval)
        
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      alertConfirm()
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
}
