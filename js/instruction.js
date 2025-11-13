console.log("Loaded...");

document.querySelector("#eyebrow").addEventListener("click", eyebrowF);

function eyebrowF() {
  console.log("eyebrow function loaded");
  document.querySelector("#eyes").style.backgroundColor = "#ffffff";
  document.querySelector("#mouth").style.backgroundColor = "#ffffff";
  document.querySelector("#eyebrow").style.backgroundColor = "#FFC247";
  document.querySelector("#hotspotEyebrow").classList.remove("hide");
  document.querySelector("#hotspotEyes").classList.add("hide");
  document.querySelector("#hotspotMouth").classList.add("hide");
  document.querySelector("#info-h2").innerHTML = "Øjenbryn";
  document.querySelector("#info-p").innerHTML =
    "Øjenbrynene er som to ambitiøse teleskoplifte. I hvile ligger de i en selvsikker “jeg har læst tre artikler”-neutral; ved “faktisk” og “teknisk set” skyder de op som champagnepropper. Højre bryn dirigerer definitioner, venstre kalder analogier ingen bestilte. Når de passerer hårgrænsen, uddeles uofficielle ECTS-point, og alt lyder som en improviseret TED-talk. Det mest effektive angreb er Bryn-spejlet™: Hæv dine egne bryn en millimeter mere end hans, nik professionelt, og sig tørt: “Vi kalibrerer lige brynhøjden, så kilderne passer.” Pludselig handler det ikke om dig, men om hans to små sceneteknikere, der arbejder overtid; gravitasen fordamper, og publikum ser forestillingen i stedet for at høre foredraget.";
  document.querySelector("#effekt").innerHTML =
    "Angrebets effektivitet ligger i, at det afvæbner uden at angribe personen—kun koreografien. Angrebet fungerer som en sikkerhedsnål i en for oppustet ballon: pft, og alvoren daler.";
  document.querySelector("#styrke").innerHTML =
    "Styrken er selvjustits: Mange opdager midt i seancen, at brynene står i Mont Blanc-position, og skruer instinktivt ned.";
}

document.querySelector("#eyes").addEventListener("click", eyesF);

function eyesF() {
  console.log("eyes function loaded");
  document.querySelector("#eyes").style.backgroundColor = "#FFC247";
  document.querySelector("#mouth").style.backgroundColor = "#ffffff";
  document.querySelector("#eyebrow").style.backgroundColor = "#ffffff";
  document.querySelector("#hotspotEyes").classList.remove("hide");
  document.querySelector("#hotspotEyebrow").classList.add("hide");
  document.querySelector("#hotspotMouth").classList.add("hide");
  document.querySelector("#info-h2").innerHTML = "Øjne";
  document.querySelector("#info-p").innerHTML =
    "Mansplainerens øjne står altid i forrulle-position: blankpolerede kuglelejer, der kan lave fuld 360° ved første “jeg ser det anderledes”. I hvile blinker de med en “jeg ved nok bedre”-glans; ved modspørgsmål begynder iris at varme op som en kontorstol, der er klar til at dreje. Det mest effektive, høfligt-drilske modtræk er Rullefangeren™: Når øjnene begynder at rulle, følger du dem roligt med dit eget blik – helt bogstaveligt – og kommenterer klinisk venligt: “Fantastisk rotation, ligger vi på 8.000 rpm?” eller “Jeg ser, supporthjulene er i gang.” Afslut med et hjælpsomt: “Skal jeg holde hovedet stille, så dine øjne kan få en lige landingsbane?” Pludselig er det ikke din pointe, men hans øjen-gimbal, der er i spotlight.";
  document.querySelector("#effekt").innerHTML =
    "Effektiviteten er høj, fordi du udstiller selve mekanikken. Det afvæbner og skruer ned for gravitas og gør ham bevidst om hvor meget centrifuge der er i gang.";
  document.querySelector("#styrke").innerHTML =
    "Styrkerne? Du flytter spotlightet fra personen til mekanikken—rullen bliver punchline, ikke du. Det er høflig ninja-teknik: ingen konfrontation, bare et tørt observationsstik, der får centrifugen til at sænke farten af sig selv.";
}

document.querySelector("#mouth").addEventListener("click", mouthF);

function mouthF() {
  console.log("mouth function loaded");
  document.querySelector("#eyes").style.backgroundColor = "#ffffff";
  document.querySelector("#mouth").style.backgroundColor = "#FFC247";
  document.querySelector("#eyebrow").style.backgroundColor = "#ffffff";
  document.querySelector("#hotspotMouth").classList.remove("hide");
  document.querySelector("#hotspotEyes").classList.add("hide");
  document.querySelector("#hotspotEyebrow").classList.add("hide");
  document.querySelector("#info-h2").innerHTML = "Mund";
  document.querySelector("#info-p").innerHTML =
    "Mansplainerens mund er som en automat for “faktisk”-karameller: altid klar med en mønt i sprækken og en klaplyd i købet. I hvile står den i “forberedende afsnit”-position—læberne formet til at slippe en definition, hjørnerne spændt som to faldskærme, der bare venter på stikordet “nu skal du høre.” Det mest effektive, høfligt drilske modtræk er Undertekst-tricket™: Du kigger venligt på munden, nikker seriøst og leverer tørre “undertekster” i realtid—en halv takt efter ham—med lav stemme: “(Indsætter uopfordret kontekst) … (indsætter analogi ingen bestilte) … (konklusion i versaler).”";
  document.querySelector("#effekt").innerHTML =
    "Effektiviteten ligger i, at humoren afmonterer uden at ydmyge. Du angriber ikke personen—kun teaterstykket, munden opfører.";
  document.querySelector("#styrke").innerHTML =
    "Styrken ved Undertekst-tricket™ er, at det prikker ballonen uden at prikke personen. Det er høflig satire: ingen skænderier, bare et lille grin, der tømmer munden for unødvendig gravitas. Bonus: Han hører pludselig sine egne replikker med rulletekst og skruer frivilligt ned—selvjustits på lydløs.";
}
