/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap"
import './../../assets/styles/About.css'


export const MissionSection = ({ title, details }) => {
  return (
    <>
      <Container className="othersections">
        <h3>{title}</h3>
        <hr className="line" />
        <h5 className="">
          {details}
        </h5>
      </Container>
    </>
  )
};


export const VisionSection = ({ title, details }) => {
  return (
    <>
      <Container className="vision-sections">
        <h3>{title}</h3>
        <hr className="line" />
        <h5 className="">
          {details}
        </h5>
      </Container>
    </>
  )
};


export const LastSection = ({ title, bullet1, bullet2, bullet3 }) => {
  return (
     <Container className="lastsections">
            <h3>{title}</h3>
            <hr className="line"/>
              <ul>
                  {bullet1}
                  {bullet2}
                  {bullet3}
              </ul>              
    </Container>
  )
}


