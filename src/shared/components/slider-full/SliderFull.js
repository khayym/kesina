import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Image from 'next/image';
import styled from "styled-components";

export const SliderFull = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="sgDots"></span>';
        },
    };

    return (
        <StyledSwiperWrap>
            <Swiper
                pagination={{
                    clickable: true,

                }}
                modules={[Pagination]}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-1.png'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-2.png'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-3.png'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bigSliderImage">
                        <Image src={'/images/big-slider/bg-slider-4.png'} alt="Slider-full-imge" layout='fill' objectFit='cover' />
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
        height:1110px;
        /* ---- */
        img{
            object-fit: cover;
            object-position:top !important;
        }

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
            height:800px;
        }
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}) {
            height:600px;
        }

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) {
            height:278px;
        }

            
        
    }

    .swiper-pagination-bullet-active{
        width: 15px;
        height:15px;
        background-color:#fff;
        
    }

    .swiper-pagination-bullet{
        border: 1px solid #fff;
        width: 15px;
        height:15px;

    }

    /* .swiper-pagination-horizontal{
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    } */
    .swiper {
    padding-bottom: 70px !important;
    
}
`
