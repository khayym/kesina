import React from 'react'
import { Card, Image, SimpleGrid, Group } from '@mantine/core';
import styled from 'styled-components';

export const Galery = ({ imgs }) => {
    return (
        <SimpleGrid
            cols={3}
            style={{ margin: '4rem 0px' }}
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

        </SimpleGrid>
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