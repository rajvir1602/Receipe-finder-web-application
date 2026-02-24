import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = 'a93fac9e';
  const APP_KEY = 'bece8bbc7d1edbc151058bcf78c50c2f';
  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  },[query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log("Data Recieved...");
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <header className="top">
        Recipes By Shivam
      </header>
      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' placeholder="What recipe do you want to search today.eg: Banana, Mango etc." type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredient={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <footer className="bottom">
          Created By : Shivam Gupta<br/>
          Email : shivamgupta.6july@gmail.com 
      </footer>
    </div>
  );
  
}

export default App;
