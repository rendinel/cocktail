import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  //{3} we import loading and cocktails from the useglobalcontext
  const { cocktails, loading } = useGlobalContext()
  //{3 if losding isd true wi will display loading component}
  if (loading) {
    return <Loading />
  }
  //{3} if the cocktails array is empty we will not have any return from the search so wi will display this
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  //{5} we iterate the cocktails obj and print the value
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}></Cocktail>
        })}
      </div>
    </section>
  )
}

export default CocktailList
