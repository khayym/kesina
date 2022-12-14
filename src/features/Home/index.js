import { Grid } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { TextAccordion } from '../../shared/components/accordion/Accordion'
import { Banner } from '../../shared/components/banner/Banner'
import { CutomButton } from '../../shared/components/button/Button'
import { Lent } from '../../shared/components/imageLent/Lent'
import { LinedText } from '../../shared/components/lindedText/LinedText'
import { SliderFull } from '../../shared/components/slider-full/SliderFull'
import { Slider } from '../../shared/components/slider/Slider'
import { TextViaSpoiler } from '../../shared/components/text/Text'
import { WpSlider } from '../../shared/components/wp-slider/WpSlider'
import { goToTelegram } from '../../utils/nav'
import { MainPageContainer, NodeSection, Section3, Section4, Section5, Section6, Section7 } from './Home.Styled'

export const HomePage = () => {
    const { push } = useRouter();
    const reff = useRef(null);
    const scrollToBottom = (reff) => reff.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <MainPageContainer>
            <section>
                <div>
                    <h1>Ksenia Shapor</h1>
                    <h3>Школа макияжа и имиджа</h3>
                    <CutomButton func={() => scrollToBottom(reff)}>Ознакомиться</CutomButton>
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
                                С 2014 года я являюсь преподавателем по макияжу и базовым прическам, визажистом,
                                имиджмейкером (училась на персонального стилиста в МИЛАНЕ в 2019 году), ТЕЛЕВЕДУЩЕЙ и экспертом в сфере красоты, женским психологом.
                            </h4>
                            <h4>
                                С 2017 года в Санкт-Петербурге существовала школа макияжа EFFEKTNO, далее я переехала в Москву.
                                На моих курсах побывало БОЛЕЕ 700 учениц. Курсы преподавались в Воронеже, Тюмени, Ростове-на-Дону, Екатеринбурге и других городах.
                                За 7 лет ко мне на курсы приезжали ученицы из Финляндии, Швеции, Израиля и даже США. Многих из которых вы можете увидеть во влогах на YouTube.
                                Я была номинирована на ПРЕМИЮ  PUDRA.RU в номинации Beauty guru, а Питерские Невские берега наградили меня кубком и премией за вклад в развитие индустрии красоты.
                            </h4>
                            <h4>
                                Я ОПЫТНЫЙ преподаватель с большим чувством юмора и необходимой строгостью и я помогу вам измениться!
                            </h4>
                        </TextViaSpoiler>
                    </Grid.Col>
                </Grid>
                {/* <Slider
                    links={['ayA62KjRVN4', 'vPjSwAO4EYs', '8FX4PoUyknc']}
                /> */}
            </section>
            <Section3>
                <LinedText size={60} text='услуги и обучения' className="sectionThreeLinedText" reff={reff} />
                <Banner
                    url={'/images/banner-home/banner-home-1.webp'}
                    title={<h3>Консультация на любую тему</h3>}
                    price={<p><span>9900 руб.</span></p>}
                    buttons={[<CutomButton key={1} func={() => goToTelegram(push)}>Заказать</CutomButton>]}
                    label={[
                        {
                            labelTitle: 'Длительность: ',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['до 1,5 часов'],
                                nodeIcon: false
                            }
                        },
                    ]} />
                <Banner
                    reverse
                    required={'Возможно онлайн'}
                    url={'/images/banner-home/banner-home-2.webp'}
                    title={<h3>стиль</h3>}
                    price={<p><span>34000 руб.</span></p>}
                    buttons={[<CutomButton key={1} func={() => goToTelegram(push)}>Заказать</CutomButton>, <CutomButton key={2} variant={'secondary'} func={() => push('/stil')}>Узнать больше</CutomButton>]}
                    label={[
                        {
                            labelTitle: 'Услуга подойдет Вам, если Вы хотите:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Значительно улучшить свой внешний вид',
                                    'Стать моднее, стильнее и увереннее в себе',
                                    'Найти СВОЙ стиль',
                                    'Понять логику дальнейших покупок',
                                    'Научиться стилю из ИТАЛИИ (где я училась)',
                                ],
                                nodeIcon: 'tic'
                            }
                        },
                        {
                            labelTitle: 'Длительность:',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['время одной встречи до 2 часов , шоппинг сопровождения до 3,5-4 часов'],
                                nodeIcon: false
                            }
                        }
                    ]} />
                <Banner
                    url={'/images/banner-home/banner-home-3.webp'}
                    title={<h3>MAKEUP & HAIR</h3>}
                    price={<p>от <span> 18500 руб.</span> до <span>48500 руб.</span></p>}
                    buttons={[<CutomButton key={1} func={() => goToTelegram(push)}>Заказать</CutomButton>, <CutomButton key={2} variant={'secondary'} func={() => push('/makeup-hair')}>Узнать больше</CutomButton>]}
                    label={[
                        {
                            labelTitle: 'Курс подойдет Вам, если Вы хотите:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Научиться делать макияж для себя ',
                                    'Получить новую ВЫСОКООПЛАЧИВАЕМУЮ  профессию',
                                    'Научиться АКТУАЛЬНЫМ техникам макияжа',
                                    'Научиться базовым укладкам',
                                    'ИЗМЕНИТЬ свою жизнь',
                                ],
                                nodeIcon: 'tic'
                            }
                        },
                        {
                            labelTitle: 'Длительность:',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['время одной встречи до 2 часов , шоппинг сопровождения до 3,5-4 часов '],
                                nodeIcon: false
                            }
                        }
                    ]} />
                <Banner
                    required={'Возможно онлайн'}
                    reverse
                    url={'/images/banner-home/banner-home-4.webp'}
                    title={<h3>ВЫБИРАЙ СЕБЯ — <span className='bfs' style={{ fontWeight: 400, fontSize: '18px', fontFamily: 'Montserrat' }}>Курс по проработке самооценки. Учимся уверенности в себе</span></h3>}
                    price={<p><span> 34000 руб.</span> (есть возможность прохождения только одного блока, тогда его стоимость <span>14500 руб.</span>)</p>}
                    buttons={[<CutomButton key={1} func={() => goToTelegram(push)}>Заказать</CutomButton>, <CutomButton key={2} variant={'secondary'} func={() => push('/your-choise')}>Узнать больше</CutomButton>]}
                    label={[
                        {
                            labelTitle: 'Курс подойдет Вам, если Вы хотите:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Изменить течение Вашей женской энергии',
                                    'Поднять уровень САМООЦЕНКИ',
                                    'Наполниться энергией',
                                    'Перейти на новый этап',
                                ],
                                nodeIcon: 'tic'
                            }
                        },
                        {
                            labelTitle: 'Длительность:',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['время одной встречи до 2 часов , шоппинг сопровождения до 3,5-4 часов '],
                                nodeIcon: false
                            }
                        }
                    ]} />
            </Section3>
            <Section4>
                <SliderFull />
            </Section4>

            <NodeSection>
                <LinedText size={60} text='Преимущества' className="sectionThreeLinedText" />
                <Section5 />
            </NodeSection>

            <Section6>
                <LinedText size={60} text='вопросы и ответы' className="sectionThreeLinedText" />
                <TextAccordion />
            </Section6>

            <Section7>
                <LinedText size={60} text='отзывы' className="sectionThreeLinedText" />
                <WpSlider />
            </Section7>

        </MainPageContainer>
    )
}


