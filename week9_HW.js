const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "title": {
      "fontSize":20,
      "text":"Bushfire Safer Place South Australia"
    },
    "layer": [
     {
              "data": {
                "url": "https://raw.githubusercontent.com/wwwwAlice/FIT3179week9/refs/heads/main/SAMAP.json", 
                "format": {"type": "topojson", "feature": "australian-states"}
              },
              "mark": {
                "type": "geoshape",
                "fill": "#e0e0e0", 
                "stroke": "gray",
                "strokeWidth": 1
              },
              "encoding": {
                "tooltip": [
                  {"field": "STATE_NAME", "type": "temporal", "title": "State Name"} 
                ]
              }
            },
            {
              "data": {
                "url": "https://raw.githubusercontent.com/wwwwAlice/FIT3179week9/refs/heads/main/BushfireSaferPlaces_GDA.json", 
                "format": {"type": "topojson", "feature": "BushfireSaferPlaces_GDA2020"}
              },
              "mark": {
                "type": "geoshape",
                "fill": "#e0e0e0", 
                "stroke": "red",
                "strokeWidth": 1
              },
              "encoding": {
                "tooltip": [
                  {"field": "STATE_NAME", "type": "nominal", "title": "State Name"} 
                ]
              }
            }
    ]
};
vegaEmbed('#week9_HW', spec).then(result => {
  console.log("Visualization successfully rendered", result);
}).catch(error => {
  console.error("Error rendering visualization:", error);
  alert("Failed to render the visualization. Check console for details.");
});