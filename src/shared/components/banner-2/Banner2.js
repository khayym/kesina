import Image from 'next/image'
import React from 'react'
import { ColImage, ColText, Div, ListItem, Lists, Price, Wrap } from './Banner2.Styled'
import { CutomButton } from '../button/Button'

export const Banner2 = ({ number, url, title, lists, price }) => {
    return (
        <Wrap>
            <ColImage className='col1'>
                <Div
                    number={number}
                    url={url}
                />
                <div className='numberIconClass'>
                    <Image src={number} layout='fill' objectFit='cover' alt='make-up-1' />
                </div>
            </ColImage>


            <ColText>
                <h2>{title}</h2>
                <div id='first'>
                    {
                        lists.map(({ name, cols }, index) => (
                            <Lists key={index}>
                                <h3>{name}</h3>
                                {cols.map((col, ind) => <ListItem key={ind}>{col}</ListItem>)}
                            </Lists>
                        ))
                    }

                    {
                        price.map((price, index) => (
                            <Price key={index}>
                                <h5>
                                    <span id='title'>{price.title}</span>
                                    {price.price}
                                </h5>
                            </Price>
                        ))
                    }
                </div>
                <div className="priceBtn">
                    <CutomButton>Ознакомиться</CutomButton>
                </div>
            </ColText>
        </Wrap>
    )
}


