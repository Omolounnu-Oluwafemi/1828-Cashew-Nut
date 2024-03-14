import { Card, Container} from 'react-bootstrap';
import { Home3Data } from '../../assets/data/Home3Data';
import './../../assets/styles/home3Card.css'

const Home3Card = () => {
    
  const data = Home3Data
  return (
    <Container className='home3Card'>
        {data.map((data, index) => (
          <Card key={index}  className='eachHome3Card'>
            <Card.Img  src={data.img} className='home3img'/>
            <Card.Body className='home3texts'>
              <h4>{data.type}</h4>
              </Card.Body>
          </Card>
       ))}
    </Container>
  )
}
export default Home3Card



