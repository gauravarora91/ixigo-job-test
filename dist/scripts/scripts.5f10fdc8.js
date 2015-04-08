airlineMap={SJ:"Spicejet",AI:"Air India",G8:"Go Air",JA:"Jet Airways",IN:"Indigo"},airportMap={DEL:"New Delhi",MUM:"Mumbai"},flightsData=[{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396614600000",landingTime:"1396625400000",price:"11500",airlineCode:"G8","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396616400000",landingTime:"1396623600000",price:"14400",airlineCode:"AI","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396618200000",landingTime:"1396629000000",price:"12300",airlineCode:"JA","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396620000000",landingTime:"1396627200000",price:"15200",airlineCode:"SJ","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396621800000",landingTime:"1396632600000",price:"16700",airlineCode:"IN","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396596600000",landingTime:"1396607400000",price:"5500",airlineCode:"G8","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396598400000",landingTime:"1396605600000",price:"4400",airlineCode:"AI","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396600200000",landingTime:"1396611000000",price:"4600",airlineCode:"JA","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396602000000",landingTime:"1396609200000",price:"7800",airlineCode:"SJ","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396603800000",landingTime:"1396614600000",price:"8700",airlineCode:"IN","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396605600000",landingTime:"1396612800000",price:"5000",airlineCode:"G8","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396607400000",landingTime:"1396618200000",price:"9800",airlineCode:"AI","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396609200000",landingTime:"1396616400000",price:"4100",airlineCode:"JA","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396611000000",landingTime:"1396621800000",price:"4600",airlineCode:"SJ","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396612800000",landingTime:"1396620000000",price:"5700",airlineCode:"IN","class":"Economy"}],angular.module("ixigoTestApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/flights",{templateUrl:"views/flights.html",controller:"FlightsCtrl"}).when("/hotels",{templateUrl:"views/hotels.html",controller:"HotelsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ixigoTestApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("ixigoTestApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("ixigoTestApp").controller("FlightsCtrl",["$scope",function(a){var b=[];angular.forEach(airlineMap,function(a,b){this.push({name:a,code:b,state:!1})},b),a.airlines=b;var c=[{"class":"Business",state:!1},{"class":"Economy",state:!1}];a.airlineClass=c,flightsData=angular.forEach(flightsData,function(a){a.price=parseInt(a.price)},flightsData),a.flightsData=flightsData,a.duration=function(a,b){return a-b},a.codeToName=function(a){return airlineMap[a]},a.airportCodeToName=function(a){return airportMap[a]},a.airlineToggle=function(){var c=[];return angular.forEach(b,function(b){b.state&&(c=c.concat(a.airlineFilter(b.code)))}),c=a.classFilter(c),0===c.length?(a.flightsData=flightsData,a.flightsData):void(a.flightsData=c)},a.airlineFilter=function(a){var b=[];return angular.forEach(flightsData,function(b){b.airlineCode===a&&this.push(b)},b),b},a.classFilter=function(a){0===a.length&&(a=flightsData);var b=[];return angular.forEach(c,function(c){c.state===!0&&angular.forEach(a,function(a){a["class"]===c["class"]&&this.push(a)},b)}),0===b.length?a:b}}]),angular.module("ixigoTestApp").controller("HotelsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);