import { Spoiler } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import { ReadMore } from '../readMore/ReadMore'

export const TextViaSpoiler = ({ children }) => {
    return (
        <TextWrapper>
            <div className="textSpoilerXl">
                <Spoiler maxHeight={500} showLabel={<ReadMore />} hideLabel={<ReadMore />}>
                    {children}
                </Spoiler>
            </div>

            <div className='textViaSpoilerTablet'>
                <Spoiler maxHeight={357} showLabel={<ReadMore />} hideLabel={<ReadMore />}>
                    {children}
                </Spoiler>
            </div>

            <div className='textViaSpoilerMobile'>
                <Spoiler maxHeight={357} showLabel={<ReadMore />} hideLabel={<ReadMore />}>
                    {children}
                </Spoiler>
            </div>
        </TextWrapper>
    )
}


const TextWrapper = styled.div`
    border: 1px solid green;


    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
          .textSpoilerXl {
            display: none;
          }  
    }

    @media(min-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
          .textViaSpoilerMobile {
            display: none;
          }  
    }
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
          .textViaSpoilerTablet {
            display: none;
          }  
    }
    @media(min-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
          .textViaSpoilerTablet {
            display: none;
          }  
    }

`