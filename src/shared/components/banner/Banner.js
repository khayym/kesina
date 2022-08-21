import { Grid, Image } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import { CutomButton } from '../button/Button'
import { StyledButton } from '../button/Button.Styled'
import { BannerText } from './banner-text'

export const Banner = () => {
    return (
        <BannerWraper columns={24}>
            <Grid.Col span={11} className='bannerDiv1'>
                {/* <Image
                    src={'/images/banner-home/banner-home-1.png'}
                    alt="Random unsplash image"
                    className='banner-img'
                /> */}
            </Grid.Col>
            <Grid.Col span={13} className='bannerDiv2'>
                <BannerText
                    title='стиль'
                    required='Возможно онлайн'
                    label={[
                        {
                            labelName: 'Услуга подойдет Вам если Вы хотите:',
                            labelValue: [
                                'Значительно улучшить свой внешний вид',
                                'Стать моднее, стильнее и увереннее в себе',
                                'Найти СВОЙ стиль'
                            ],
                            icon: 'icon-check'
                        },
                        {
                            labelName: 'Длительность: ',
                            labelValue: ['дни и время по договоренности'],
                            icon: false
                        }
                    ]}
                    price='от 18500 руб до 48500 руб '
                    buttonOne={<CutomButton>Заказать</CutomButton>}
                    buttonTwo={<CutomButton variant='secondary'>Узнать больше</CutomButton>}
                />
            </Grid.Col>
        </BannerWraper>
    )
}

export const BannerWraper = styled(Grid)`
    /* background-color:#ffffff48; */
    border: 1px solid #ff0909;
    border-radius: 0px 30px 30px 0px;
    /* height: 548px; */
    min-height: 548px;
    margin:0 1px;
    .bannerDiv1 {
    
        border: 2px solid #fff;
        padding:0 20px 0 0;
        border-top-right-radius: 20rem !important;
        border-bottom-right-radius: 20rem !important;
        position: relative;
        background-position: center ;
        background-size:cover !important;
        background-image: url('/images/banner-home/banner-home-1.png') ;
        background-clip: content-box;
        background-repeat: no-repeat;
       

    }

    .bannerDiv2 {
        border: 1px solid blue;
        padding:0 40px;
    }

   
`