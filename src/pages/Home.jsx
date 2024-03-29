import { Row, Col } from "react-bootstrap"
import "./../assets/styles/Home.css"
import Home3Card from "../components/Home/Home3Card"
import Certifications from "../components/Home/Certifications"

function Home(){
  return (
    <>
      <div className="homeHero">
        <h3 className="homeTitle">BEST CASHEW NUT COMPANY IN NIGERIA</h3>
        <h1 className="homeHeroText">Customer satisfaction and consumer happiness with or product is our priority. We produce high quality cashew nut.
        </h1>
      </div>
         
      <div className="homeContainer">
        <div className="secondSection">
            <Row className="second-section-row">
              <Col className="">
                <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594037/1828Cashew/image_11_cmqpo3.png" alt="budding cashew plant" id="buddingplant" />     
              </Col> 
                <Col className="behealthyCont">
                <h3 className="behealthytext">
                  Be healthy and eat only 1828 cashew nut
                </h3>
                <p className="heroContainerParagraph">
                  We have over 25 years of cashew farming experience
                </p>
                </Col>
            </Row> 
        </div>
  
        <Row className="thirdSection">
           <Col className="greenCard">
              <h4>1828 Cashew Nut</h4>
              <h5>We export Cashew nuts to every part of the world, supply and delivery is guaranteed </h5>
          </Col>
          <Col className="export40">
            <h5 className="export40text">
              We export to over 40 countries of the world, 1828 cashew is the best leading cashew nut export company in Nigeria
            </h5>
          </Col>
        </Row>
        <div className="fourthSection">
            <Home3Card />
        </div>
        <div className="fifthSection">
            <Certifications/>
        </div>
      </div>
    </>
  )
}

export default Home
