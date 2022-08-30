import React from 'react'
import { Card, Image, SimpleGrid, Group } from '@mantine/core';
import styled from 'styled-components';

export const Galery = ({ imgs }) => {
    return (
        <StyledGrid
            cols={3}
            breakpoints={[
                { maxWidth: "lg", cols: 3, spacing: 'md' },
                { maxWidth: "sm", cols: 2, spacing: 'sm' },
                { maxWidth: 'xs', cols: 2, spacing: 'sm' },
            ]}
        >
            {
                imgs.map((url, i) => (
                    <CardDiv key={i}><CardI url={url} /></CardDiv>
                ))
            }

        </StyledGrid>
    )
}


const CardI = ({ url }) => {
    return (
        <Card radius="xl" p={0} m={0} style={{ backgroundColor: 'transparent' }} withBorder={false}>
            <Image
                src={url}
                alt="gallery"
            />
        </Card>
    );
}

const CardDiv = styled.div`
    height:415;
    width:415;

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        width:300;
        height:300;
    }
`

export const StyledGrid = styled(SimpleGrid)`
    
    margin: 70px 0 140px 0px;

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        margin: 40px 0 140px 0px;
    }
`