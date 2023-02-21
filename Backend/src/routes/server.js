const http = require('http');
const characters = require("../utils/data");

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes("rickandmorty/character")) {
      let id = req.url.split("/").at(-1);

      //let characterFilter = characters.filter(char => char.id === Number(id)) //Devuelve un array
      let characterFilter = characters.find((char) => char.id === Number(id)); // Devuelve directamente el obj

      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(characterFilter));
    }
  })
  .listen(3001, "localhost");
