import React from 'react'
import { Lent } from '../../shared/components/lent/Lent'
import { MakeUpWrap, SectionOne } from './MakeUp.Styled'
import Image from 'next/image';


export const MakeUpHairPage = () => {
    return (
        <MakeUpWrap>
            <SectionOne>
                <div className='hClass'>
                    <h1>обучение MAKEUP & HAIR</h1>
                    <h4>Одно или несколько предложений об обучении.</h4>
                    <Image src='/icons/arrow.svg' alt='Arrow icon down' width={34} height={47} />
                </div>
                <div className="makeUpSecionDivOne">
                    <Lent url={'/images/makeUpPage/head.png'} position='left' />
                </div>
            </SectionOne>
        </MakeUpWrap>
    )
}
