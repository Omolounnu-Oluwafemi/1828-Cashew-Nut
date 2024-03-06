import { Row, Col } from "react-bootstrap"
import "./../assets/styles/Home.css"
import Home3Card from "../components/Home/Home3Card"
import Certifications from "../components/Home/Certifications"

const Home = () => {
  return (
      <div >
          <div>
               <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594039/1828Cashew/image_9_uolzcf.png" className="homeHero" />
           <h1 className="homeTitle">Welcome to 1828 Cashew</h1>
          </div>
         
          <div className="homeContainer">
            <Row className="secondSection">
                  <Col >
                      <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594037/1828Cashew/image_11_cmqpo3.png" alt="budding cashew plant" />
                      <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594037/1828Cashew/image_10_rysmqa.png" alt="two cashew fruit" />
                  </Col>
                  <Col>
                    <h3 className="heroContainerheader">
                    Be healthy and eat only 1828 cashew nut
                    </h3>
                      <p className="heroContainerParagraph">
                          We have over 25 years of farming experience
                      </p>
                  </Col>  
                  
              </Row>
              
              <div className="greenCard">
                  <h4>1828 Cashew Nut</h4>
                  <h5>We export Cashew nuts to every part of the world, supply and delivery is guaranteed </h5>
              </div>

              <Home3Card />
              <Certifications/>
              

          </div>
          
          
    </div>
  )
}

export default Home
