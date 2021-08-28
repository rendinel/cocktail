import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  //{3} we import setsearchterm from the useglobalcontext
  const { setSearchTerm } = useGlobalContext()

  // {6} we put the input on focus
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  //{6} function to set our searchterm to be equal to the word we input in the input
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  //{6} this way we prevent the default on submit of the form so if we press enter we don't refresh our app
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  //{6} we set a useref to grab the value of our input
  const searchValue = React.useRef('')
  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'> search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
