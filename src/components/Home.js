import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../features/recipes';
import './Home.css'


function Home (){
    const dispatch = useDispatch();
    const _handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(
            addToList(e.target.search.value)
          );
        

    }
    
    return(
        <div id='home'>
            <h1>구구요리</h1>
            <div id='addRecipe'>
                <form onSubmit={_handleSubmit}>
                    <input type='search' name='search' id='search' />
                    <input type='submit' name='submit' id='submit' value='Add' />
                </form>
            </div>
            <div id='recipeList'>
            </div>
        </div>
    )
}

export default Home;