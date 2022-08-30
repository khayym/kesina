import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { SwiperCard, WpSwiperWrap } from './WpSlider.Styled';
import { brakPoints, sliders } from './constants';
import { useRouter } from 'next/router';



export const WpSlider = () => {
    const { pathname } = useRouter();
    return (
        <WpSwiperWrap>
            <Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                spaceBetween={30}
                breakpoints={brakPoints}
                autoplay={true}
                className="mySwiperWp"
            >
                {
                    sliders[pathname].map((slider, index) => (
                        <SwiperSlide key={index}>
                            <SwiperCard url={slider}>
                                <div className='wpSwipperInsdeDiv' />
                            </SwiperCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </WpSwiperWrap>
    )
}


