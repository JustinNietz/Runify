

// All global variables that will be used constantly throughout each Function
var song, song2, song3, song4, song5, artist, artist2, artist3, artist4, artist5, minutes, minutes2, minutes3, minutes4, minutes5, seconds, seconds2, seconds3, seconds4, seconds5;
var sum, sumTotal, sumMinutes, sumSeconds,remaining, remainingMinutes, remainingSeconds, chartRemaining;

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

function getValues() {
  song = document.getElementById('songInput').value; // all entered information stored into id
  artist = document.getElementById('artistInput').value;
  minutes = document.getElementById("timeMinutes").value; //For each song inputed, variables for both minutes and seconds
  seconds = document.getElementById("timeSeconds").value;

  song2 = document.getElementById('songInput2').value; // all entered information stored into id
  artist2 = document.getElementById('artistInput2').value;
  minutes2 = document.getElementById("timeMinutes2").value;
  seconds2 = document.getElementById("timeSeconds2").value;
  
  song3 = document.getElementById('songInput3').value; // all entered information stored into id
  artist3 = document.getElementById('artistInput3').value;
  minutes3 = document.getElementById("timeMinutes3").value;
  seconds3 = document.getElementById("timeSeconds3").value;
  
  song4 = document.getElementById('songInput4').value; // all entered information stored into id
  artist4 = document.getElementById('artistInput4').value;
  minutes4 = document.getElementById("timeMinutes4").value;
  seconds4 = document.getElementById("timeSeconds4").value;
  
  song5 = document.getElementById('songInput5').value; // all entered information stored into id
  artist5 = document.getElementById('artistInput5').value;
  minutes5 = document.getElementById("timeMinutes5").value;
  seconds5 = document.getElementById("timeSeconds5").value;
  }

//To see the total minutes you have entered
function arrayTotal(){ 
 getValues(); 
  var total = (Number(minutes) * 60) + Number(seconds); // Converting all minutes into seconds plus extra seconds inputed
  var total2 = (Number(minutes2) * 60) + Number(seconds2);
  var total3 = (Number(minutes3) * 60) + Number(seconds3);
  var total4 = (Number(minutes4) * 60) + Number(seconds4);
  var total5 = (Number(minutes5) * 60) + Number(seconds5);

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
    document.getElementById("arrayTotal").innerHTML = "Total time: " + sumMinutes + " minutes " + sumSeconds + " seconds";
  }

};

//Mathematical function  
function subtractionCounter(){
  var nameMilesTotal = document.getElementById("minutesInput"); //For total time ran
  var milesTotal = Number(nameMilesTotal.value);

  var total = (Number(minutes) * 60) + Number(seconds); // Converting all minutes into seconds plus extra seconds inputed
  var total2 = (Number(minutes2) * 60) + Number(seconds2);
  var total3 = (Number(minutes3) * 60) + Number(seconds3);
  var total4 = (Number(minutes4) * 60) + Number(seconds4);
  var total5 = (Number(minutes5) * 60) + Number(seconds5);

  let storedTimes = []; //Pushing all seconds into an array with length of 5
    storedTimes.push(total);
    storedTimes.push(total2);
    storedTimes.push(total3);
    storedTimes.push(total4);
    storedTimes.push(total5);

  sum = storedTimes.reduce((a, b) => a + b); // Adding all numbers in the array together in seconds
  sumTotal = (sum / 60).toFixed(2); // Dividing seconds by 60 with a rounded decimal to the hundreths place
  sumMinutes = Math.floor(sum / 60); // Converting total time into minutes
  sumSeconds = sum % 60; // Converting total time into seconds

  remaining = Number(milesTotal - sumTotal).toFixed(2); //Same converstion but finding the difference between the miles total and song length totals 
  remainingMinutes = Math.floor(remaining);
  remainingSeconds = Math.floor((remaining - remainingMinutes) * 60);

  if (sumTotal < milesTotal){ //Printing out different statements for if you need more songs verses if you have too many
    document.getElementById("minus").innerHTML = remainingMinutes + " minutes " + remainingSeconds + " seconds remaining.";
  } else if(sumTotal > milesTotal) {
    document.getElementById("minus").innerHTML = remainingMinutes + " minutes " + remainingSeconds + " seconds over. "  + "Need to delete a song or two!";
  } else {
    document.getElementById("minus").innerHTML = "Completed!";
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

// For Google Pie Chart

  // Draw the chart and set the chart values
  function drawChart() {
    chartRemaining = (remainingMinutes * 60) + remainingSeconds;
    let total = (Number(minutes) * 60) + Number(seconds); // Converting all minutes into seconds plus extra seconds inputed
    let total2 = (Number(minutes2) * 60) + Number(seconds2);
    let total3 = (Number(minutes3) * 60) + Number(seconds3);
    let total4 = (Number(minutes4) * 60) + Number(seconds4);
    let total5 = (Number(minutes5) * 60) + Number(seconds5);


  var data = google.visualization.arrayToDataTable([
  ['Songs', 'Length(seconds)'],
  [song, total],
  [song2, total2],
  [song3, total3],
  [song4, total4],
  [song5, total5],
  ['Remaining', chartRemaining]

  ]);


    // Optional; add a title and set the width and height of the chart
    var options = {'allowHtml': true, 'legend': {textStyle: {color: 'white', fontSize: 12}}, 'width':400, 'height':300, 'backgroundColor': 'transparent', 'is3D':true};
  
    //Format numbers to include suffix "seconds"
    var formatter = new google.visualization.NumberFormat(
      {suffix: ' seconds', fractionDigits: 0});
    formatter.format(data, 1);

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }