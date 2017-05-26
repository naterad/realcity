var cities = [
  // texas
  { name: "Dallas", score: 7.2 },
  { name: "Fort Worth", score: 7.2 },
  { name: "Arlington", score: 7.2 },
  { name: "Plano", score: 7.2 },
  { name: "Irving", score: 7.2 },
  { name: "Denton", score: 7.2 },
  { name: "Richardson", score: 7.2 },
  { name: "Grand Prairie", score: 7.2 },
  { name: "McKinney", score: 7.2 },
  { name: "Mesquite", score: 7.2 },
  { name: "Frisco", score: 7.2 },
  { name: "Carrollton", score: 7.2 },
  { name: "Lewisville", score: 7.2 },
  { name: "Houston", score: 7.2 },

  // big cities
  { name: "Chicago", score: 7.2 },
  { name: "New York", score: 7.2 },
  { name: "Los Angeles", score: 7.2 },
  { name: "Seattle", score: 7.2 },
  { name: "Boston", score: 7.2 },
  { name: "Atlanta", score: 7.2 },
  { name: "Philadelphia", score: 7.2 },
  { name: "Phoenix", score: 7.2 },
  { name: "Salt Lake City", score: 7.2 },
  { name: "Provo", score: 7.2 }
]
var currentScore = -1;
var currentPlace = "";

function loadHome(){
  initialize();
}
function submitSearch(){
  currentPlace = $("#searchTextField").val();
  var arr = currentPlace.split(",");

  // console.log(arr[0]);

  calculateResult(arr[0]);
}
function calculateResult(city){
  var score = -1;
  for(var i=0; i<cities.length; i++){
    if(cities[i].name.toLowerCase() == city.toLowerCase()){
      score = cities[i].score;
    }
  }
  if(score != -1){
    // print score
    currentScore = score;
    $("#score").html(score);
  }else{
    // no score found
    $("#score").html("Couldn't calculate score. Please try another city.");
  }
}
function initialize() {
  var options = {
    types: ['(cities)'],
    componentRestrictions: {country: "us"}
   };

  var input = document.getElementById('searchTextField');
  var autocomplete = new google.maps.places.Autocomplete(input, options);
}

// google.maps.event.addDomListener(window, 'load', initialize);
