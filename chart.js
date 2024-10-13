var vg_1 = "Visualisations/cigaretteTax.vg.json";
vegaEmbed("#map1", vg_1).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

var vg_2 = "Visualisations/smokingPrevelance.vg.json";
vegaEmbed("#map2", vg_2).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

var vg_3 = "Visualisations/cigarettePrice.vg.json";
vegaEmbed("#Line_chart1", vg_3).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

var vg_4 = "Visualisations/lungCancer_deaths.vg.json";
vegaEmbed("#lung_cancer_map", vg_4).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

var vg_5 = "Visualisations/australia_smokers.vg.json";
vegaEmbed("#aus_smokers", vg_5).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);


fetch("https://raw.githubusercontent.com/Fuller9029/DataViz2/main/Data/World%20Tax%20Cigarettes.csv")
    .then(response => response.text())
    .then(data => {
        console.log(data);  // Check the output in the browser console
    })
    .catch(console.error);
