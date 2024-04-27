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
                    <MissionSection title={"Mission"} details={"Our mission is to produce high-quality cashew products tha delight our customers while maintaining a commitment to sustainability, food safety, and social responsibility. We strive to build long-term relationships with our stakeholders all over the world."}
                    /> 
                </Col>
                <Col>
                    <VisionSection title={"Vision"} details={"To provide better cashew kernels to our customers in terms of authenticity, quality, safety, meeting customers’ as well as regulatory and legal requirements."}
                    /> 
                </Col>
            </Row>
            <LastSection title={"Core values"} bullet1={<li>Develop High skilled, motivated and committed employees</li>} bullet2={<li>Build trust with customers through good customer relationship</li>} bullet3={<li>Bringing added values for our customers and suppliers in the supply chain </li>}
                bullet4={<li>Delivering our product within a short period of time </li>}
            /> 
            <Certifications/>
        </>
        
    )
}

export default About