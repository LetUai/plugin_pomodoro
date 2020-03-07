
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
start.addEventListener("click", sendMessage);