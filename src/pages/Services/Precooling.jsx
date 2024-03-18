import { ServiceHero } from "./Processing"
import ServicesCarousel from "../../components/Services/ServicesCarousel"
 import { imageData } from './../../assets/data/ServicesImages'
import { Section2 } from "./Processing"
const Precooling = () => {
    const images = imageData;
  return (
    <div>
        <div>
        <ServiceHero title={"Cashew Exportation"} />
        <ServicesCarousel images={images} />
        <Section2 column1header={"Humidity controlled container"} column1Text={"Our containers are lined with moisture barrier wrap to ensure preservation of cashew quality "} column2header={"Monitoring and Tracking"} column2Text={" We accurately monitor our containers both in land and in sea to ensure end to end tracking"} column3header={"Reliable Logistic partner"} column3Text={"Our containers are lined with moisture barrier wrap to ensure preservation of cashew quality  "} column4header={"We are the leading cashew export company in Nigeria"} column4Text={"Our containers are lined with moisture barrier wrap to ensure preservation ofcashew quality "} />
        </div>
    </div>
  )
}

export default Precooling
