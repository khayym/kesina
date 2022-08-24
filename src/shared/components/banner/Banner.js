import { Grid } from '@mantine/core'
import React from 'react'
import styled, { css } from 'styled-components'
import { BannerText } from './banner-text'

export const Banner = ({ reverse, title, url, label, price, required, buttons, url2, top, thin }) => {
    return (
        <BannerWraper columns={24} reverse={reverse?.toString()} url={url} url2={url2} top={top} >
            <Grid.Col sm={11} xs={24} className='bannerDiv1'>
            </Grid.Col>
            <Grid.Col sm={13} className='bannerDiv2'>
                <BannerText
                    thin
                    title={title}
                    required={required}
                    price={price}
                    buttons={buttons}
                    label={label}
                />
            </Grid.Col>
        </BannerWraper>
    )
}

export const BannerWraper = styled(Grid)`
    /* background-color:#ffffff48; */
    background: rgba(255, 253, 251, 0.02);
    border: 1px solid #ffffff;
    border-radius: 0px 30px 30px 0px;
    /* height: 548px; */
    min-height: 548px;
    margin:0 1px;
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};

    ${props => props.reverse ? css`
            border-radius: 30px 0px 0 30px;
            ` : css`
            border-radius: 0px 30px 30px 0px;
            `
    }

    p,h3,h2,span,h1{
        margin:0;
    }
    .bannerDiv1 {
    
        border: 2px solid #fff;
        min-height:380px;
        position: relative;
        background-position: ${props => props.top ? 'top' : 'center'};
        background-size: cover;
        background-image: ${props => `url(${props.url})`};
        background-clip: content-box;
        background-repeat: no-repeat;
       
        ${props => props.reverse ? css`
                padding:0 0 0 20px;
                border-top-left-radius: 20rem !important;
                border-bottom-left-radius: 20rem !important;
                border-right: 0;
            ` : css`
               padding:0 20px 0 0;
               border-top-right-radius: 20rem !important;
               border-bottom-right-radius: 20rem !important;
               border-left: 0;
            `
    }

    @media (max-width: 768px) {
        border: 0px solid #fff;
        ${props => props.reverse ? 'padding-left: 45px' : 'padding-right: 45px'};
        background-image:  ${props => props.url2 && `url(${props.url2})`};
    }

    }

    .bannerDiv2 {
        padding:0 60px;
        display:flex;
        align-items: center;
        justify-content: center;
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}) {
            padding:0 20px;
      }
    }

   
   
`