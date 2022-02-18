var operazioneCliccata = false
function n(valore){ 
    document.getElementById("operazioni").value+=valore;
  }
  
  function operazione() { 
  document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value); 
  }
  
  function cancella() { 
  document.getElementById("operazioni").value=""; 
  }


