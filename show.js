// JQuery for having different song choice buttons
function show() {
    document.getElementById("panel").style.display = "none"; // hides the panel
    document.getElementById("panel2").style.display = "block"; // shows the panel
    
  }
    
  function show2(){
    document.getElementById("panel").style.display = "block";
    document.getElementById("panel2").style.display = "none";
  }
    
  function show3(){
    document.getElementById("panel2").style.display = "none";
    document.getElementById("panel3").style.display = "block";
  }
    
  function show4(){
    document.getElementById("panel2").style.display = "block";
    document.getElementById("panel3").style.display = "none";
  }
    
  function show5(){
    document.getElementById("panel3").style.display = "none";
    document.getElementById("panel4").style.display = "block";
  }
  
  function show6(){
    document.getElementById("panel3").style.display = "block";
    document.getElementById("panel4").style.display = "none";
  }
  
  function show7(){
    document.getElementById("panel4").style.display = "none";
    document.getElementById("panel5").style.display = "block";
  }
      
  function show8(){
    document.getElementById("panel4").style.display = "block";
    document.getElementById("panel5").style.display = "none";
  }
  
  // for showing next input
  function showInfo(){
    document.getElementById("infoInput").style.display = "block"; // hides the panel
  
  }