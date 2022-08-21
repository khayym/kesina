import { Grid, Text, Spoiler } from '@mantine/core'
import React, { useEffect } from 'react'
import { CutomButton } from '../../shared/components/button/Button'
import { Lent } from '../../shared/components/imageLent/Lent'
import { LinedText } from '../../shared/components/lindedText/LinedText'
import { ReadMore } from '../../shared/components/readMore/ReadMore'
import { TextViaSpoiler } from '../../shared/components/text/Text'
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
                <LinedText text='обо мне' className="sectionOneLinedText" />
                <Grid className="section2Grid" columns={24}>
                    <Grid.Col xl={13} lg={13} md={13} sm={13} className='gridCol1'>
                        <Lent />
                    </Grid.Col>
                    <Grid.Col xl={11} lg={11} md={11} sm={11} className='gridCol2'>
                        <LinedText text={'обо мне'} className="sectionOneLinedText2" left={false} size={60} />
                        <TextViaSpoiler>
                            <h4>
                                С 2014 года я являюсь преподавателем по макияжу и
                                базовым прическам, визажистом, имиджмейкером (училась на персонального стилиста в Милане в 2019 году),
                                телеведущей и экспертом в сфере красоты, женским психологом.
                            </h4>
                            <h4>
                                С 2017 года в Санкт - Петербурге существовала школа макияжа EFFEKTNO,
                                далее я переехала в Москву.На моих курсах побывало более 700 учениц.
                                Курсы преподавались в Воронеже, Тюмени, Ростове на Дону, Екатеринбурге и других городах.
                                За 7 лет ко мне на курсы приезжали ученицы из Финляндии, Швеции, Израиля и даже США.
                                Многие из которых вы можете увидеть во влогах на YouTube.Была номинирована на премию PUDRA.RU в
                                номинации Beauty guru, а Питерские Невские берега наградили меня кубком и премией за вклад в развитие
                                индустрии красоты.

                            </h4>
                            <h4>
                                Я опытный преподаватель с большим чувством юмора и необходимой строгостью и я
                                помогу вам измениться!
                            </h4>
                        </TextViaSpoiler>
                    </Grid.Col>
                </Grid>
            </section>
            <section>3</section>
        </MainPageContainer>
    )
}


