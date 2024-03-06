import { Card, Container } from 'react-bootstrap';
import { Home3Data } from '../../assets/data/Home3Data';
import './../../assets/styles/home3Card.css'




const Home3Card = () => {
    
    const data = Home3Data
  return (
      <Container className='home3Card'>
          {data.map((data, index) => (
            <Card key={ index} style={{ width: '20rem' }}>
             <Card.Img variant="top" src={data.img}/>
             <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                 </Card.Body>
              </Card>
            ))}
    </Container>
  )
}

export default Home3Card



