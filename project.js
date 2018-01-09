//Constructor method to save all song input 
function Song(name, artist, minutes, seconds){
  this.name= name;
  this.artist= artist;
  this.minutes= minutes;
  this.seconds= seconds;
  this.info= name + " " + artist + " " + minutes + " " + seconds;

//Sets all Song values when user inputs information
  this.setName=function(newName){ 
    this.name=newName;  
      if (this.name.length > 30){
        $('#alert').html("<strong>Warning!</strong> Name of song too long!");
        $('#alert').fadeIn().delay(1000).fadeOut(); //JQuery alert if information is entered incorrectly.
        this.name = "";
      } else if (this.name.length == 0){
        $('#alert').html("<strong>Warning!</strong> Need name of song!");
        $('#alert').fadeIn().delay(1000).fadeOut();
        this.name = "";
      } else {
        return this.name; 
      }
  }

  this.setArtist=function(newArtist){
      this.artist=newArtist;
        if (this.artist.length > 30){
          $('#alert2').html("<strong>Warning!</strong> Name of artist too long!");
          $('#alert2').fadeIn().delay(1000).fadeOut();
          this.artist = "";
        } else if (this.artist.length == 0){
          $('#alert2').html("<strong>Warning!</strong> Need name of artist!");
          $('#alert2').fadeIn().delay(1000).fadeOut();
          this.artist = "";
        } else {
         return this.artist;
        }
  }

  this.setMinutes=function(newMinutes){
    this.minutes=newMinutes;
      if (this.minutes > 25){
        $('#alert3').html("<strong>Warning!</strong> Length of song too long!");
        $('#alert3').fadeIn().delay(1000).fadeOut();
        this.minutes = "";
      } else if (this.minutes == 0){
        $('#alert3').html("<strong>Warning!</strong> Need length of song!");
        $('#alert3').fadeIn().delay(1000).fadeOut();
        this.minutes = "";
      } else {
        return this.minutes;
      }
  }

  this.setSeconds=function(newSeconds){
    this.seconds=newSeconds;
     if (this.seconds > 59) {
      $('#alert4').html("<strong>Warning!</strong> Needs to less than 60 seconds!");
      $('#alert4').fadeIn().delay(1000).fadeOut();
      this.seconds= "";
    } else {
      return this.seconds;
    }
  }

// Shows the information inputed by each new object
  this.showInfo= function(){
    if (this.seconds < 10 && this.seconds > 0){
      return this.info = "Song Name: " + this.name + "<br>" + "Artist Name: " + this.artist + "<br>" + "Length: " + this.minutes + ":" + "0" +this.seconds;
    } else if (this.seconds == '' || this.seconds == 0) {
      return this.info = "Song Name: " + this.name + "<br>" + "Artist Name: " + this.artist + "<br>" + "Length: " + this.minutes + ":" +"00";
    } else  {
      return this.info = "Song Name: " + this.name + "<br>" + "Artist Name: " + this.artist + "<br>" + "Length: " + this.minutes + ":" +this.seconds;
    }
  }

};

// Functions storing new objects created for every song entered (Max of 5)
function userSong(){
  let songObj= new Song(); //creates a new instances everytime
  songObj.setName(document.getElementById('songInput').value); // all entered information stored into id
  songObj.setArtist(document.getElementById('artistInput').value);
  songObj.setMinutes(document.getElementById('timeMinutes').value);
  songObj.setSeconds(document.getElementById('timeSeconds').value);
  document.getElementById("total").innerHTML = songObj.showInfo();
}

function userSong2(){
  let songObj= new Song();
  songObj.setName(document.getElementById('songInput2').value);
  songObj.setArtist(document.getElementById('artistInput2').value);
  songObj.setMinutes(document.getElementById('timeMinutes2').value);
  songObj.setSeconds(document.getElementById('timeSeconds2').value);
  document.getElementById("total2").innerHTML = songObj.showInfo();
}

function userSong3(){
  let songObj= new Song();
  songObj.setName(document.getElementById('songInput3').value);
  songObj.setArtist(document.getElementById('artistInput3').value);
  songObj.setMinutes(document.getElementById('timeMinutes3').value);
  songObj.setSeconds(document.getElementById('timeSeconds3').value);
  document.getElementById("total3").innerHTML = songObj.showInfo();
}

function userSong4(){
  let songObj= new Song();
  songObj.setName(document.getElementById('songInput4').value);
  songObj.setArtist(document.getElementById('artistInput4').value);
  songObj.setMinutes(document.getElementById('timeMinutes4').value);
  songObj.setSeconds(document.getElementById('timeSeconds4').value);
  document.getElementById("total4").innerHTML = songObj.showInfo();
}

function userSong5(){
  let songObj= new Song();
  songObj.setName(document.getElementById('songInput5').value);
  songObj.setArtist(document.getElementById('artistInput5').value);
  songObj.setMinutes(document.getElementById('timeMinutes5').value);
  songObj.setSeconds(document.getElementById('timeSeconds5').value);
  document.getElementById("total5").innerHTML = songObj.showInfo();
}

//To see the total minutes you have entered
function arrayTotal(){ 
  let nameMinutes = document.getElementById("timeMinutes"); //For each song inputed, variables for both minutes and seconds
  let minutes = nameMinutes.value;
  let nameSeconds = document.getElementById("timeSeconds");
  let seconds = nameSeconds.value;

  let nameMinutes2 = document.getElementById("timeMinutes2");
  let minutes2 = nameMinutes2.value;
  let nameSeconds2 = document.getElementById("timeSeconds2");
  let seconds2 = nameSeconds2.value;

  let nameMinutes3 = document.getElementById("timeMinutes3");
  let minutes3 = nameMinutes3.value;
  let nameSeconds3 = document.getElementById("timeSeconds3");
  let seconds3 = nameSeconds3.value;

  let nameMinutes4 = document.getElementById("timeMinutes4");
  let minutes4 = nameMinutes4.value;
  let nameSeconds4 = document.getElementById("timeSeconds4");
  let seconds4 = nameSeconds4.value;

  let nameMinutes5 = document.getElementById("timeMinutes5");
  let minutes5 = nameMinutes5.value;
  let nameSeconds5 = document.getElementById("timeSeconds5");
  let seconds5 = nameSeconds5.value;

  let total = (Number(minutes) * 60) + Number(seconds); // Converting all minutes into seconds plus extra seconds inputed
  let total2 = (Number(minutes2) * 60) + Number(seconds2);
  let total3 = (Number(minutes3) * 60) + Number(seconds3);
  let total4 = (Number(minutes4) * 60) + Number(seconds4);
  let total5 = (Number(minutes5) * 60) + Number(seconds5);

  let storedTimes = []; //Pushing all seconds into an array with length of 5
    storedTimes.push(total);
    storedTimes.push(total2);
    storedTimes.push(total3);
    storedTimes.push(total4);
    storedTimes.push(total5);

  const sum= storedTimes.reduce((a, b) => a + b); // Adding all numbers in the array together in seconds
  let sumTotal = (sum / 60).toFixed(2); // Dividing seconds by 60 with a rounded decimal to the hundreths place
  let sumMinutes = Math.floor(sum / 60); // Converting total time into minutes
  let sumSeconds = sum % 60; // Converting total time into seconds

  if(minutes >= 25 || minutes2 >= 25 || minutes3 >= 25 || minutes4 >= 25 || minutes5 >= 25){ // Printing into unkown if the individual song length is too long
    document.getElementById("arrayTotal").innerHTML = "unknown";
  } else {
    document.getElementById("arrayTotal").innerHTML = "total time: " + sumMinutes + " minutes " + sumSeconds + " seconds.";
  }

};

//Mathematical function  
function subtractionCounter(){
  let nameMilesTotal = document.getElementById("minutesInput"); //For total time ran
  let milesTotal = Number(nameMilesTotal.value);

  let nameMinutes = document.getElementById("timeMinutes"); //For each song inputed, variables for both minutes and seconds
  let minutes = nameMinutes.value;
  let nameSeconds = document.getElementById("timeSeconds");
  let seconds = nameSeconds.value;

  let nameMinutes2 = document.getElementById("timeMinutes2");
  let minutes2 = nameMinutes2.value;
  let nameSeconds2 = document.getElementById("timeSeconds2");
  let seconds2 = nameSeconds2.value;

  let nameMinutes3 = document.getElementById("timeMinutes3");
  let minutes3 = nameMinutes3.value;
  let nameSeconds3 = document.getElementById("timeSeconds3");
  let seconds3 = nameSeconds3.value;

  let nameMinutes4 = document.getElementById("timeMinutes4");
  let minutes4 = nameMinutes4.value;
  let nameSeconds4 = document.getElementById("timeSeconds4");
  let seconds4 = nameSeconds4.value;

  let nameMinutes5 = document.getElementById("timeMinutes5");
  let minutes5 = nameMinutes5.value;
  let nameSeconds5 = document.getElementById("timeSeconds5");
  let seconds5 = nameSeconds5.value;

  let total = (Number(minutes) * 60) + Number(seconds); // Converting all minutes into seconds plus extra seconds inputed
  let total2 = (Number(minutes2) * 60) + Number(seconds2);
  let total3 = (Number(minutes3) * 60) + Number(seconds3);
  let total4 = (Number(minutes4) * 60) + Number(seconds4);
  let total5 = (Number(minutes5) * 60) + Number(seconds5);

  let storedTimes = []; //Pushing all seconds into an array with length of 5
    storedTimes.push(total);
    storedTimes.push(total2);
    storedTimes.push(total3);
    storedTimes.push(total4);
    storedTimes.push(total5);

  const sum= storedTimes.reduce((a, b) => a + b); // Adding all numbers in the array together in seconds
  let sumTotal = (sum / 60).toFixed(2); // Dividing seconds by 60 with a rounded decimal to the hundreths place
  let sumMinutes = Math.floor(sum / 60); // Converting total time into minutes
  let sumSeconds = sum % 60; // Converting total time into seconds

  let remaining = Number(milesTotal - sumTotal).toFixed(2); //Same converstion but finding the difference between the miles total and song length totals 
  let remainingMinutes = Math.floor(remaining);
  let remainingSeconds = Math.floor((remaining - remainingMinutes) * 60);

  if (sumTotal < milesTotal){ //Printing out different statements for if you need more songs verses if you have too many
    document.getElementById("minus").innerHTML = remainingMinutes + " minutes " + remainingSeconds + " seconds remaining. Add more?";
  } else if(sumTotal > milesTotal) {
    document.getElementById("minus").innerHTML = remainingMinutes + " minutes " + remainingSeconds + " seconds over. "  + "Need to delete a song or two!";
  }

};

//Days input
function getDays() {
  let nameElement1 = document.getElementById("daysInput");
  let days1 = nameElement1.value;
  document.getElementById("daysOutput").innerHTML = "<b>Day:</b>" + "<br>" + days1;

}

//Miles input
function getMiles(){
  let nameElement = document.getElementById("milesInput");
  let miles  = nameElement.value;
  document.getElementById("milesOutput").innerHTML = "<b>Miles total:</b>" + "<br>" + miles + " miles";

  let nameElement2 = document.getElementById("minutesInput");
  let minutes = nameElement2.value;
  document.getElementById("minutesOutput").innerHTML = "<b>Minutes total:</b> " + "<br>" + minutes + " minutes";

  let formula = Number(minutes) * 60;
  document.getElementById("conversion").innerHTML = "You're running " + miles + " miles in " + formula +  " seconds!";
  
  let formulaDivide = (Number(minutes) / Number(miles)) * 60;
  let sumTotal = (formulaDivide / 60).toFixed(2);
  let sumMinutes = Math.floor(formulaDivide / 60);
  let sumSeconds = formulaDivide % 60;

  document.getElementById("conversion2").innerHTML = "You will run each mile in " + sumMinutes + " minutes " + sumSeconds + " seconds.";
}

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
    
// For Google Custom Search;
(function() {
  var cx = '008029922266576954062:dsgwz8rzzrk';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

