import React from 'react'
import { useGetRecipesQuery } from '../../redux/recipesApi'

const HomePage = () => {

  const {data, isError, isLoading} = useGetRecipesQuery();

  if(!isLoading && !isError) console.log(data.recipes);
  

  return (
    <div>
      Salam
    </div>
  )
}

export default HomePage
