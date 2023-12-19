require("dotenv").config();
const app = require("./app");
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`);
    console.log(`Servidor executando na porta ${port}`);
  });