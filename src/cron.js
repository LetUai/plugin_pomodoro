
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



function sendMessage() {
    // Messages are just objects
    let time = document.getElementById("choice").value
    var msg = {
    from: 'cron',
    level,
    time
    }
    // A tab has be selected for the message to be sent
    var params = {
      active: true,
      currentWindow: true
    }
    // This searches for the active tabs in the current window
    chrome.tabs.query(params, gotTabs);

    // Now we've got the tabs
    function gotTabs(tabs) {
      // The first tab is the one you are on
      chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
    }
  }


let start = document.getElementById("start-stop");
//start.addEventListener("click", sendMessage);

start.addEventListener("click", () => {
    switchAlert()
});

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