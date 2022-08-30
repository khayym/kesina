import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wrap } from './Footer.Styled'

export const Footer = ({ viewport }) => {
    return (
        <Wrap>
            <div className='div'>
                <section>
                    <h2>Ksenia Shapor</h2>
                    <div>
                        <p className='outhor'>2022 © Все права защищены</p>
                        {/* <a href="https://www.linkedin.com/in/khayyam-karimov-2b1873125/" target="blank">| BUILD BY @KHAYYM</a> */}
                    </div>
                </section>


                <section>
                    <div className='links'>
                        <h3>услуги и обучения</h3>
                        <div>
                            <Link href="/"><a>Главная</a></Link>
                            <Link href="/makeup-hair"><a>Make-up & Hair</a></Link>
                            <Link href="/stil"><a>Стиль</a></Link>
                            <Link href="/your-choise"><a>выбирай себя</a></Link>
                        </div>
                    </div>


                    <div id='email'>
                        <h3>связаться</h3>
                        <a to='javascript:void(0)'
                            onClick={() => window.location = 'mailto:kseniashaportv@mail.ru'}>
                            kseniashaportv@mail.ru
                        </a>
                        <div>
                            <p className='outhor'>2022 © Все права защищены</p>
                            {/* <a href="https://www.linkedin.com/in/khayyam-karimov-2b1873125/" target="blank">| BUILD BY @KHAYYM</a> */}
                        </div>
                    </div>


                    <div id='icon' onClick={() => viewport()}>
                        <Image src='/icons/upArrow.svg' alt='Arrow icon up' width={34} height={37} />
                    </div>
                </section>
            </div>
        </Wrap>
    )
}


