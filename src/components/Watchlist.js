import {React, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getWatchList,deleteMovie} from '../features/movies'
import {Container,Card, Button,Row, Col} from 'react-bootstrap'
import Homenav from './Homenav'

function Watchlist(){
    const movieList = useSelector((state) => state.movies.movieList)
    const dispatch = useDispatch(); 
    useEffect(() => {
      dispatch(getWatchList())
    },[dispatch])
    return(
        <Container style={{backgroundColor:'#FFF8D6'}}>
          <Homenav/>
          <Row style={{marginTop:'10px'}}> 
            {movieList.map((movie) => {
          return (
            <Col key={movie.imdbID} lg={3} style={{marginTop:'10px'}}>
            <Card  style={{width:'16rem',height:'300px',margin:'10',backgroundColor:'#A1CECC'}} className="movie"  >
              
              <Card.Img
                variant='top'
                src={movie.poster_url}
                
                height="180"
                width="286"
                alt="sorry"
              />
              <Card.Body>
              <Card.Title style={{color:'#575761'}}>{movie.title}</Card.Title>
              <Button style={{backgroundColor:'#A1CECC',color:'#575761',fontWeight:'bold'}} onClick={()=>{dispatch(deleteMovie({id:movie.imdbID}))}}>Delete</Button>
              </Card.Body>
            </Card>
            </Col>
          );
        })}
        </Row>
        </Container>
    )
}



export default Watchlist;