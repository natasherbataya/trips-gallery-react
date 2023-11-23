import React from 'react'
import GalleryCard from '../GalleryCard/GalleryCard';
import './GallerySection.css'
import City1Img from '../../assets/City1.png'
import City2Img from '../../assets/City2.png'
import City3Img from '../../assets/City3.png'
import City4Img from '../../assets/City4.png'
import IconPeople from '../../assets/icon-people.png'

const galleries = [
    {
      image: City1Img,
      transport: 'на автобусе',
      isPeopleQuantity: true,
      peopleQuantity: 10,
      peopleImg: IconPeople,
      title:'Тбилиси',
      month:'апрель',
      price: '83.000'
       
    },

    {
      image: City2Img,
      transport: 'на самолете',
      isPeopleQuantity: false,
      peopleImg: IconPeople,
      title:'Стамбул',
      month:'март',
      price: '110.000',
     
       
    },

    {
      image: City3Img,
      transport: 'на самолете',
      isPeopleQuantity: true,
      peopleQuantity: 15,
      peopleImg: IconPeople,
      title:'Дубай',
      month:'июнь',
      price: '220.000',
      
       
    },

    {
      image: City4Img,
      transport: 'самолет + паром',
      isPeopleQuantity: true,
      peopleQuantity: 11,
      peopleImg: IconPeople,
      title:'Пхукет',
      month:'сентябрь',
      price: '135.000',
      
       
    }

]

function GallerySection() {
  return (
      <ul>
         { galleries.map(function(gallery) {
      return (
        <GalleryCard
        image={gallery.image}
        isPeopleQuantity={gallery.isPeopleQuantity}
        peopleQuantity={gallery.peopleQuantity}
        transport={gallery.transport}
        title={gallery.title}
        price={gallery.price}
        month={gallery.month}
        />
      )
    }) }
  </ul>
  );
}

export default GallerySection