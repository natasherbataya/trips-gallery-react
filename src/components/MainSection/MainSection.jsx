import React from 'react'
import Heading from '../Heading/Heading'
import './MainSection.css'
import GallerySection from '../GallerySection/GallerySection';

function MainSection() {
  return (
  <div className='container'>
<Heading 
level='h1'
text='Галерея путешествий'
/>
<GallerySection/>
  </div>
  );
}

export default MainSection
