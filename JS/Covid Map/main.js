/**
 * Lets use fetch for getting data
 */
let values = {}; //This will hold the data of all country suitable to map in svgMaps
fetch("https://corona.lmao.ninja/v2/countries")
  .then((response) => response.json())
  .then((data) => {
    //Lets map these data
    data.forEach((d) => {
      let temp = {}; //temporary object to hold a data for a specific country
      temp.total = d.cases;
      temp.deaths = d.deaths;
      temp.recovered = d.recovered;
      temp.active = d.active;
      values[d.countryInfo.iso2] = temp;
    });

    //Now rendering the map
    new svgMap({
      targetElementID: "svgMap",
      data: {
        data: {
          total: {
            name: "Total Cases",
            format: "{0}",
            thousandSeparator: ",",
          },
          deaths: {
            name: "Total Deaths",
            format: "{0}",
            thousandSeparator: ",",
          },
          recovered: {
            name: "Total REcovered",
            format: "{0}",
            thousandSeparator: ",",
          },
          active: {
            name: "Active Cases",
            format: "{0}",
            thousandSeparator: ",",
          },
        },
        applyData: "deaths",
        values: values,
      },
    });
  });
