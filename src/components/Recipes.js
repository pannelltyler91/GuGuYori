import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe,getRecipes,deleteRecipe } from '../features/recipes';


function Recipes(){
    const recipes = useSelector((state) => state.recipes.recipeList);
    const dispatch = useDispatch();
    const _handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(
            addRecipe({recipeName:e.target.search.value,website:e.target.webLink.value, video:e.target.videoLink.value})
          );
        
        e.target.search.value = ''
    }
    useEffect(() => {
        dispatch(getRecipes())
      },[dispatch])
    return(
        <Container fluid style={{backgroundColor:'#c1c6c7'}}>
            <Nav style={{backgroundColor:'#0dcaf0',color:'#808080'}} id='addRecipe'>
            <Nav.Link style={{color:'#808080',marginRight:'650px'}} href="/"><strong>구구</strong></Nav.Link>
                <form style={{marginTop:'4px'}} onSubmit={_handleSubmit}>
                    <input type='search' name='search' id='search' placeholder='Recipe name' />
                    <input type='url' name='webLink' id='webLink' placeholder='Website' />
                    <input type='url' name='videoLink' id='videoLink' placeholder='Video' />
                    <input type='submit' name='submit' id='submit' value='Add' />
                </form>
            </Nav>
            <Row id='recipeList' style={{margin:'10px',height:'100vh'}}>
                {recipes.map((recipe) => {
                    return(
                        <Col lg={3} className='recipe' key={recipe.id}>
                            <Card style={{backgroundColor:'#0dcaf0',color:'#808080',width:'300px',height:'250px'}}>
                                <Card.Title key={recipe.name}>{recipe.name}</Card.Title>
                                <a style={{color:'#808080'}} href={recipe.website_url}>Website</a>
                                <iframe style={{marginBottom:'2px'}} src={recipe.video_url} title='YouTube video player'/>
                                <Button onClick={()=>{dispatch(deleteRecipe({id:recipe.id}))}}>Remove from List</Button>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Recipes;

