import { Image } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'

export const BannerImage = () => {
    return (
        <BannerImageWrapper>
            <div>
                <Image
                    radius="md"
                    src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    alt="Random unsplash image"
                />
            </div>
        </BannerImageWrapper>
    )
}

export const BannerImageWrapper = styled.div`
`