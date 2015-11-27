
var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

var divPlanets = document.createElement("DIV");
divPlanets.id = 'blocks';
document.body.appendChild(divPlanets);

var espace = 160;
var esp =180;
for(i=diametres.length-1;i>=0;i--){
  var planet = document.createElement("DIV");
  planet.id=names[i];
  //planet.textContent=names[i];
  //planet.style.textAlign="center";
  //planet.style.color="grey";
  planet.style.position="absolute";
  planet.style.marginTop="-550px";
  planet.style.backgroundColor="black";
  planet.style.width="90px";
  planet.style.height=(diametres[i]/290)+"px";
  planet.style.marginLeft=espace+"px";

  var planetNom = document.createElement("P");
  planetNom.appendChild(document.createTextNode(names[i]))
  planetNom.style.color="grey";
  planetNom.style.position="absolute";
  planetNom.style.fontSize="20px"
  planetNom.style.marginTop="-450px";
  planetNom.style.marginLeft=esp+"px";

  document.getElementById('blocks').appendChild(planet);
  document.getElementById('blocks').appendChild(planetNom);
  espace+=110;
  esp+=110;
}

