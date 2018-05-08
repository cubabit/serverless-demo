const express = require("express");
const DateTime = require("luxon").DateTime;

const app = express();

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");

  res.json({
    countries: [
      "Austria",
      "Belgium",
      "Bulgaria",
      "Croatia",
      "Republic of Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Ireland",
      "Italy",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Netherlands",
      "Poland",
      "Portugal",
      "Romania",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "UK"
    ],
    asOf: DateTime.local().toISO()
  });
});

app.get("/ex-countries", (req, res) => {
  res.header("Content-Type", "application/json");

  res.json({
    exCountries: []
  });
});

app.listen(process.env.PORT);