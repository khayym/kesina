import styled from "styled-components"

export const WpSwiperWrap = styled.div`
    position: relative;
    overflow:hidden;
    
    .mySwiperWp {
        display: flex;
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

export const SwiperCard = styled.div`
    max-width:655px;
    width:100%;
    max-height:598px;
    height:598px;
    background: #FFF9F3;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .wpSwipperInsdeDiv{
        width:95%;
        height:95%;
        background-image: ${({ url }) => `url(${url})`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

    }

    @media(max-width:640px) {
       height: 346px;
    }

`