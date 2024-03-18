import { ServiceHero } from "./Processing"
import ServicesCarousel from "../../components/Services/ServicesCarousel"
 import { imageData } from './../../assets/data/ServicesImages'
import { Section2 } from "./Processing"

const Sourcing = () => {
  const images = imageData;
  
  return (
    <div>
       <div>
        <ServiceHero title={"Cashew Sourcing"} />
        <ServicesCarousel images={images} />
       <Section2 column1header={"Cashew Nut Auction"} column1Text={"Our company buys cashew nut from agencies that auction cashew nut in Nigeria"} column2header={ "Top Grade Quality"} column2Text={"1828 cashew nuts meets the required standard and quality approved by food agencies in Nigeria"} column3header={ "Guaranteed supply"} column3Text={"Our large network of suppliers ensures there is always enough cashew nuts to be processed and supplied to consumers"} column4header={"International standard"} column4Text={"1828 cashew nut always adhere to the standard hence it meets the quality required in foreign countries"}/>  
        </div>
    </div>
  )
}

export default Sourcing
