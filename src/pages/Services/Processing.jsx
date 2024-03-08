import ServicesCarousel from './../../components/Services/ServicesCarousel'
import {imageData} from './../../assets/data/ServicesImages'
const Processing = () => {

    const images = imageData;
    
  return (
    <>
          <ServicesCarousel images={images} />
    </>
  )
}

export default Processing
