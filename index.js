const express = require("express");
const conversorRoutes = require("./route");
const app = express();
const port = "8080";

app.listen(port, () => {
  
  app.use(express.json());
  app.use("/conversor", conversorRoutes);

  console.log(`Servidor está ouvindo na porta: ${port}`);
})