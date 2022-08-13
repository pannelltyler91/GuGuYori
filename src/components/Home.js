import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../features/recipes';
import './Home.css'
import Movies from './Movies'
import Travel from './Travel'
import Container from 'react-bootstrap/Container'


function Home (){
    const recipes = useSelector((state) => state.recipes.recipeList);
    const dispatch = useDispatch();
    const _handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(
            addToList({recipeName:e.target.search.value,website:e.target.webLink.value, video:e.target.videoLink.value})
          );
        
        e.target.search.value = ''
    }
    
    return(
        <Container id='home'>
            <h1>구구요리</h1>
            <div id='addRecipe'>
                <form onSubmit={_handleSubmit}>
                    <input type='search' name='search' id='search' placeholder='Recipe name' />
                    <input type='url' name='webLink' id='webLink' placeholder='Website' />
                    <input type='url' name='videoLink' id='videoLink' placeholder='Video' />
                    <input type='submit' name='submit' id='submit' value='Add' />
                </form>
            </div>
            <div id='recipeList'>
                {recipes.map((recipe) => {
                    return(
                        <div className='recipe'>
                        <p key={recipe.recipeName}>{recipe.recipeName}</p>
                        <a href={recipe.website}>Website</a>
                        <iframe src={recipe.video} title='YouTube video player'/>
                        
                        </div>
                    )
                })}
            </div>
            <Movies/>
            <Travel/>
        </Container>
    )
}

export default Home;