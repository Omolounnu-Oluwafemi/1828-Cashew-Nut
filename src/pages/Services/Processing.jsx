    import ServicesCarousel from './../../components/Services/ServicesCarousel'
    import {imageData} from './../../assets/data/ServicesImages'
    const Processing = () => {

        const images = imageData;

    return (
        <div>
          <div className="galleryHero">
            <div className='galleryTextDiv'>
              <h1>Gallery</h1>
            </div>
          </div>
            <ServicesCarousel images={images} />
        </div>
    )
    }

    export default Processing
