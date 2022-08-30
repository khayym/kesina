import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { ImageCard } from '../card/Card';
import { SwipperWrapper } from './Slider.Styled';
import { sliderBreakpoints } from './constants';

export const Slider = ({ links }) => {

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
                <SwiperSlide key={1}>
                    <ImageCard src={links[0]} />
                </SwiperSlide >
                <SwiperSlide key={2}>
                    <ImageCard src={links[1]} />
                </SwiperSlide>
                <SwiperSlide key={3}>
                    <ImageCard src={links[2]} />
                </SwiperSlide>
            </Swiper>
        </SwipperWrapper>
    );
};

