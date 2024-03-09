import { ServiceHero } from "./Processing"
import ServicesCarousel from "../../components/Services/ServicesCarousel"
 import { imageData } from './../../assets/data/ServicesImages'
import { Section2 } from "./Processing"

const Sourcing = () => {
  const images = imageData;
  
  return (
    <div>
       <div>
        <ServiceHero title={"Cashew Nut Sourcing"} />
        <ServicesCarousel images={images} />
        <Section2 column1={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."} column2={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."}  column3={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."} column4={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."} />
        </div>
    </div>
  )
}

export default Sourcing
