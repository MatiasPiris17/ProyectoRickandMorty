// ----------------->Framework Express<-----------------
const express = require("express");
const axios = require("axios");
const cors = require("cors")
const getAllChars = require('../controllers/getAllChars')
const postFav = require('../controllers/postFav')
const getAllFavorite = require('../controllers/getAllFavorite');
const deleteFavoriteById = require("../controllers/deleteFavoriteById");


const app = express();


app.use(cors())
app.use(express.json())

app.get('/rickandmorty/allCharacters', async (req,res) => {
  try {
    const allCharacters = await getAllChars();
    res.status(200).json(allCharacters)
  } catch (error) {
    res.status(404).send('Problemaaa')
  }
})

//http://localhost:3000/rickandmorty/character/${id}
app.get("/rickandmorty/character/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = response.data; // OPCION 1

    const infoCharacter = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };
    res.status(200).json(infoCharacter);
  } catch (error) {
    res.status(404).send(error.message);
  }
});


app.get("/rickandmorty/detail/:detailId", async (req, res) => {
  try {
    const {detailId} = req.params;
    // OPCION 2
    // const response = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data 
     // OPCION 3
    const {data} = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`))
    
    const infoCharacterDetail = {
      name: data.name,
      status:data.status,
      species: data.species,
      gender: data.gender,
      origin:data.origin,
      image: data.image,
    }
    res.status(200).json(infoCharacterDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
  
});


app.get("/rickandmorty/fav", async(req,res) => {
  try {
    const allFavorite = await getAllFavorite()

    if (allFavorite.error) throw new Error(allFavorite.error)

    res.status(200).json(allFavorite)
    
  } catch (error) {
    res.status(404).send(error.message)
  }
})


app.post("/rickandmorty/fav", async(req,res) => {
try {
  const characterFav = await postFav(req.body)

  if (characterFav.error) throw new Error(characterFav.error)

  res.status(200).json(characterFav)
  
} catch (error) {
  return res.status(404).send(error.message)
}
})


app.delete("/rickandmorty/fav/:id", async(req,res) => {
  try {
    const {id} = req.params
    const deleteFavorite = await deleteFavoriteById(parseInt(id))
    if (deleteFavorite.error) throw new Error(deleteFavorite.error)
    res.status(200).json(deleteFavorite)
  } catch (error) {
    return res.status(404).send(error.message)
  }

})


module.exports = app;

// ----------------->NODE.JS<-----------------
// const http = require("http");
// const getCharById = require("../controllers/getCharById");
// const getCharDetail = require('../controllers/getCharDetail')
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     let id = req.url.split("/").at(-1);

//     if (req.url.includes("onsearch")) {
//       getCharById(res, id);
//     }
//     if (req.url.includes('detail')) {
//       getCharDetail(res,id)
//     }
//   })
//   .listen(3001, "localhost");
