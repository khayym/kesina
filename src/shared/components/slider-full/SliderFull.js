import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import styled from "styled-components";

export const SliderFull = () => {
    return (
        <StyledSwiperWrap>
            <Swiper
                pagination={{
                    clickable: true,

                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                slidesPerView={1}
                autoplay={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-1.webp'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-2.webp'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-3.webp'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-4.webp'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </StyledSwiperWrap>
    );
};


const StyledSwiperWrap = styled.div`
    position: relative;
    overflow:hidden;

    .bigSliderImage{
        width:100%;
        height:100vh;
        /* ---- */
        img{
            object-fit: cover;
            object-position:top !important;
        }

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
            height:800px;
        }
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
            height:600px;
        }

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) {
            height:278px;
        }

            
        
    }

    .swiper-pagination-bullet-active{
        width: 12px;
        height:12px;
        background-color:#fff;
        
    }

    .swiper-pagination-bullet{
        border: 2px solid #fff;
        width: 12px;
        height:12px;

    }
    .swiper {
    padding-bottom: 70px !important;
    
}
`
