import { Card, Container} from 'react-bootstrap';
import { Home3Data } from '../../assets/data/Home3Data';
import './../../assets/styles/home3Card.css'

const Home3Card = () => {
    
  const data = Home3Data
  return (
    <Container fluid className='home3Card'>
      <h1 className='why-choose'>Why Choose US?</h1>
      <div className='home3Carddiv'>
        {data.map((data, index) => (
          <Card key={index}  className='eachHome3Card'>
            <Card.Img  src={data.img} className='home3img'/>
            <Card.Body className='home3texts'>
              <h4 className='home3texth4'>{data.title}</h4>
              <p className='home3textp'>{data.text}</p>
              </Card.Body>
          </Card>
       ))}
      </div>
    </Container>
  )
}
export default Home3Card



