const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {

  var { value, initial_measure, final_measure } = req.body;
  
  initial_measure = initial_measure.toLowerCase();
  final_measure = final_measure.toLowerCase();

  let result = 0;
  let invalid_measure = "";
  
  switch (initial_measure) {

    case "km":
      switch (final_measure) {
        case "m":
          result = Number((value * 1000).toFixed(2));
          break;

        case "cm":
          result = Number((value * 100000).toFixed(2));
          break;

        case "mm":
          result = Number((value * 1000000).toFixed(2));
          break;

        case "milha":
          result = Number((value / 1.609).toFixed(2));
          break;

        case "jarda":
          result = Number((value * 1094).toFixed(2));
          break;

        case "pé":
          result = Number((value * 3281).toFixed(2));
          break;

        case "polegada":
          result = Number((value * 39370).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "m":
      switch (final_measure) {
        case "km":
          result = Number((value / 1000).toFixed(2));
          break;

        case "cm":
          result = Number((value * 100).toFixed(2));
          break;

        case "mm":
          result = Number((value * 1000).toFixed(2));
          break;

        case "milha":
          result = Number((value / 1609).toFixed(2));
          break;

        case "jarda":
          result = Number((value * 1.094).toFixed(2));
          break;

        case "pé":
          result = Number((value * 3.281).toFixed(2));
          break;

        case "polegada":
          result = Number((value * 39.37).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "cm":
      switch (final_measure) {
        case "km":
          result = Number((value / 100000).toFixed(2));
          break;

        case "m":
          result = Number((value / 100).toFixed(2));
          break;

        case "mm":
          result = Number((value * 10).toFixed(2));
          break;

        case "milha":
          result = Number((value / 160900).toFixed(2));
          break;

        case "jarda":
          result = Number((value / 91.44).toFixed(2));
          break;

        case "pé":
          result = Number((value / 30.48).toFixed(2));
          break;

        case "polegada":
          result = Number((value / 2.54).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "mm":
      switch (final_measure) {
        case "km":
          result = Number((value / 1000000).toFixed(2));
          break;

        case "m":
          result = Number((value / 1000).toFixed(2));
          break;

        case "cm":
          result = Number((value / 10).toFixed(2));
          break;

        case "milha":
          result = Number((value / 0.000000621371).toFixed(2));
          break;

        case "jarda":
          result = Number((value / 914.4).toFixed(2));
          break;

        case "pé":
          result = Number((value / 304.8).toFixed(2));
          break;

        case "polegada":
          result = Number((value / 25.4).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "milha":
      switch (final_measure) {
        case "km":
          result = Number((value * 1.609).toFixed(2));
          break;

        case "m":
          result = Number((value * 1609).toFixed(2));
          break;

        case "cm":
          result = Number((value * 160900).toFixed(2));
          break;

        case "mm":
          result = Number((value * 1609000).toFixed(2));
          break;

        case "jarda":
          result = Number((value * 1760).toFixed(2));
          break;

        case "pé":
          result = Number((value * 5280).toFixed(2));
          break;

        case "polegada":
          result = Number((value * 63360).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "jarda":
      switch (final_measure) {
        case "km":
          result = Number((value / 1094).toFixed(2));
          break;

        case "m":
          result = Number((value / 1.094).toFixed(2));
          break;

        case "cm":
          result = Number((value * 91.44).toFixed(2));
          break;

        case "mm":
          result = Number((value * 914.4).toFixed(2));
          break;

        case "milha":
          result = Number((value / 1760).toFixed(2));
          break;

        case "pé":
          result = Number((value * 3).toFixed(2));
          break;

        case "polegada":
          result = Number((value * 36).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "pé":
      switch (final_measure) {
        case "km":
          result = Number((value / 3281).toFixed(2));
          break;

        case "m":
          result = Number((value / 3.281).toFixed(2));
          break;

        case "cm":
          result = Number((value * 30.48).toFixed(2));
          break;

        case "mm":
          result = Number((value * 304.8).toFixed(2));
          break;

        case "milha":
          result = Number((value / 5280).toFixed(2));
          break;

        case "jarda":
          result = Number((value / 3).toFixed(2));
          break;

        case "polegada":
          result = Number((value * 12).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    case "polegada":
      switch (final_measure) {
        case "km":
          result = Number((value / 39370).toFixed(2));
          break;

        case "m":
          result = Number((value / 39.37).toFixed(2));
          break;

        case "cm":
          result = Number((value * 2.54).toFixed(2));
          break;

        case "mm":
          result = Number((value * 25.4).toFixed(2));
          break;

        case "milha":
          result = Number((value / 63360).toFixed(2));
          break;

        case "jarda":
          result = Number((value / 36).toFixed(2));
          break;

        case "pé":
          result = Number((value / 12).toFixed(2));
          break;

        default:
          result = value;
          invalid_measure = "final_measure";
          break;
      }
      break;

    default:
      result = value;
      invalid_measure = "initial_measure";
  }

  if (result == value) {
    return res.status(404).json({ error: `A ${invalid_measure} informada é inválida` });
  }

  return res.status(200).json( { result } );
})

module.exports = router;