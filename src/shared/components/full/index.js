import React from 'react'
import styled from 'styled-components'
import { BackgroundImage, Center, Box } from '@mantine/core';
import { CutomButton } from '../button/Button';
import { useRouter } from 'next/router';
import { goToTelegram } from '../../../utils/nav';

export const Full = () => {
    const { push } = useRouter();
    return (
        <Box style={{ height: '800px', margin: '7rem 0' }}>
            <BackgroundImage
                src={'/images/makeup/full.png'}
                style={{ height: '800px', alignItems: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <FullContainer p="md" style={{ alignItems: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2>Обучение в подарок</h2>
                    <h6>Свяжитесь со мной лично и закажите подарочной сертификат подруге, сестре или коллеге в подарок на любое обучение или услугу.</h6>
                    <CutomButton func={() => goToTelegram(push)}>Хочу заказать!</CutomButton>
                </FullContainer>
            </BackgroundImage>
        </Box>
    );
}


const FullContainer = styled(Center)`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    h2{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 600;
        font-size: 60px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-align: center;

    }
    h6{
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: #FFFFFF;
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
       h2{
        font-size:22px;
       }
    }
    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
       h2{
        font-size:32px;
       }
    }
`