import AboutUs from "../components/About/AboutUs"
import  { LastSection, MissionSection, VisionSection } from "../components/About/OtherSections"
import { Col, Row } from "react-bootstrap"
import Certifications from "../components/Home/Certifications"


const About = () => { 
    return (
        <>
            <AboutUs />
            <Row className="flexedSections">
                <Col >
                    <MissionSection title={"Mission"} details={"To provide Nigerians and international customers with high quality 1828 cashew nut, also building customer loyalty through customer service excellence"}
                    /> 
                </Col>
                <Col>
                    <VisionSection title={"Vision"} details={"To become one of the best cashew nut export company in Africa and the world at large, becoming a reputable export company in enhancing the value of the Nigerian Agricultural Product."}
                    /> 
                </Col>
            </Row>
            <LastSection title={"Core values"} bullet1={<li>Develop High skilled, motivated and committed employees</li>} bullet2={<li>Build trust with customers through good customer relationship</li>} bullet3={<li>Bringing added values for our customers and suppliers in the supply chain </li>}
            /> 
            <Certifications/>
        </>
    )
}

export default About