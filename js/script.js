var realtors = [
  {
    //name: 'john span',
    // yelp rating
    // yelp review (number)
    // real estate company
    // photo
    // array of cities
  }
]

var cities = [
  // texas
  { name: "Dallas", score: 8.0 },
  { name: "Fort Worth", score: 5.0 },
  { name: "Frisco", score: 9.1 },
  { name: "McKinney", score: 6.1 },
  { name: "Arlington", score: 1.3 },
  { name: "Little Elm", score: 7.6 },
  { name: "Plano", score: 3.7 },
  { name: "Irving", score: 6.7 },
  { name: "Flower Mound", score: 4.1 },
  { name: "Allen", score: 7.7 },
  { name: "Garland", score: 1.2 },
  { name: "Grand Prairie", score: 2.5 },
  { name: "Prosper", score: 9.9 },
  { name: "Denton", score: 1.9 },
  { name: "Rockwall", score: 8.0 },
  { name: "Colleyville", score: 9.0 },
  { name: "Southlake", score: 9.1 },
  { name: "Waxahachie", score: 7.9 },
  { name: "Mansfield", score: 5.7 },
  { name: "Cedar Hill", score: 5.0 },
  { name: "Mesquite", score: 2.3 },
  { name: "Rowlett", score: 2.5 },
  { name: "Midlothian", score: 7.2 },
  { name: "Keller", score: 8.8 },
  { name: "The Colony", score: 1.7 },
  { name: "Wylie", score: 2.7 },
  { name: "Carrollton", score: 1.1 },
  { name: "Lewisville", score: 0.5 },
  { name: "Terrell", score: 2.6 },
  { name: "Azle", score: 7.4 },
  { name: "DeSoto", score: 4.6 },
  { name: "University Park", score: 9.8 },
  { name: "Richardson", score: 1.3 },
  { name: "Ennis", score: 5.0 },
  { name: "Burleson", score: 4.6 },
  { name: "Cleburne", score: 3.2 },
  { name: "Coppell", score: 7.3 },
  { name: "Weatherford", score: 7.7 },
  { name: "Forney", score: 3.5 },
  { name: "Greenville", score: 5.8 },
  { name: "North Richland Hills", score: 2.3 },
  { name: "Lancaster", score: 2.4 },
  { name: "Sachse", score: 5.8 },
  { name: "Euless", score: 3.0 },
  { name: "Grapevine", score: 4.0 },
  { name: "Duncanville", score: 4.9 },
  { name: "Corinth", score: 7.4 },
  { name: "Saginaw", score: 8.0 },
  { name: "Benbrook", score: 5.1 },
  { name: "Murphy", score: 5.0 },
  { name: "Bedford", score: 0.3 },
  { name: "Crowley", score: 4.0 },
  { name: "Haltom City", score: 0.9 },
  { name: "Hurst", score: 1.1 },
  { name: "Watauga", score: 0.1 },


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
    $("#score2").html(score);
  }else{
    // no score found
    $("#score").html("<p class='bold_p'>City coming soon.</p><p>Try out a different city.</p>");
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



// City	 Realometer (S=0, B=10)	 Zillow Median Home Value	 Zillow Median List Price	 Median List $/SQFT	Listings with Price Cut	 Active Listings
// Dallas	  8.0 	 $ 163,800.00 	 $ 405,000.00 	 $ 205.00 	15.5%	  3,916
// Fort Worth	  5.0 	 -	 $ 232,000.00 	 $ 109.00 	13.5%	  3,122
// Frisco	  9.1 	 $ 390,600.00 	 $ 500,000.00 	 $ 154.00 	20.1%	  1,192
// McKinney	  6.1 	 $ 293,400.00 	 $ 369,995.00 	 $ 138.00 	16.2%	  1,123
// Arlington	  1.3 	 $ 177,300.00 	 $ 199,900.00 	 $ 104.00 	9.1%	  694
// Little Elm	  7.6 	 -	 $ 319,945.00 	 $ 126.00 	23.4%	  638
// Plano	  3.7 	 $ 325,400.00 	 $ 374,950.00 	 $ 142.00 	14.0%	  569
// Irving	  6.7 	 $ 181,300.00 	 $ 369,900.00 	 $ 151.00 	14.2%	  473
// Flower Mound	  4.1 	 -	 $ 462,492.00 	 $ 151.00 	12.3%	  405
// Allen	  7.7 	 $ 305,300.00 	 $ 403,990.00 	 $ 141.00 	18.5%	  404
// Garland	  1.2 		 $ 198,900.00 	 $ 112.00 	10.5%	  381
// Grand Prairie	  2.5 	 $ 176,000.00 	 $ 229,200.00 	 $ 98.00 	10.2%	  380
// Prosper	  9.9 	 -	 $ 510,570.00 	 $ 146.00 	26.3%	  377
// Denton	  1.9 		 $ 279,000.00 	 $ 124.00 	11.4%	  338
// Rockwall	  8.0 	 $ 260,000.00 	 $ 326,250.00 	 $ 122.00 	15.7%	  314
// Colleyville	  9.0 	 -	 $ 632,990.00 	 $ 170.00 	22.1%	  307
// Southlake	  9.1 	 $ 661,700.00 	 $ 789,000.00 	 $ 192.00 	17.7%	  267
// Waxahachie	  7.9 	 -	 $ 240,370.00 	 $ 115.00 	15.2%	  265
// Mansfield	  5.7 	 $ 252,400.00 	 $ 299,999.00 	 $ 111.00 	11.3%	  238
// Cedar Hill	  5.0 	 -	 $ 205,500.00 	 $ 96.00 	8.4%	  235
// Mesquite	  2.3 	 $ 155,700.00 	 $ 169,900.00 	 $ 98.00 	11.3%	  231
// Rowlett	  2.5 	 $ 233,000.00 	 $ 259,950.00 	 $ 115.00 	11.7%	  229
// Midlothian	  7.2 	 $ 233,900.00 	 $ 324,590.00 	 $ 119.00 	11.0%	  216
// Keller	  8.8 	 $ 382,200.00 	 $ 439,045.00 	 $ 142.00 	16.0%	  215
// The Colony	  1.7 	 $ 223,400.00 	 $ 402,990.00 	 $ 148.00 	10.9%	  211
// Wylie	  2.7 	 $ 241,300.00 	 $ 286,560.00 	 $ 120.00 	13.6%	  206
// Carrollton	  1.1 	 $ 252,300.00 	 $ 290,000.00 	 $ 136.00 	10.7%	  201
// Lewisville	  0.5 	 $ 235,100.00 	 $ 276,900.00 	 $ 134.00 	10.1%	  189
// Terrell	  2.6 	 $ 128,400.00 	 $ 209,945.00 	 $ 104.00 	10.3%	  171
// Azle	  7.4 	 $ 146,700.00 	 $ 239,000.00 	 $ 111.00 	12.0%	  163
// DeSoto	  4.6 	 $ 177,300.00 	 $ 199,000.00 	 $ 87.00 	8.3%	  160
// University Park	  9.8 	 $ 1,419,700.00 	 $ 1,600,000.00 	 $ 417.00 	22.3%	  155
// Richardson	  1.3 	 $ 277,400.00 	 $ 335,000.00 	 $ 149.00 	11.3%	  152
// Ennis	  5.0 	 $ 118,000.00 	 $ 165,000.00 	 $ 86.00 	-	  152
// Burleson	  4.6 	 $ 169,500.00 	 $ 229,450.00 	 $ 105.00 	11.8%	  148
// Cleburne	  3.2 	 $ 117,900.00 	 $ 145,000.00 	 $ 87.00 	12.7%	  144
// Coppell	  7.3 	 $ 406,900.00 	 $ 484,400.00 	 $ 170.00 	15.2%	  143
// Weatherford	  7.7 	 $ 163,700.00 	 $ 213,000.00 	 $ 109.00 	15.0%	  143
// Forney	  3.5 	 -	 $ 245,000.00 	 $ 108.00 	13.8%	  141
// Greenville	  5.8 	 $ 89,200.00 	 $ 174,500.00 	 $ 96.00 	13.7%	  135
// North Richland Hills	  2.3 	 $ 206,200.00 	 $ 289,426.00 	 $ 122.00 	9.2%	  134
// Lancaster	  2.4 	 $ 148,000.00 	 $ 150,000.00 	 $ 84.00 	6.4%	  131
// Sachse	  5.8 	 $ 259,500.00 	 $ 349,814.00 	 $ 121.00 	18.9%	  120
// Euless	  3.0 	 $ 205,900.00 	 -	 $ 138.00 	14.8%	  97
// Grapevine	  4.0 	 $ 330,700.00 	 $ 384,950.00 	 $ 158.00 	13.9%	  91
// Duncanville	  4.9 	 $ 155,300.00 	 $ 189,700.00 	 $ 98.00 	4.7%	  79
// Corinth	  7.4 	 $ 247,700.00 	 $ 275,000.00 	 $ 114.00 	18.0%	  74
// Saginaw	  8.0 	 $ 168,900.00 	 $ 241,495.00 	 $ 103.00 	19.8%	  74
// Benbrook	  5.1 	 $ 184,000.00 	 $ 249,900.00 	 $ 120.00 	15.0%	  71
// Balch Springs	 -	 -	 $ 141,500.00 	 $ 90.00 	-	  63
// Seagoville	 -	 $ 126,500.00 	 $ 158,619.00 	 $ 98.00 	-	  58
// Murphy	  5.0 	 $ 369,400.00 	 $ 385,000.00 	 $ 124.00 	9.3%	  57
// Bedford	  0.3 	 $ 227,500.00 	 $ 249,000.00 	 $ 127.00 	8.2%	  55
// Highland Village	 -	 $ 366,700.00 	 $ 429,495.00 	 $ 141.00 	-	  55
// Crowley	  4.0 	 -	 $ 199,900.00 	 $ 98.00 	2.9%	  51
// Farmers Branch	 -	 $ 208,300.00 	 -	 $ 157.00 	-	  48
// Haltom City	  0.9 	 $ 125,600.00 	 -	 $ 99.00 	7.8%	  48
// Hurst	  1.1 	 -	 $ 220,000.00 	 $ 115.00 	10.2%	  48
// Glenn Heights	 -	 $ 165,500.00 	 -	 $ 94.00 	-	  42
// Forest Hill	 -	 $ 99,700.00 	 -	 -	-	  33
// Watauga	  0.1 	 -	 $ 155,000.00 	 $ 108.00 	-	  21
// Addison	 -	 $ 330,200.00 	 $ 337,000.00 	 $ 181.00 	-	  12
//
//
// Average	  4.8 	  255,925.0 	  323,596.1 	  128.5 	13.3%	  332.3
