import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { ImageCard } from '../card/Card';
import { SwipperWrapper } from './Slider.Styled';
import { sliderBreakpoints } from './constants';

export const Slider = () => {

    return (
        <SwipperWrapper>
            <Swiper
                scrollbar={{
                    horizontalClass: 'swiper-scrollbar-horizontal',
                }}
                breakpoints={sliderBreakpoints}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ImageCard src={'/images/slider/slider1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ImageCard src={'/images/slider/slider2.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ImageCard src={'/images/slider/slider3.png'} />
                </SwiperSlide>
            </Swiper>
        </SwipperWrapper>
    );
};

