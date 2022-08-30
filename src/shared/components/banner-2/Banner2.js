import Image from 'next/image'
import React, { useState } from 'react'
import { AccordionWrap, ColImage, ColText, Div, ListItem, Lists, Price, Wrap } from './Banner2.Styled'
import { CutomButton } from '../button/Button'
import { useRouter } from 'next/router'
import { goToTelegram } from '../../../utils/nav'
import { Accordion, Spoiler } from '@mantine/core'

export const Banner2 = ({ number, url, title, lists, price }) => {
    const { push } = useRouter();
    const [ro, setRo] = useState(false);

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
                {/* ----- */}
                <div id='sec'>


                    <Lists>
                        <h3>{lists[0].name}</h3>
                        {lists[0].cols.map((col, ind) => <ListItem key={ind}>{col}</ListItem>)}
                    </Lists>
                    <AccordionWrap>
                        <Accordion.Item value="customization">
                            <Accordion.Control onClick={() => setRo(!ro)}>
                                <h3>{lists[1].name}
                                    <Image src={'/icons/ta.svg'} width={14} height={8} alt="customization" style={ro ? { transform: 'rotate(180deg)', transition: 'transform 200ms ease' } : { transform: 'rotate(0deg)', transition: 'transform 200ms ease' }} />
                                </h3>
                            </Accordion.Control>
                            <Accordion.Panel>{lists[1].cols.map((col, ind) => <ListItem key={ind}>{col}</ListItem>)}</Accordion.Panel>
                        </Accordion.Item>
                    </AccordionWrap>

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
                {/* ---- */}
                <div className="priceBtn">
                    <CutomButton func={() => goToTelegram(push)}>Хочу записаться!</CutomButton>
                </div>
            </ColText>
        </Wrap>
    )
}


