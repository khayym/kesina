import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { ImageCard } from '../card/Card';
import { SwipperWrapper } from './Slider.Styled';
import { sliderBreakpoints } from './constants';
import { useRouter } from 'next/router';

export const Slider = ({ links }) => {
    const { push, pathname } = useRouter();

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
                <SwiperSlide onClick={() => push(links[0])}>
                    <ImageCard src={pathname === '/' ? '/images/slider/slider1.png' : '/cards/still2/1.png'} />
                </SwiperSlide >
                <SwiperSlide onClick={() => push(links[1])}>
                    <ImageCard src={pathname === '/' ? '/images/slider/slider2.png' : '/cards/still2/2.png'} />
                </SwiperSlide>
                <SwiperSlide onClick={() => push(links[2])}>
                    <ImageCard src={pathname === '/' ? '/images/slider/slider3.png' : '/cards/still2/3.png'} />
                </SwiperSlide>
            </Swiper>
        </SwipperWrapper>
    );
};

