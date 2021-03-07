/* const { doc } = require("prettier"); */

window.onload = function () {
  // download csv data file
  /* function onStartedDownload(id) {
        console.log(`Started downloading: ${id}`);
      }
    
      function onFailed(error) {
        console.log(`Download failed: ${error}`);
      }
    
      var downloadUrl =
        "https://download.data.public.lu/resources/donnees-covid19/20210219-165227/datapublic-covid19.csv";
    
      var downloading = browser.downloads.download({
        url: downloadUrl,
        filename: "data.csv",
      });
    
      downloading.then(onStartedDownload, onFailed); */

  // pharmacies
  const des3cantons = {
    "name": "Pharmacie des 3 cantons",
    "commune": "Schouweiler",
    "address": "88 Route de Longwy, L-4994 Luxembourg",
    "number": "+352 54 03 44",
    "times": "Mon-Fri: 08:30 - 18:30",
  };
  const arboria = {
    "name": "Pharmacie Arboria",
    "commune": "Differdange",
    "address": "1, Place Marie-Paule Molitor-Peffer, L-4549 Differdange",
    "number": "+352 24 55 88 61",
    "times": "Mon: 13:30 - 18:30 | Tue-Fri: 09:30 - 18:30 | Sat: 09:00 - 17:00",
  };
  const deBeaufort = {
    "name": "Pharmacie de Beaufort",
    "commune": "Beaufort",
    "address": "84, Grand-Rue, L-6310 Beaufort",
    "number": "+352 26 87 66 60",
    "times": "Mon-Fri: 08:30 - 12:30, 14:00 - 18:30 | Sat: 09:00 - 12:00",
  };
  const deBelair = {
    "name": "Pharmacie de Belair",
    "commune": "Luxembourg",
    "address": "14, avenue du X Septembre, L-2550 Luxembourg",
    "number": "+352 44 47 50",
    "times": "Mon-Fri: 08:15 - 18:30 | Sat: 09:00 - 12:30",
  };
  const deBelval = {
    "name": "Pharmacie de Belval",
    "commune": "Sanem",
    "address": "9, Avenue du Blues, L-4368 Belvaux",
    "number": "+352 24 55 99 48",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 09:00 - 13:00",
  };
  const deBelvaux = {
    "name": "Pharmacie de Belvaux",
    "commune": "Belvaux",
    "address": "143, route d’Esch, L-4450 Belvaux",
    "number": "+352 26 59 13 54",
    "times": "Mon-Fri: 08:00 - 12:00, 14:00 - 18:30",
  };
  const duBenelux = {
    "name": "Pharmacie du Benelux",
    "commune": "Esch-sur-Alzette",
    "address": "9, place Benelux, L-4027 Esch-sur-Alzette",
    "number": "+352 55 28 16",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 08:30 - 12:30",
  };
  const deBertrange = {
    "name": "Pharmacie de Bertrange",
    "commune": "Bertrange",
    "address": "10, rue de Luxembourg, L-8077 Bertrange",
    "number": "+352 31 64 46",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 08:30 - 12:30",
  };
  const deBonnevoie = {
    "name": "Pharmacie de Bonnevoie",
    "commune": "Luxembourg",
    "address": "123, rue de Bonnevoie, L-1261 Luxembourg",
    "number": "+352 48 24 58",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 08:30 - 12:00",
  };
  const duBridel = {
    "name": "Pharmacie du Bridel",
    "commune": "Bridel",
    "address": "2, rue de l’Ecole, L-8128 Bridel",
    "number": "+352 33 93 73",
    "times": "Mon-Fri: 09:00 - 12:30, 13:30 - 19:00 | Sat: 09:00 - 12:30",
  };
  const deCapellen = {
    "name": "Pharmacie de Capellen",
    "commune": "Capellen",
    "address": "17, rue du Kiem, L-8328 Capellen",
    "number": "+352 30 03 57",
    "times": "Mon-Fri: 08:30 - 18:30",
  };
  const duCedre = {
    "name": "Pharmacie du Cèdre",
    "commune": "Luxembourg",
    "address": "159, rue de Beggen, L-1221 Luxembourg",
    "number": "+352 26 00 83 01",
    "times": "Mon-Fri: 08:00 - 19:00 | Sat: 08:00 - 13:00",
  };
  const CentraleDeMersch = {
    "name": "Pharmacie Centrale de Mersch",
    "commune": "Mersch",
    "address": "18, place St Michel, L-7556 Mersch",
    "number": "+352 32 01 66",
    "times": "Mon-Fri: 08:00 - 18:00 | Sat: 08:30 - 12:30",
  };
  const duCentre = {
    "name": "Pharmacie du Centre",
    "commune": "Mamer",
    "address": "23-25, rue du Commerce, L-8220 Mamer",
    "number": "+352 26 17 71 1",
    "times":
      "Mon: 14:00 - 18:30 | Tue-Fri: 09:00 - 12:30, 14:00 - 18:30 | Sat: 09:00 - 12:00",
  };
  const duCents = {
    "name": "Pharmacie du Cents",
    "commune": "Luxembourg",
    "address": "5, allée du Carmel, L-1354 Luxembourg",
    "number": "+352 26 68 48 01",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 08:30 - 12:00",
  };
  const duCerf = {
    "name": "Pharmacie du Cerf",
    "commune": "Mersch",
    "address": "Centre Marisca, L-7560 Mersch",
    "number": "+352 32 00 07",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 08:30 - 12:00",
  };
  const duChateau = {
    "name": "Pharmacie du Château",
    "commune": "Differdange",
    "address": "17, Avenue Charlotte L-4530 Differdange",
    "number": "+352 58 83 09",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 09:00 - 12:30",
  };
  const Christnach = {
    "name": "Pharmacie Christnach",
    "commune": "Luxembourg",
    "address": "145, Avenue du X Septembre L-2551 Luxembourg",
    "number": "+352 44 67 12",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 09:00 - 12:30",
  };
  const deClausen = {
    "name": "Pharmacie de Clausen",
    "commune": "Luxembourg",
    "address": "53, rue de Clausen L-1342 Luxembourg",
    "number": "+352 43 32 61",
    "times": "Mon-Fri: 08:30 - 18:00 | Sat: 08:30 - 12:00",
  };
  const deClervaux = {
    "name": "Pharmacie de Clervaux",
    "commune": "Marnach",
    "address": "1, Marburgestrooss, L-9765 Marnach",
    "number": "+352 92 10 15",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 08:30 - 15:00",
  };
  const deLaClocheDor = {
    "name": "Pharmacie de la Cloche d'Or",
    "commune": "Luxembourg",
    "address": "Luxembourg 4-6, rue Charles Darwin L-1433 Luxembourg",
    "number": "+352 28 12 66 1",
    "times": "Mon-Fri: 09:00 - 18:30 | Sat: 09:00 - 12:00",
  };
  const deColmarBerg = {
    "name": "Pharmacie de Colmar-Berg",
    "commune": "Colmar-Berg",
    "address": "35, avenue Gordon Smith L-7740 Colmar-Berg",
    "number": "+352 26 88 51 76",
    "times": "Mon-Fri: 07:45 - 18:30 | 08:00 - 12:00",
  };
  const duCygne = {
    "name": "Pharmacie du Cygne",
    "commune": "Luxembourg",
    "address": "11, Avenue de la Porte-Neuve L-2227 Luxembourg",
    "number": "+352 22 23 14",
    "times": "Mon: 09:30 - 18:30 | Tue-Fri: 07:45 - 18:30 | Sat: 07:45 - 17:45",
  };
  const FleurDeVie = {
    "name": "Pharmacie Fleur de Vie",
    "commune": "Esch-sur-Alzette",
    "address": "29, rue de Moedling L-4246 Esch-sur-Alzette",
    "number": "+352 54 92 88",
    "times": "Mon-Fri: 08:00 - 19:00 | Sat: 09:00 - 19:00",
  };
  const Fousbann = {
    "name": "Pharmacie Fousbann",
    "commune": "Differdange",
    "address": "2, rue Batty Weber L-4684 Differdange",
    "number": "+352 58 82 28",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 08:30 - 12:30",
  };
  const deFrisange = {
    "name": "Pharmacie de Frisange",
    "commune": "Frisange",
    "address": "2A, Letzebuergerstrooss L-5752 Frisange",
    "number": "+352 23 66 21 1",
    "times": "Mon-Fri: 08:30 - 12:30, 13:30 - 19:00 | Sat: 08:30 - 12:30",
  };
  const deGasperich = {
    "name": "Pharmacie de Gasperich",
    "commune": "Luxembourg",
    "address": "20, rue de Gasperich L-1617 Luxembourg",
    "number": "+352 48 16 11",
    "times": "Mon-Fri: 08:30 - 12:30 | Sat: 08:30 - 12:30",
  };
  const Gillan = {
    "name": "Pharmacie Gillan",
    "commune": "Dudelange",
    "address": "2, rue de Commerce L-3450 Dudelange",
    "number": "+352 51 15 40",
    "times": "Mon-Fri: 08:00 - 19:00 | Sat: 08:00 - 12:00",
  };
  const Ginkgo = {
    "name": "Pharmacie Ginkgo",
    "commune": "Luxembourg",
    "address": "3, Val Ste-Croix L-1371 Luxembourg",
    "number": "+352 22 21 74",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 08:30 - 12:30",
  };
  const duGlobe = {
    "name": "Pharmacie du Globe",
    "commune": "Luxembourg",
    "address": "16, place de la Gare L-1616 Luxembourg",
    "number": "+352 48 70 09",
    "times": "Mon-Fri: 07:00 - 20:00 | Sat: 09:00 - 19:00",
  };
  const Goedert = {
    "name": "Pharmacie Goedert",
    "commune": "Luxembourg",
    "address": "32, Grand-Rue L-1660 Luxembourg",
    "number": "+352 22 23 99 1",
    "times": "Mon-Fri: 08:00 - 18:15 | Sat: 08:00 - 18:00",
  };
  const deGrevenmacher = {
    "name": "Pharmacie de Grevenmacher",
    "commune": "Grevenmacher",
    "address": "19, Route de Trèves, L-6793 Grevenmacher",
    "number": "+352 75 00 28",
    "times": "Mon-Fri: 08:30 - 12:15, 13:15 - 18:30 | Sat: 08:30 - 12:30",
  };
  const deGrosbous = {
    "name": "Pharmacie de Grosbous",
    "commune": "Grosbous",
    "address": "20, Rue d’Arlon L-9155 Grosbous",
    "number": "+352 26 88 06 41",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 08:00 - 12:30",
  };
  const Grotenrath = {
    "name": "Pharmacie Grotenrath",
    "commune": "Wiltz",
    "address": "25, rue des Tondeurs L-9570 Wiltz",
    "number": "+352 95 70 76",
    "times": "Mon-Fri: 08:00 - 20:00 | Sat: 08:00 - 13:00",
  };
  const Hamilius = {
    "name": "Pharmacie Hamilius",
    "commune": "Luxembourg",
    "address": "23, rue Aldringen L-1118 Luxembourg",
    "number": "+352 26 20 17 18",
    "times": "Mon-Fri: 07:30 - 18:30 | Sat: 08:30 - 13:00, 13:30 - 18:00",
  };
  const deHosingen = {
    "name": "Pharmacie de Hosingen",
    "commune": "Hosingen",
    "address": "2A, ZAC Happerfeld L-9806 Hosingen",
    "number": "+352 92 03 80",
    "times": "Mon-Fri: 08:30 - 16:30 | Sat: 08:30 - 12:30",
  };
  const Hubscher = {
    "name": "Pharmacie Hübscher",
    "commune": "Luxembourg",
    "address": "50, Rue de Mühlenbach L-2168 Luxembourg",
    "number": "+352 43 16 09",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 08:30 - 12:30",
  };
  const deJunglinster = {
    "name": "Pharmacie de Junglinster",
    "commune": "Junglinster",
    "address": "4, Iernzwe L-6129Junglinster L-6129 Junglinster",
    "number": "+352 78 00 25 1",
    "times": "Mon-Fri: 08:30 - 12:30, 13:30 - 18:30 | Sat: 08:30 - 12:00",
  };
  const deKayl = {
    "name": "Pharmacie de Kayl",
    "commune": "Kayl",
    "address": "31, rue Neuve L-3781 Tétange",
    "number": "+352 26 56 19 19",
    "times": "Mon-Fri: 08:30 - 12:00, 14:00 - 18:30",
  };
  const deKehlen = {
    "name": "Pharmacie de Kehlen",
    "commune": "Kehlen",
    "address": "2a, rue de Nospelt L-8283 Kehlen",
    "number": "+352 26 30 44 1",
    "times": "Mon-Fri: 08:30 - 12:15, 13:45 - 18:00 | Sat: 08:30 - 12:00",
  };
  const deKirchberg = {
    "name": "Pharmacie de Kirchberg",
    "commune": "Luxembourg",
    "address": "13, rue Edward Steichen L-2540 Luxembourg",
    "number": "+352 45 22 04 1",
    "times": "Mon-Fri: 09:00 - 18:30",
  };
  const deLAigle = {
    "name": "Pharmacie de l'Aigle",
    "commune": "Wiltz",
    "address": "32, Grande-rue L-9530 Wiltz",
    "number": "+352 95 80 20",
    "times": "Mon-Fri: 08:00 - 20:00 | Sat: 08:00 - 13:00",
  };
  const deLElephant = {
    "name": "Pharmacie de l'Eléphant",
    "commune": "Howald",
    "address": "4, Rue Joseph Felten L-1508 Howald",
    "number": "+352 29 75 95",
    "times": "Mon-Fri: 08:00 - 19:00 | Sat: 08:30 - 12:30",
  };
  const deLallange = {
    "name": "Pharmacie de Lallange",
    "commune": "Esch-sur-Alzette",
    "address": "156, rue de Luxembourg L-4222 Esch-sur-Alzette",
    "number": "+352 55 24 42",
    "times": "Mon-Fri: 08:00 - 12:30, 13:30 - 18:30 | Sat: 08:00 - 12:00",
  };
  const deLamadelaine = {
    "name": "Pharmacie de Lamadelaine",
    "commune": "Lamadelaine",
    "address": "18, rue de la Providence L-4885 Lamadelaine",
    "number": "+352 26 65 85 1",
    "times": "Mon-Fri: 08:00 - 12:15, 13:30 - 18:30 | Sat: 09:00 - 12:30",
  };
  const deLarochette = {
    "name": "Pharmacie de Larochette",
    "commune": "Lamadelaine",
    "address": "7, rue de Medernach L-7619 Larochette",
    "number": "+352 83 70 18",
    "times": "Mon-Fri: 08:30 - 12:00, 14:00 - 18:30 | Sat: 08:30 - 12:00",
  };
  const deLaLiberte = {
    "name": "Pharmacie de la Liberté",
    "commune": "Luxembourg",
    "address": "48, avenue de la Liberté L-1930 Luxembourg",
    "number": "+352 48 84 08",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 09:00 - 17:00",
  };
  const deLimpertsberg = {
    "name": "Pharmacie de Limpertsberg",
    "commune": "Luxembourg",
    "address": "1, avenue Victor Hugo L-1750 Luxembourg",
    "number": "+352 22 72 84",
    "times":
      "Mon-Tue, Thur-Fri: 08:00 - 12:15, 13:45 - 18:00 | Wed: 08:00 - 12:15 | Sat: 08:30 - 12:00",
  };
  const duLion = {
    "name": "Pharmacie du Lion",
    "commune": "Echternach",
    "address": "12, Place du Marché L-6460 Echternach",
    "number": "+352 72 00 27",
    "times": "Mon-Fri: 08:30 - 12:30, 13:30 - 18:30 | Sat: 08:30 - 12:30",
  };
  const Lugen = {
    "name": "Pharmacie Lugen",
    "commune": "Luxembourg",
    "address": "18, avenue de la Gare L-1610 Luxembourg",
    "number": "+352 48 83 67 1",
    "times": "Mon-Fri: 08:00 - 18:30 | Sat: 09:00 - 12:30, 13:30 - 18:00",
  };
  const Maitry = {
    "name": "Pharmacie Maitry",
    "commune": "Esch-sur-Alzette",
    "address": "114, rue de l’Alzette L-4010 Esch-sur-Alzette",
    "number": "+352 54 20 78",
    "times": "Mon-Fri: 08:30 - 12:30, 13:30 - 18:00 | Sat: 09:00 - 17:00",
  };
  const Martens = {
    "name": "Pharmacie Martens",
    "commune": "Dudelange",
    "address": "25, avenue Grande-Duchesse Charlotte L-3441 Dudelange",
    "number": "+352 51 95 55",
    "times": "Mon-Fri: 08:30 - 12:15, 13:45 - 18:45 | Sat: 09:00 - 12:30",
  };
  const MergenRommes = {
    "name": "Pharmacie Mergen Rommes",
    "commune": "Diekrich",
    "address": "1, rue St. Antoine L-9205 Diekirch",
    "number": "+352 80 35 85",
    "times":
      "Mon-Fri: 08:00 - 12:00. 13:15 - 18:30 | Sat: 08:00 - 12;00, 13:15 - 17:00",
  };
  const deMondercange = {
    "name": "Pharmacie de Mondercange",
    "commune": "Mondercange",
    "address": "2, Grand-Rue L-3926 Mondercange",
    "number": "+352 57 37 76",
    "times":
      "Mon-Tue, Thur-Fri: 08:15 - 12:30, 13:30 - 18:30 | Wed: 08:15 - 12:30 | Sat: 08:15 - 12:30",
  };
  const deMondorf = {
    "name": "Pharmacie de Mondorf",
    "commune": "Mondorf-les-Bains",
    "address": "45, avenue François Clément L-5612 Mondorf-les-Bains",
    "number": "+352 26 67 60 1",
    "times": "Mon-Fri: 08:15 - 18:15 | Sat: 08:15 - 12:15",
  };
  const deLaMoselle = {
    "name": "Pharmacie de la Moselle",
    "commune": "Mertert",
    "address": "51, route de Wasserbillig L-6686 Mertert",
    "number": "+352 26 71 44 83",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 08:30 - 12:30",
  };
  const Neiens = {
    "name": "Pharmacie Neiens",
    "commune": "Rodange",
    "address": "40, route de Longwy L-4830 Rodange",
    "number": "+352 50 73 80",
    "times": "Mon-Fri: 08:00 - 12:15, 13:30 - 18:30 | Sat: 08:00 - 12:00",
  };
  const deNiederanven = {
    "name": "Pharmacie de Niederanven",
    "commune": "Niederanven",
    "address": "77, rue Laach L-6945 Niederanven",
    "number": "+352 34 87 48",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 09:00 - 13:00",
  };
  const deStrassen = {
    "name": "Pharmacie de Strassen",
    "commune": "Strassen",
    "address": "76, rue des Romains L-8041 Strassen",
    "number": "+352 31 24 77",
    "times": "Mon-Fri: 08:30 - 18:30 | Sat: 08:30 - 12:15",
  };
  const pharmacies = [
    des3cantons,
    arboria,
    deBeaufort,
    deBelair,
    deBelval,
    deBelvaux,
    duBenelux,
    deBertrange,
    deBonnevoie,
    duBridel,
    deCapellen,
    duCedre,
    CentraleDeMersch,
    duCentre,
    duCents,
    duCerf,
    duChateau,
    Christnach,
    deClausen,
    deClervaux,
    deLaClocheDor,
    deColmarBerg,
    duCygne,
    FleurDeVie,
    Fousbann,
    deFrisange,
    deGasperich,
    Gillan,
    Ginkgo,
    duGlobe,
    Goedert,
    deGrevenmacher,
    deGrosbous,
    Grotenrath,
    Hamilius,
    deHosingen,
    Hubscher,
    deJunglinster,
    deKayl,
    deKehlen,
    deKirchberg,
    deLAigle,
    deLElephant,
    deLallange,
    deLamadelaine,
    deLarochette,
    deLaLiberte,
    deLimpertsberg,
    duLion,
    Lugen,
    Maitry,
    Martens,
    MergenRommes,
    deMondercange,
    deMondorf,
    deLaMoselle,
    Neiens,
    deNiederanven,
    deStrassen,
  ];

  // LUIS app info <-- before deploying make .ENV variable
  // german url
  const baseUrl =
    "https://westus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/2ee1e3d0-9b55-42bf-ac49-ad82ee0de922/slots/production/predict?subscription-key=555f8d82328c4797bd152dc634703fc0&verbose=true&show-all-intents=true&log=true&query=";

  const input = document.getElementById("input");
  const search = document.getElementById("search");
  const response = document.getElementById("response");
  const listFacilities = document.getElementById("list-facilities");
  response.style.opacity = "0";

  ///////////////////////

  const casesAgo = document.getElementById("cases-ago");
  const covidSymptoms = document.getElementById("symptoms");
  const vaccineInformation = document.getElementById("vaccine-information");
  // suggestions functionality
  casesAgo.addEventListener("click", () => {
    input.value = "neue Fälle vor 4 Tagen";
    handleSearch();
  });
  covidSymptoms.addEventListener("click", () => {
    input.value = "COVID-Symptome";
    handleSearch();
  });
  vaccineInformation.addEventListener("click", () => {
    input.value = "Impfstoff-Informationen";
    handleSearch();
  });

  // highlight search text on click
  input.addEventListener("click", () => {
    input.select();
  });

  // event listeners for search
  search.addEventListener("click", () => {
    handleSearch();
  });
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      handleSearch();
    }
  });

  async function handleSearch() {
    // emptying facilities list div
    listFacilities.innerHTML = "";
    // blur search field
    input.blur();
    // obtaining search field input
    let query = input.value;
    // checking if empty or contains spaces only
    if (query.length && query.trim().length) {
      // loading animation + making response div visible
      response.innerHTML =
        '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
      response.style.opacity = "1";
      // get LUIS app response
      const data = await makeRequest(baseUrl + query);

      console.log(data);
      // assigning intent
      const intent = data["prediction"]["topIntent"];
      // calling respective function for handling all separate intents
      if (intent == "find_data") {
        findData(data);
      } else if (intent == "find_facility") {
        findFacility(data);
      } else if (intent == "government_measures") {
        governmentMeasures(data);
      } else if (intent == "symptoms") {
        symptoms(data);
      } else if (intent == "vaccine_info") {
        vaccineInfo(data);
      } else if (intent == "vulnerable") {
        vulernable(data);
      }
      // no intent recognized / none
      else {
        noResponse();
      }
    }
  }

  async function makeRequest(url) {
    // making request to LUIS app
    const response = await fetch(url);
    return response.json();
  }

  // function to convert date into d/m/y format
  function convertDate(date) {
    let day = date.substr(8, 2);
    let month = date.substr(5, 2);
    let year = date.substr(0, 4);
    date = day + "/" + month + "/" + year;
    return date;
  }

  async function findData(data) {
    // parse CSV file
    const CSV = await d3.csv("../data.csv");
    console.log(CSV);
    let entity = data["prediction"]["entities"];
    let date = "";

    // check if date mentioned
    if (entity["datetimeV2"]) {
      date = entity["datetimeV2"][0]["values"][0]["timex"];
      date = convertDate(date);
    }
    // find row in CSV
    var row;
    var status = "n"; // states if date mentioned exists in CSV
    if (date != "") {
      for (var i = 0; i < CSV.length; i++) {
        if (CSV[i]["Date"] == date) {
          row = i;
          status = "y";
        }
      }
    }
    // check entity
    if (entity["standard_care"]) {
      if (status == "y") {
        let stat = CSV[row]["Soins normaux"];
        response.innerHTML =
          stat + " Personen waren auf der Normalstation am " + date;
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["Soins normaux"];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " Personen wurden <b>zuletzt</b> am " +
          latestDate +
          " auf der Normalstation aufgezeichnet";
      }
    } else if (entity["intensive_care"]) {
      if (status == "y") {
        let stat = CSV[row]["Soins intensifs"];
        response.innerHTML =
          stat + " Personen waren auf der Intensivstation am " + date;
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["Soins intensifs"];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " Personen wurden <b>zuletzt</b> am " +
          latestDate +
          " auf der Intensivstation aufgezeichnet";
      }
    } else if (entity["total_deaths"]) {
      if (status == "y") {
        let stat = CSV[row]["[1.NbMorts]"];
        response.innerHTML =
          stat + " Gesamtsterbefälle wurden am " + date + " aufgezeichnet";
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["[1.NbMorts]"];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " Gesamtsterbefälle wurden <b>zuletzt</b> am " +
          latestDate +
          " aufgezeichnet";
      }
    } else if (entity["total_cases"]) {
      if (status == "y") {
        let stat = CSV[row]["Nb de positifs cumul�"];
        response.innerHTML =
          stat +
          " gesamte positive COVID-19 Fälle wurden am " +
          date +
          " aufgezeichnet";
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["Nb de positifs cumul�"];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " gesamte positive COVID-19 Fälle wurden <b>zuletzt</b> am " +
          latestDate +
          " aufgezeichnet";
      }
    } else if (entity["new_cases"]) {
      if (status == "y") {
        let stat = CSV[row]["Nb de positifs"];
        response.innerHTML =
          stat +
          " neue positive COVID-19 Fälle wurden am " +
          date +
          " aufgezeichnet";
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["Nb de positifs"];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " neue positive COVID-19 Fälle wurden <b>zuletzt</b> am " +
          latestDate +
          " aufgezeichnet";
      }
    } else if (entity["new_tests"]) {
      if (status == "y") {
        let stat = CSV[row]["Nb de tests effectu�s"];
        response.innerHTML =
          stat + " neue PCR-Tests wurden am " + date + " durchgeführt";
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["Nb de tests effectu�s"];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " neue PCR-Tests wurden <b>zuletzt</b> am " +
          latestDate +
          " aufgezeichnet";
      }
    } else if (entity["total_tests"]) {
      if (status == "y") {
        let stat = CSV[row]["Nb de tests effectu�s cumul�s"];
        response.innerHTML =
          stat + " gesamte PCR-Tests wurden am " + date + " durchgeführt";
      } else {
        // get latest data
        let latestStat = CSV[CSV.length - 1]["Nb de tests effectu�s cumul�s "];
        let latestDate = CSV[CSV.length - 1]["Date"];
        response.innerHTML =
          latestStat +
          " gesamte PCR-Tests wurden <b>zuletzt</b> am " +
          latestDate +
          " aufgezeichnet";
      }
    } else {
      noResponse();
    }
    response.scrollIntoView();
  }
  function findFacility(data) {
    let entity = data["prediction"]["entities"];
    if (entity["hotline"]) {
      response.innerHTML = `
      Nachfolgend finden Sie die Hotline-Nummern, die Sie von Montag bis Freitag von 8:00 bis 18:00 Uhr und von Samstag bis Sonntag von 10:00 bis 18:00 Uhr verwenden können
          <br><br>
          <b>COVID-19 Gesundheitshilfe</b>
          <br>
          247-65533
          <br><br>
          <b>Large Scale Testing</b>
          <br>
          LUX: 8002 19 19
          <br>
          BEL: 0800 14 3 75
          <br>
          FR: 0805 321 023
          <br>
          DE: 0800 18 09 028
          `;
    } else if (entity["testing_centre"]) {
      // all testing centres
      const testBascharange = {
        "Name": "Testzentrum - Bascharange",
        "Commune": "Käerjeng / Bascharage",
        "Address": "Rue Heierchen L-4940 Bascharage",
      };
      const testEschSurAlzette = {
        "Name": "Testzentrum - Esch-sur-Alzette",
        "Commune": "Raemerich / Esch-sur-Alzette",
        "Address": "Route d’esch L4310 Raemerich",
      };
      const testHosingen = {
        "Name": "Testzentrum - Hosingen",
        "Commune": "Walhausen",
        "Address": "Between Schinkert and “Parc Hosingen” L-9841 Walhausen",
      };
      const testHowald = {
        "Name": "Testzentrum - Howald",
        "Commune": "Howald",
        "Address": "1, rue In Bouler L-1350 Howald",
      };
      const testLuxembourg = {
        "Name": "Testzentrum - Luxembourg / Bouillon (walk-/drive-in)",
        "Commune": "Luxembourg / Hollerich",
        "Address": "Rue de Bouillon L-1248 Luxembourg-Hollerich",
      };
      const testGrevenmacher = {
        "Name": "Testzentrum - Grevenmacher",
        "Commune": "Grevenmacher",
        "Address": "Rue de Machtum L-6753 Grevenmacher",
      };
      const testSchieren = {
        "Name": "Testzentrum - Schieren",
        "Commune": "Schieren",
        "Address": "Route de Luxembourg L-9125 Schieren",
      };
      const testSteinfort = {
        "Name": "Testzentrum - Steinfort",
        "Commune": "Steinfort",
        "Address": "Rue Collart L-8414 Steinfort",
      };
      const testingCentres = [
        testBascharange,
        testEschSurAlzette,
        testHosingen,
        testHowald,
        testLuxembourg,
        testGrevenmacher,
        testSchieren,
        testSteinfort,
      ];
      if (
        // checks if exists
        typeof entity["testing_centre"][1] != "undefined"
      ) {
        response.innerHTML = `
        Wenn Sie von Ihrem Arzt ein ärztliches Rezept für einen COVID-19-Test erhalten haben, können Sie einen COVID-19-Test erhalten, indem Sie einen Termin in einem der Testlabors in Luxemburg (Bionext Lab, Laboratories Ketterhill und Laboratories Réunis) vereinbaren. Eine LST-Einladung kann nicht in einem Prüflabor verwendet werden.
            <br><br>
            Nachfolgend finden Sie eine Liste der Prüflabore in Luxemburg. Klicken Sie einfach auf das Labor, über das Sie weitere Informationen erhalten möchten (um Öffnungszeiten zu ermitteln, einen Termin zu vereinbaren usw.):
            <br><br>
            - <a target='_blank' href='https://www.bionext.lu/de/covid19'>Bionext Lab</a>
            <br>
            - <a target='_blank' href='https://www.ketterthill.lu/de/test-coronavirus.html'>Laboratoires Ketterthill</a>
            <br>
            - <a target='_blank' href='https://www.labo.lu/de/index'>Laboratoires Réunis</a>
            <br>
            - <a target='_blank' href='https://rdv.lns.lu/de/index.html'>LNS-Probeentnahmezentrum (Centre de prélèvement) für COVID-19-Test </a>
            <br>
            - <a target='_blank' href='https://ligue.lu/'>Ligue Médico-Sociale</a> für Kinder zwischen 2 und 6 Jahren. Termine können <a target='_blank' href='https://ligue.lu/home/tracing-reservation-en-ligne-1'>hier</a> vereinbart werden.
            `;
      } else {
        response.innerHTML = `
        Es gibt drei Möglichkeiten, einen COVID-19-Test in Luxemburg zu erhalten:
            <br><br>
            1. Wenn Sie eine <b>Einladung zum Large Scale Testing (LST)</b> erhalten haben, können Sie an einer der LST-Stationen einen COVID-19-Test erhalten. Eine ärztliche Verschreibung <b>kann nicht</b> an einer LST-Station  verwendet werden. <b>Warten Sie nicht</b> auf eine LST-Einladung, wenn Sie den Verdacht haben, COVID-19 zu haben.
            <br><br>
            2. Wenn Sie von <b>Ihrem Arzt ein ärztliches Rezept für einen COVID-19-Test</b> erhalten haben, können Sie einen COVID-19-Test erhalten, indem Sie <b>einen Termin</b> in einem der Testlabors in Luxemburg (Bionext Lab, Laboratories Ketterhill und Laboratories Réunis) vereinbaren. Eine LST-Einladung <b>kann nicht</b> in einem Prüflabor verwendet werden.
            <br><br>
            3. Wenn Sie Symptome von COVID-19 zeigen, aber <b>keine LST-Einladung oder ein ärztliches Rezept für einen COVID-19-Test</b> haben, können Sie ohne Termin zu einem der COVID-19-Beratungszentren gehen, die in Luxemburg-Kirchberg und Esch / Alzette befinden.
            <br><br>
            Weitere Informationen zum Testen in Luxemburg finden Sie <a target='_blank' href='https://covid19.public.lu/de/testing.html'>here</a>. 
            <br><br><hr><br>
            Wenn Sie eine LST-Einladung (Large Scale Testing) erhalten haben, können Sie an einer der LST-Stationen einen COVID-19-Test erhalten. An einer LST-Station kann kein medizinisches Rezept verwendet werden. Warten Sie nicht auf eine LST-Einladung, wenn Sie dies vermuten dass Sie COVID-19 haben können.
            <br><br>
            Nachfolgend finden Sie Informationen zu allen LST-Stationen:
            `;
        for (var i = 0; i < testingCentres.length; i++) {
          var testingCentre = testingCentres[i];
          let content =
            "<div class='testing-centre'><b><h2>" +
            testingCentre["Name"] +
            "</h2></b><br><h3>" +
            testingCentre["Address"] +
            "</h3><br><p>" +
            testingCentre["Commune"] +
            "</p></div>";
          listFacilities.innerHTML += content;
        }
      }
    } else if (entity["pharmacy"]) {
      let communes = [];
      // check if communes mentioned
      if (entity["commune"]) {
        // append all communes to array
        var length = Object.keys(entity["commune"]).length;
        for (var i = 0; i < length; i++) {
          communes.push(entity["commune"][i][0]);
        }
      }
      // emptying and hiding response tab
      response.style.opacity = "0";
      response.innerHTML = "";
      // need to still implement filter for communes>1
      // store number of pharmacies given
      var counter = 0;
      for (var i = 0; i < pharmacies.length; i++) {
        let pharmacy = pharmacies[i];
        // if no communes mentioned
        if (communes.length == 0) {
          let content =
            "<div class='pharmacy'><b><h2>" +
            pharmacy["name"] +
            "</h2></b><br><h3>" +
            pharmacy["address"] +
            "</h3><br><span class='subheader'><b>T</b></span>:<p>" +
            pharmacy["number"] +
            "</p><br><span class='subheader'><b>Öffnungszeit</b></span>:<p>" +
            pharmacy["times"] +
            "</p></div>";
          listFacilities.innerHTML += content;
        } else {
          if (pharmacy["commune"].toLowerCase() == communes[0].toLowerCase()) {
            // update counter
            counter++;
            let content =
              "<div class='pharmacy'><b><h2>" +
              pharmacy["name"] +
              "</h2></b><br><h3>" +
              pharmacy["address"] +
              "</h3><br><span class='subheader'><b>T</b></span>:<p>" +
              pharmacy["number"] +
              "</p><br><span class='subheader'><b>Öffnungszeit</b></span>:<p>" +
              pharmacy["times"] +
              "</p></div>";
            listFacilities.innerHTML += content;
          }
          if (counter == 0) {
            response.style.opacity = "1";
            noResponse();
          }
        }
      }
    } else if (entity["hospitals"]) {
      const hospitalCHL = {
        "name": "Center Hospitalier de Luxembourg (CHL)",
        "address": "4 Rue Nicolas Ernest Barblé, L-1210 Luxembourg",
        "number": "Krankenhaus: +352 44 11 1 | Notaufnahme: +352 4411 2132",
        "times": "Mon-Son: 00:00 - 23:59 für Notfälle",
      };
      const hospitalKirchberg = {
        "name": "Robert Schuman Hospital - Hospital Kirchberg (HK)",
        "address": "9 Rue Edward Steichen, L-2540 Luxembourg",
        "number": "Krankenhaus: +352 24 68 1 | Notaufnahme: +352 2468 5600",
        "times": "Mon-Son: 00:00 - 23:59 für Notfälle",
      };
      const hospitalMayrisch = {
        "name": "Centre Hospitalier Emile Mayrisch",
        "address": "Rue Emile Mayrisch, L-4240 Esch/Alzette",
        "number": "Krankenhaus: +352 57 11 1 | Notaufnahme: +352 5711 73400",
        "times": "Mon-Son: 00:00 - 23:59 für Notfälle",
      };
      const hospitalEttelbruck = {
        "name": "Centre Hospitalier du Nord - Site Ettelbruck",
        "address": "120, Avenue Salentiny, L-9080 Ettelbruck",
        "number": "Krankenhaus: +352 81 66 1 | Notaufnahme: +352 8166 65351",
        "times": "Mon-Son: 00:00 - 23:59 für Notfälle",
      };
      const hospitals = [
        hospitalCHL,
        hospitalKirchberg,
        hospitalMayrisch,
        hospitalEttelbruck,
      ];
      // emptying and hiding response tab
      response.style.opacity = "0";
      response.innerHTML = "";
      for (var i = 0; i < hospitals.length; i++) {
        var hospital = hospitals[i];
        let content =
          "<div class='hospital'><b><h2>" +
          hospital["name"] +
          "</h2></b><br><h3>" +
          hospital["address"] +
          "</h3><br><span class='subheader'><b>T</b></span>:<p>" +
          hospital["number"] +
          "</p><br><span class='subheader'><b>Öffnungszeit</b></span>:<p>" +
          hospital["times"] +
          "</p></div>";
        listFacilities.innerHTML += content;
      }
    } else {
      noResponse();
    }
    response.scrollIntoView();
  }

  function governmentMeasures(data) {
    if (
      data["prediction"]["entities"]["isolation_quarantine_self-monitoring"]
    ) {
      let entity =
        data["prediction"]["entities"][
          "isolation_quarantine_self-monitoring"
        ][0][0];
      if (entity == "isolieren") {
        response.innerHTML = `
        Die Isolation gilt für Personen mit <b>einer bestätigten COVID-19-Infektion</b>.
            <br><br>
            Die Isolierung wird von der Gesundheitsdirektion für mindestens 10 Tage vorgeschrieben, entweder nachdem:
         a) das Einsetzen von Symptomen, oder
         b) der Tag der Probenahme für asymptomatische Fälle.
         <br><br>
         Weitere Informationen finden Sie <a target='_blank' href='https://covid19.public.lu/de/gesundheit-schutz/isolation-quarantaene-behandlung.html'>hier</a>. 
            `;
      } else if (entity == "Quarantäne") {
        response.innerHTML = `
        Die Quarantäne gilt für Personen, die <b>engen Kontakt zu einer Person hatten, die nachweislich infiziert ist</b>. 
            <br><br>
            Engen Kontakt gehören unter anderem: 
            <br>
            - Kontakt von Angesicht zu Angesicht von mehr als 15 Minuten 
            <br>
            - Ungeschützter physischer Kontakt
            <br><br>
            Bei der Quarantäne bleibt man 7 Tage zu Hause, gerechnet ab dem Tag des letzten Kontakts mit der infizierten Person. 
            <br><br>
            Weitere Informationen finden Sie <a target='_blank' href='https://covid19.public.lu/de/gesundheit-schutz/isolation-quarantaene-behandlung.html'>hier  </a>. 
            `;
      } else if (entity == "Selbstüberwachung") {
        response.innerHTML = `
        Die Selbstüberwachung gilt für Personen, die Kontakt mit <b>geringem Ansteckungsrisiko zu einer Person hatten, deren Infektion bestätigt ist</b>.
            <br><br>
            Bei der Selbstüberwachung werden die Symptome 14 Tage lang überprüft, zum Beispiel:
            <br>
            - zweimal täglich Temperatur messen
            <br>
            - Überprüfung auf andere COVID-19 Symptome
            <br><br>
            Weitere Informationen finden Sie <a target='_blank' href='https://covid19.public.lu/de/gesundheit-schutz/isolation-quarantaene-behandlung.html'>hier</a>. 
            `;
      }
    } else if (data["prediction"]["entities"]["sectors_for_measures"]) {
      let entity = data["prediction"]["entities"]["sectors_for_measures"][0][0];
      if (entity == "Menschen") {
        response.innerHTML = `
        Um die Ausbreitung des Coronavirus zu kontrollieren, sollte die Bevölkerung bestimmte Schutzmaßnahmen ergreifen.
            <br><br>
            Schutzmaßnahmen umfassen, ohne darauf beschränkt zu sein, Folgendes:
            <br>
            - eine Maske tragen
            <br>
            - Abstand von mindestens 2 Metern zwischen Personen halten
            <br>
            - Hände regelmäßig und gründlich waschen
            <br><br>
            Weitere Informationen zu Schutzmaßnahmen finden Sie <a href='https://covid19.public.lu/de/gesundheit-schutz/barrieremassnahmen.html' target='_blank'>hier</a>. 
            `;
      } else if (entity == "Krankenhaus") {
        response.innerHTML = `
        Auf <a target='_blank' href='https://covid19.public.lu/de/hygienemassnahmen/krankenhaus-arzt.html'>dieser Website</a> finden Sie Informationen zu allen Präventionsmaßnahmen für Krankenhäuser und Ärzte.
            `;
      } else if (entity == "Ausgangssperre") {
        //weird
        response.innerHTML = `
            Auf <a target='_blank' href='https://covid19.public.lu/de/hygienemassnahmen/ausgangssperre.html'>dieser Website</a> finden Sie Informationen zu allen Maßnahmen für die Ausangssperre.
            `;
      } else if (entity == "public transport") {
        //weird
        response.innerHTML = `
            Auf <a target='_blank' href='https://covid19.public.lu/de/hygienemassnahmen/opnv.html'>dieser Website</a> finden Sie Informationen zu allen Präventionsmaßnahmen für öffentlicher Personennahverkehhr.
            `;
      } else if (entity == "restaurant") {
        response.innerHTML = `
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/sanitary-measures/restaurants-bars.html'>website</a> for information on all sanitary measures that are in place for restaurants, bars, and cafés.
            `;
      } else if (entity == "sports") {
        response.innerHTML = `
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/sanitary-measures/sport-religion-culture.html'>website</a> for information on all sanitary measures that are in place for sports, culture, and leisure activities.
            `;
      } else if (entity == "shops") {
        response.innerHTML = `
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/sanitary-measures/shops.html'>website</a> for information on all sanitary measures that are in place for shops.
            `;
      }
    } else if (data["prediction"]["entities"]["protective_measures"]) {
      response.innerHTML = `
          Sanitary measures have been put in place by the Luxembourg Government for the following sectors / businesses:
          <br><br>
         - Restaurants, bars, and cafes
         <br>
         - Public and private gatherings
         <br>
         - Shops
         <br>
         - Hospitals and physicians
         <br>
         - Sports, religion, and culture events
          <br><br>
        There are also general protective measures that the population should follow.
        <br><br>
        More information can be found <a target='_blank' href='https://covid19.public.lu/en/sanitary-measures.html'>here</a>. 
          `;
    } else {
      noResponse();
    }
    response.scrollIntoView();
  }

  function symptoms(data) {
    if (data["prediction"]["entities"]["symptoms_list"]) {
      let entity = data["prediction"]["entities"]["symptoms_list"][0][0];
      if (entity == "body ache") {
        response.innerHTML = `
            Body aches are a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
            <br><br>
            If you suspect that you may have the coronavirus, you can take a COVID-19 test at one of the following places:
            <br>
              - Without medical prescription - COVID-19 Consultation Centres (CCC)
            <br>
              - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "cough") {
        response.innerHTML = `
            Cough is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
            <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "digestive problems") {
        response.innerHTML = `
            Digestive problems is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:   
    <br>
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "fever") {
        response.innerHTML = `
            Fever is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "headache") {
        response.innerHTML = `
            Headache is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:     
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "incubation") {
        response.innerHTML = `
            The incubation period of the coronavirus is up to 14 days, meaning that symptoms can start to display up to 14 days after infection. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "loss of smell") {
        response.innerHTML = `
            Loss of smell is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "loss of taste") {
        response.innerHTML = `
            Loss of taste is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "shortness of breath") {
        response.innerHTML = `
            Shortness of breath is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "skin rashes") {
        response.innerHTML = `
            Skin rashes is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "sore throat") {
        response.innerHTML = `
            Sore throat is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      } else if (entity == "tiredness") {
        response.innerHTML = `
            Tiredness is a symptom of COVID-19. Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a> for more information on the symptoms of COVID-19.
    <br><br>
    If you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
            `;
      }
    } else if (data["prediction"]["entities"]["check_symptoms"]) {
      response.innerHTML = `
          Symptoms of COVID-19 are:
          <br>
         - Headache
         <br>
         - Fever
         <br>
         - Tiredness
         <br>
         - Loss of smell and / or taste
         <br>
         - Cough
         <br>
         - Sore throat
         <br>
         - Body aches
         <br>
         - Shortness of breath
         <br>
         - Digestive problems (diarrhoea)
         <br>
         - Skin rashes
    <br><br>
    COVID-19 symptoms can appear up to 14 days after infection, and, depending on the individual, can range in severity.
    <br><br>
    If you display any of the above symptoms or you suspect that you may have the coronavirus, avoid contact with others and contact your doctor. You can take a COVID-19 test at one of the following places:
    <br>     
    - Without medical prescription - COVID-19 Consultation Centres (CCC)
    <br>    
    - With medical prescription - Testing laboratories in Luxembourg
    <br><br>
    For more information, please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/symptoms.html'>website</a>.
          `;
    } else {
      noResponse();
    }
    response.scrollIntoView();
  }

  function vaccineInfo(data) {
    response.innerHTML = `
        <b>Vaccination Centre</b>
        <br>
        Hall Victor Hugo
        <br>
        65, Avenue Victor Hugo
        <br>
        1750 Luxembourg
        <br>
        Luxembourg
        <br><br>
        Please note that in order to receive a vaccination <b>you will need a special vaccination invitation</b>. This invitation will be sent by post, and will contain a personalised code to make an appointment <a target='_blank' href='www.covidvaccination.lu'>here</a>.
        <br><br>
        Please also note that in the initial vaccination phase, <b>health officials and the elderly will be prioritised for vaccination</b>. Prioritisation of other categories of people will be decided upon at a later stage, depending on the availability of additional vaccine doses. The vaccination campaign is expected to last for much of 2021. 
        <br><br>
        As the vaccination situation in Luxembourg is constantly changing, please also visit this <a target='_blank' href='https://covid19.public.lu/en/vaccination.html'>website</a> for more information and further updates. 
        `;
    response.scrollIntoView();
  }
  function vulernable(data) {
    if (data["prediction"]["entities"]["vulnerable_list"]) {
      let entity = data["prediction"]["entities"]["vulnerable_list"][0][0];
      if (entity == "cancer") {
        response.innerHTML = `
            If you are suffering from cancer, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information. 
            `;
      } else if (entity == "cardiovascular disease") {
        response.innerHTML = `
            If you are suffering from a cardiovascular disease, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      } else if (entity == "chronic diseases of the respiratory tract") {
        response.innerHTML = `
            If you are suffering from a chronic disease of the respiratory tract, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      } else if (entity == "diabetes") {
        response.innerHTML = `
            If you are suffering from diabetes, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      } else if (entity == "immune deficiency") {
        response.innerHTML = `
            If you are suffering from an immune deficiency due to a condition or therapy, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      } else if (entity == "obesity") {
        response.innerHTML = `
            If you are suffering from morbid obesity, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      } else if (entity == "pregnant") {
        response.innerHTML = `
            If you are pregnant, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      }
    } else if (data["prediction"]["entities"]["am_i_vulnerable"]) {
      if (
        data["prediction"]["entities"]["vulnerable_over_65"] &&
        data["prediction"]["entities"]["age"]
      ) {
        // old entity: over 65
        response.innerHTML = `
            If you are over 65 years old, then you are considered as a vulnerable person. Please stay home, and follow the protective measures.
            <br><br>
            Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
            `;
      } else {
        response.innerHTML = `
          Individuals are considered vulnerable if they are:
          <br>
          - over 65 years old
          <br>
          - pregnant
          <br>
          - suffering from one of the following medical conditions:
              <br>
              - diabetes
              <br>
              - cardiovascular diseases
              <br>
              - chronic diseases of the respiratory tract
              <br>
              - cancer
              <br>
              - an immune deficiency due to a condition or therapy
              <br>
              - morbid obesity
        <br><br>
        If you are consided vulnerable, stay at home and follow the protective measures.
        <br><br>
        Please visit this <a target='_blank' href='https://covid19.public.lu/en/health-protection/vulnerable-persons.html'>website</a> for more information.
          `;
      }
    } else {
      noResponse();
    }
    response.scrollIntoView();
  }

  function noResponse() {
    response.innerHTML =
      "Leider konnten wir nicht finden, wonach Sie gesucht haben.<br><span>🤷‍♂️</span>";
  }
};
