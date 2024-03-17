import { Row, Col } from "react-bootstrap"
import './../../assets/styles/Product.css'

const Product = () => {
  return (
    <>
        <Row className="product-page">
              <Col>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1710517512/1828Cashew/PHOTO-2024-01-27-12-31-14_18_1_wh8c0l.png" alt="cashew-nuts" className="product-cashew"/>
              </Col>
              <Col className="product-texts-section">
                  <h4>Cashew Nut</h4>
                  <h5 className="product-description">Description</h5>
                  <p className="product-text">The cashew nut is edible and is considered eaten on its own as a snack, used in recipes, or processed into cashew cheese or cashew butter.</p>
                  <h5 className="weight">Best Price/KG: $6/KG</h5>

                    <Row>
                        <Col>
                            <h6>Weight Available</h6>
                            <div className="all-kgs">
                                <p className="kg">25kg</p>
                                <p className="kg">50kg</p>
                                <p className="kg">100kg</p>
                            </div>
                        </Col>
                        <Col>
                             <h6>Customer Review</h6>
                              <div className="star-container">
                                {Array.from({ length: 5 }, (_, index)  => (
                                    <svg
                                      key={index}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="#FF8800"
                                      viewBox="0 0 24 24"
                                      stroke="#fff"
                                      className="star"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
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
