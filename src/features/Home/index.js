import React from 'react'
import { CutomButton } from '../../shared/components/button/Button'
import { Lent } from '../../shared/components/lent/Lent'
import { MainPageContainer } from './Home.Styled'


export const HomePage = () => {
    return (
        <MainPageContainer>
            <section>
                <div>
                    <h1>Ksenia Shapor</h1>
                    <h3>Школа макияжа и имиджа</h3>
                    <CutomButton>Ознакомиться</CutomButton>
                </div>
            </section>

            <section>
                <div className="section1">
                    <div className='sec-lent'>
                        <Lent url='/images/lent1.png' variant={1} />
                    </div>
                    <p>
                        С 2014 года я являюсь преподавателем по макияжу и базовым прическам, визажистом, имиджмейкером (училась на персонального стилиста в Милане в 2019 году), телеведущей и экспертом в сфере красоты, женским психологом.
                        С 2017 года в Санкт-Петербурге существовала школа макияжа EFFEKTNO, далее я переехала в Москву. На моих курсах побывало более 700 учениц. Курсы преподавались в Воронеже, Тюмени, Ростове на Дону, Екатеринбурге и других городах. За 7 лет ко мне на курсы приезжали ученицы из Финляндии, Швеции, Израиля и даже США. Многие из которых вы можете увидеть во влогах на YouTube. Была номинирована на премию PUDRA.RU в номинации Beauty guru, а Питерские Невские берега наградили меня кубком и премией за вклад в развитие индустрии красоты.
                        Я опытный преподаватель с большим чувством юмора и необходимой строгостью и я помогу вам измениться!
                    </p>
                </div>

                {/* -------------------- */}


                <div>
                    <p>slider</p>
                </div>
                {/* <Sd /> */}
            </section>

            <section>
            </section>
            <section>4</section>
        </MainPageContainer>
    )
}
