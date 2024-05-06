import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import './gallery-home.scss';

import { Navigation } from 'swiper/modules';

import carouselFirstImage from '../../assets/images/home/gallery/carousel_1.png';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { useSpring } from 'framer-motion';

const GalleryHome = () => {
  const [cardRef, inView] = useInView({ threshold: 0.5 });

  const scaleProgress = useRef(useSpring(0.5)).current;
  const opacityProgress = useRef(useSpring(0.5)).current;

  useEffect(() => {
    scaleProgress.set(inView ? 1 : 0.5);
    opacityProgress.set(inView ? 1 : 0.5);
  }, [inView, scaleProgress, opacityProgress]);

  return (
    <section id='gallery'>
      <motion.div className="gallery_container" ref={cardRef} style={{scale: scaleProgress, opacity: opacityProgress}}>
        <div className="section_description">
          <div className="text_container">
            <h3 className="metters">
              14.000 m<span>2</span>
            </h3>
            <p className="first_comment">
              Proyectados y construidos donde predominan la Arquitectura, el <br /> 
              Arte, el Profesionalismo, la Dedicación y los Sueños.
            </p>
            <p className="second_comment">
              Respetuoso del medio ambiente y económicamente eficiente, <br />
              Argoth se destaca por usar elementos convencionales, sin la <br />
              necesidad de ostentar tecnologías alternativas. Con un enfoque <br /> 
              de hospitalidad sustentable, el edificio ha sido concebido como <br />
              un proyecto intrínsecamente sostenible, gracias a una <br />
              arquitectura innovadora en términos societarios, comerciales  <br />
              y operativos.
            </p>
          </div>
        </div>
        <div className="swiper_container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src={carouselFirstImage} alt="Carousel 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carouselFirstImage} alt="Carousel 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carouselFirstImage} alt="Carousel 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </section>
  )
}

export default GalleryHome