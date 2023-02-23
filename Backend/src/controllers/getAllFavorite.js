
const getAllFavorite = async() => {
   try {
    const allFavorites = await Favorite.findAll()
    if (!allFavorites) throw new Error('No hay Favoritos')
    return allFavorites
   } catch (error) {
    return {error:error.message}
   }
}

module.exports = getAllFavorite;