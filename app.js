const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const path = require('path')
const jsonParser = bodyParser.json()
const fs = require("fs");

app.use('/', express.static(path.join(__dirname, 'public')))

app.post("/update", jsonParser, (req, res) => {
  console.log("Updating the online inventory system");
  const body = JSON.stringify(req.body);

  fs.writeFile("./public/productDB.json", body, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  
    console.log("data.json written correctly");
  });

  res.send("Updating the online inventory system");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

app.post("/updatePurchaseOrder", jsonParser, (req, res) => {
  console.log("Updating the online inventory system");
  const body = JSON.stringify(req.body);

  fs.readFile("./public/purchaseOrderDB.json", (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error reading purchase order data");
          return;
      }

      let purchaseOrders = JSON.parse(data);
      purchaseOrders.push(req.body);

      fs.writeFile("./public/purchaseOrderDB.json", JSON.stringify(purchaseOrders), (error) => {
          if (error) {
              console.error(error);
              res.status(500).send("Error writing purchase order data");
              return;
          }

          console.log("purchaseOrderDB.json updated successfully");
          res.status(200).send("Purchase order added successfully");
      });
  });
});
