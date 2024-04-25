import { Row, Col } from "react-bootstrap"
import "./../assets/styles/Home.css"
import Home3Card from "../components/Home/Home3Card"
import Certifications from "../components/Home/Certifications"
import HomeCarousel from "../components/Home/HomeCarousel"
import { imageData } from "../assets/data/Homecarousel"

function Home() {
  const images = imageData;

  return (
    <>
      <div className="homeHero">
        <h3 className="homeTitle">Welcome to 1828 Cashew</h3>
        <h1 className="homeHeroText">Best Cashew Nut Company In Nigeria where passion meets precision in the art of processing.
        </h1>
      </div>
         
      <div className="homeContainer">
        <div className="secondSection">
          <Row className="second-section-row">
             <Col className="wedevelopCont">
                <p className="heroContainerParagraph">
                  We develop and deliver diverse assortments of cashew natural product. We produce several variety of cashew nut such as w180, w240, w320 and so on. 
                </p>
            </Col>
            
              <Col className="wedevelopImgCont">
                <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709902273/1828Cashew/GalleryPage/PHOTO-2024-01-27-12-31-14_11_2_rnwcnz.png" alt="budding cashew plant" id="buddingplant" />     
              </Col> 
               
            </Row> 
        </div>

        <HomeCarousel images={images} className="third-section"/>
        
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
