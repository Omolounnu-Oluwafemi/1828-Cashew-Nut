import './../assets/styles/Gallery.css'
// import { Card, Container } from 'react-bootstrap';
import { GalleryData } from '../assets/data/GalleryData';
const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="galleryHero">
        <div className='galleryTextDiv'>
          <h1>Gallery</h1>
        </div>
      </div>
      <GalleryCard />
    </div>
  )
};

export default Gallery

const GalleryCard = () => { 
   
  const data = GalleryData

  return (
    <>
      <div className='gallery-container'>
          {data.map((data, index) => (
            <div key={index} className='eachGalleryCard'>
              <img src={data.img} alt={data.title} className='galleryImg' />
              <h4>{data.title}</h4>
            </div>
          ))}
      </div>
    </>
  )
}

