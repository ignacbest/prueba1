import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'


//imagenes
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

export default function CarouselPet() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className= {styles.slideImg}
                    src= {img1}
                    alt ="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className= {styles.slideImg}
                    src= {img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className= {styles.slideImg}
                    src= {img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
