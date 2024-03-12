/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap"
import './../../assets/styles/About.css'


const OtherSections = ({title, details, bullet1, bullet2, bullet3}) => {
  return (
    <Container fluid className="othersections">
       <div>
            <h3>{title}</h3>
            <hr />
            <p>
                {details} 
            </p>
              <ul>
                  { bullet1}
                  {bullet2}
                  { bullet3}
              </ul>              
       </div>
    </Container>
  )
}

export default OtherSections
