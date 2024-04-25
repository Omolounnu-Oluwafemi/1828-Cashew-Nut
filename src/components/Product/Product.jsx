import { Row, Col } from "react-bootstrap"
import './../../assets/styles/Product.css'

const Product = () => {
  return (
    <>
        <Row className="product-page">
              <Col>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1713266457/1828Cashew/PHOTO-2024-01-27-12-31-14_18_1_1_mn2gki.png" alt="cashew-nuts" className="product-cashew"/>
              </Col>
              <Col className="product-texts-section">
                  <h4>Cashew Nut</h4>
                  <h5 className="product-description">Description</h5>
                  <p className="product-text">The cashew nut is edible and is considered eaten on its own as a snack, used in recipes, or processed into cashew cheese or cashew butter.</p>
                  <h5 className="weight">Best Price/KG: Prices based on demand</h5>

                    <Row className=" d-flex justify-content-between">
                        <Col className="other-varieties">
                            <h6 className="varietiestext">Other varieties available on request among others</h6>
                            <div className="all-kgs">
                              <div className="kg1">
                                <p className="kg">WW320</p>
                                <p className="kg">WW240</p>
                                <p className="kg">SW320</p>
                              </div>
                              <div className="kg2">
                                <p className="kg">SW240</p>
                                <p className="kg">CW320</p>
                                <p className="kg">CW240</p>
                              </div>
                              <div className="kg3">
                                <p className="kg">SSW</p>
                                <p className="kg">WW180</p>
                                <p className="kg">W450</p>
                              </div>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column customerReview">
                          <h6 className="customerTitle">Customer Review</h6>
                            <div className="star-container">
                                {Array.from({ length: 5 }, (_, index)  => (
                                <svg
                                  key={index}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="#FF8800"
                                      viewBox="0 0 50 50"
                                      stroke="#fff"
                                      className="star"
                                    >
                                    <path
                                      d="M 25,5 L 29.5,19 L 45.9,19 L 32.5,27.8 L 37.2,42.5 L 25,33.6 12.8,42.5 L 17.5,27.8 L 4.1,19 L 20.5,19 z"
                                      fillRule="evenodd"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                    />
                                </svg>
                                  ))}
                            </div>
                        </Col>
                    </Row>
                    <a href="/contact" className="ProductButton">Order</a>
              </Col>
      </Row>
    </>
  )
}

export default Product
