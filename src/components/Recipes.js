import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../features/recipes';


function Recipes(){
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
        <Container fluid style={{backgroundColor:'#c1c6c7'}}>
            <Nav style={{backgroundColor:'#0a8499',color:'#c1c6c7'}} id='addRecipe'>
            <Nav.Link style={{color:'#c1c6c7',marginRight:'650px'}} href="/">구구</Nav.Link>
                <form style={{marginTop:'4px'}} onSubmit={_handleSubmit}>
                    <input type='search' name='search' id='search' placeholder='Recipe name' />
                    <input type='url' name='webLink' id='webLink' placeholder='Website' />
                    <input type='url' name='videoLink' id='videoLink' placeholder='Video' />
                    <input type='submit' name='submit' id='submit' value='Add' />
                </form>
            </Nav>
            <Row id='recipeList' style={{margin:'10px'}}>
                {recipes.map((recipe) => {
                    return(
                        <Col lg={3} className='recipe'>
                            <Card style={{backgroundColor:'#0a8499',color:'#c1c6c7'}}>
                                <Card.Title key={recipe.recipeName}>{recipe.recipeName}</Card.Title>
                                <a style={{color:'#c1c6c7'}} href={recipe.website}>Website</a>
                                <iframe src={recipe.video} title='YouTube video player'/>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Recipes;