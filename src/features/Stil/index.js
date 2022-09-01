import React, { useRef } from 'react'
import { Banner } from '../../shared/components/banner/Banner'
import { CutomButton } from '../../shared/components/button/Button'
import { LinedText } from '../../shared/components/lindedText/LinedText'
import { PageHead } from '../../shared/ui/head/Head'
import { Container, Wrap } from './Stil.Styled'
import { Banner3 } from '../../shared/components/banner-3/Banner3'
import { Image } from '@mantine/core';
import { Round } from '../../shared/components/round/Round'
import { WpSlider } from '../../shared/components/wp-slider/WpSlider'
import { Full } from '../../shared/components/full'
import { Galery } from '../../shared/components/galery/Galery'
import { Slider } from '../../shared/components/slider/Slider'
import { useRouter } from 'next/router'
import { goToTelegram } from '../../utils/nav'


export const StilPage = () => {
    const reff = useRef(null);
    const { push } = useRouter();
    const scrollToBottom = (reff) => reff.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <Wrap>
            <PageHead
                handleScroll={() => scrollToBottom(reff)}
                url={['/images/head-images/stil-sm.webp', '/images/head-images/stil-md.webp', '/images/head-images/stil-xl.webp']}
                title='стиль и шопинг'
            // body="Текст об особенностях и принципах обучения у Ксении."
            />

            <Container>
                <LinedText text='создание имиджа' size={60} reff={reff} />
                <Banner
                    url={'/images/stil/2.webp'}
                    // url2={'/images/stil/2.1.webp'}
                    title={<h3 style={{ textAlign: 'center' }}>стиль</h3>}
                    price={<p><span>29000 руб.</span></p>}
                    buttons={[<CutomButton sty={{ marginBottom: '2rem' }} key={1} func={() => goToTelegram(push)}>Хочу записаться!</CutomButton>]}
                    label={[
                        {
                            labelTitle: 'Если Вы хотите:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Значительно УЛУЧШИТЬ свой внешний вид',
                                    'Стать моднее, стильнее и увереннее в себе',
                                    'Найти СВОЙ стиль',
                                    'Понять логику дальнейших покупок',
                                    'Научиться стилю из ИТАЛИИ (где я училась)',
                                ],
                                nodeIcon: 'dots'
                            }
                        },
                        {
                            labelTitle: '3 личные встречи:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Разбор гардероба или личная беседа о вкусах и предпочтениях',
                                    'Шоппинг-сопровождение',
                                    'Подборка шоурумов и брендов на ваш кошелек по ЛУЧШЕМУ СООТНОШЕНИЮ цена-качество',
                                ],
                                nodeIcon: 'dots'
                            }
                        },
                        {
                            labelTitle: 'Условия:',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['время занятий не ограничено, дни и время по договоренности'],
                                nodeIcon: false
                            }
                        }
                    ]} />
                <div style={{ marginTop: '5rem', marginBottom: '3rem' }}>
                    <LinedText text='индивидуальное обучение' size={60} />
                </div>
                <Banner
                    url={'/images/stil/3.webp'}
                    reverse
                    url2={'/images/stil/3.1.webp'}
                    title={<h3 style={{ textAlign: 'center' }}>«Я-стилист»</h3>}
                    price={<p><span>35000 руб.</span></p>}
                    buttons={[<CutomButton sty={{ marginBottom: '2rem' }} key={1} func={() => goToTelegram(push)}>Хочу записаться!</CutomButton>]}
                    label={[
                        {
                            labelTitle: '3 теории:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Разновидности стилей и типажей',
                                    'Типизация клиентов. ЕВРОПЕЙСКАЯ методика',
                                    'Как найти клиентов',
                                ],
                                nodeIcon: 'dots'
                            }
                        },
                        {
                            labelTitle: '4 практики:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Работа с МАСС-МАРКЕТ сегментом. Куда ведем какого клиента. На что смотреть в масс-маркете, как выработать правильный подход и насмотренность для таких покупок',
                                    'МИДЛ-СЕГМЕНТ в Росии. Едем в основные шоурумы и ателье высокого качества, на что обращаем внимание. Тренды',
                                    'Работа с ЛЮКС-СЕГМЕНТОМ. Типизация брендов, история. Какому бренду какой клиент, как выбирать аксессуары и обувь',
                                ],
                                nodeIcon: 'dots'
                            }
                        },
                        {
                            labelTitle: 'Условия:',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['время занятий не ограничено, дни и время по договоренности, в среднем 2 раза в неделю'],
                                nodeIcon: false
                            }
                        }
                    ]} />
                <LinedText text='услуга' size={60} />
                <Banner3 />
                <div className='licenceLine1'>
                    <LinedText text='Я обучалась в милане' size={60} />
                </div>
                <div className='licence'>
                    <div className='licenceText'>
                        <h2>Я обучалась в милане</h2>
                        <p>В 2019 году я проходила обучение персонального стилиста в Scoula di stile в Милане, Италия. Я усовершенствовала свои знания о моде и стиле, и с удовольствием делюсь ими с вами.</p>
                    </div>
                    <div className='licenceImage' >

                        <Image
                            radius="md"
                            src='/images/stil/4.1.webp'
                            alt="Random unsplash image"
                            // height={592}
                            fit="cover"
                        />
                    </div>
                </div>

                <LinedText text='почему я?' size={60} />
                <Round />
                <LinedText text='отзывы' size={60} />
                <WpSlider />
            </Container>
            <Full />
            <Container>
                <LinedText text='Галерея' size={60} />
                <Galery imgs={[
                    '/cards/still/1.webp',
                    '/cards/still/2.webp',
                    '/cards/still/3.webp',
                    '/cards/still/4.webp',
                    '/cards/still/5.webp',
                    '/cards/still/6.webp',
                ]} />
                <LinedText text='Больше о стиле' size={60} />
                <Slider
                    links={['9AB4zFGHx_k', 'fHh5GiZ2LQo', 'lkM2E7M6P4Q']}
                />

            </Container>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <CutomButton func={() => push('https://www.youtube.com/c/makeksenia')}>Перейти на мой канал</CutomButton>
            </div>
        </Wrap >
    )
}
