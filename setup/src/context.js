import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //{3} we define a usestate that will make appear the loading component if true
  const [loading, setLoading] = useState(true)
  //{3} we set up the initial state of the search filter
  const [searchTerm, setSearchTerm] = useState('a')
  //{3} we set up the usestate to display the array
  const [cocktails, setCocktails] = useState([])

  //{4 we fetch the data with the async function,we set loading to true, then we grab the data from the url and the searchterm we input, we deconstruct the drinks we get from data and if drinks is not empry we map teh data we want from the api and return them inside an object with simpler name and set coktails to be our newCocktails object, if we don't have a return we set cocktails to be an empty aray so we will display the empty page.We finish by putting the loading on false}
  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  //{4} we fetch data every time the searchterm change
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
