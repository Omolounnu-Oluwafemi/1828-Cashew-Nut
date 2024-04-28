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
        <h1 className="homeHeroText">At 1828 cashew, we do it as if we have been here since 1828. we bring the ancient recipe flavours into the taste of every delicately picked seed. 1828 Cashews are rich in healthy fats and protein.
        </h1>
        <h1 className="homeHeroText">
            At 1828 Cashew, we make a tasty seed of deliciousness!!
        </h1>
      </div>
         
      <div className="homeContainer">
        <div className="secondSection">
          <Row className="second-section-row">
             <Col className="wedevelopCont">
                <p className="heroContainerParagraph">
                  With our years of expertise and deep rooted passion for excellence, we harness the natural goodness of cashews to create a range of premium products that are not only delicious but nutritious. Our selection of cashew nut, from whole kernel to value-added varieties, promises to elevate your snacking and cooking experience. 
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
