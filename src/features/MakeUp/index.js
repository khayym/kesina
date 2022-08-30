import React, { useRef } from 'react'
import { Container, MakeUpWrap } from './MakeUp.Styled'
import { PageHead } from '../../shared/ui/head/Head';
import { LinedText } from '../../shared/components/lindedText/LinedText';
import { Banner2 } from '../../shared/components/banner-2/Banner2';
import { SimpleGrid } from '@mantine/core';
import { Banner3 } from '../../shared/components/banner-3/Banner3';
import { Round } from '../../shared/components/round/Round';
import { WpSlider } from '../../shared/components/wp-slider/WpSlider'
import Image from 'next/image';
import { Full } from '../../shared/components/full';
import { Galery } from '../../shared/components/galery/Galery';

export const MakeUpHairPage = () => {
    const viewport = useRef(null);
    const reff = useRef(null);

    const scrollToBottom = (reff) => reff.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <MakeUpWrap ref={viewport}>
            <PageHead
                handleScroll={() => scrollToBottom(reff)}
                url={['/images/head-images/makeup-sm.webp', '/images/head-images/makeup-md.webp', '/images/head-images/makeup-xl.webp']}
                title='обучение MAKEUP & HAIR'
            // body={'Одно или несколько предложений об обучении.'}
            />

            <Container>
                <section>
                    <LinedText text='варианты обучения makeup&HAIR' left={false} right={false} size={60} reff={reff} />
                    <SimpleGrid
                        cols={3}
                        spacing="lg"
                        breakpoints={[
                            { maxWidth: 'md', cols: 1, spacing: 50 },
                            { maxWidth: 'sm', cols: 1, spacing: 50 },
                            { maxWidth: 'xs', cols: 1, spacing: 50 },
                        ]}
                    >
                        <Banner2
                            number={'/images/banner-makeup/1/text.svg'}
                            url={['/images/banner-makeup/1/1-sm.webp', '/images/banner-makeup/1/1-xl.webp']}
                            title='визажист-стилист'
                            lists={[{
                                name: 'Если Вы хотите:',
                                cols: [
                                    'Получить новую ВЫСОКООПЛАЧИВАЕМУЮ профессию',
                                    'Научиться АКТУАЛЬНЫМ техникам макияжа',
                                    'Научиться базовым укладкам',
                                    'ИЗМЕНИТЬ свою жизнь'
                                ]
                            },
                            {
                                name: 'Индивидуальный курс из 10 занятий:',
                                cols: [
                                    '5 макияжей (дневной, , свадебный, креативный)',
                                    '4 укладки (легкие локоны, голливудские волны, объемная укладка, свадебная прическа пучок) ',
                                    '3 теории (общая, продвижение, инструменты мастера)',
                                ]
                            }
                            ]}
                            price={[
                                {
                                    title: 'Стоимость:',
                                    price: <div><span> 48500 руб</span> (есть возможность оплачивать в рассрочку по <span>10500 руб</span> )</div>
                                },
                                {
                                    title: 'Условия:',
                                    price: <div> время занятий не ограничено, дни и время по договоренности</div>
                                },
                                {
                                    title: 'Результат:',
                                    price: <div>сертификат, портфолио и подарок</div>
                                },
                            ]}
                        />
                        <Banner2
                            number={'/images/banner-makeup/2/text.svg'}
                            url={['/images/banner-makeup/2/2-sm.webp', '/images/banner-makeup/2/2-xl.webp']}
                            title='База'
                            lists={[{
                                name: 'Если Вы хотите:',
                                cols: [
                                    'Начать свое погружение в визаж с ЛЕГКОГО И ИНТРЕСНОГО обучения',
                                    'Выучить все формы лица и цветотипы',
                                    'Изучить АКТУАЛЬНЫЕ техники макияжа',
                                ]
                            },
                            {
                                name: 'Индивидуальный курс из 5 занятий:',
                                cols: [
                                    '1 вводная теория',
                                    '4 вида макияжа (легкий смоки, голливудский со стрелками, яркий макияж)',
                                    'Все актуальные и продающиеся техники макияжа',
                                    'Все формы лица и цветотипы',
                                ]
                            }
                            ]}
                            price={[
                                {
                                    title: 'Стоимость:',
                                    price: <div><span>29500 руб</span></div>
                                },
                                {
                                    title: 'Условия:',
                                    price: <div>время занятий не ограничено, дни и время по договоренности</div>
                                },
                                {
                                    title: 'Результат:',
                                    price: <div>сертификат и портфолио</div>
                                },
                            ]}
                        />
                        <Banner2
                            number={'/images/banner-makeup/3/text.svg'}
                            url={['/images/banner-makeup/3/3-sm.webp', '/images/banner-makeup/3/3-xl.webp']}
                            title='макияж для себя'
                            lists={[{
                                name: 'Если Вы хотите:',
                                cols: [
                                    'Научиться делать САМИМ СЕБЕ макияж',
                                    'Научиться рисовать стрелки, подбирать тон и растушевывать тени',
                                ]
                            },
                            {
                                name: 'Индивидуальный курс из 3 занятий:',
                                cols: [
                                    'Разбор косметички',
                                    'Подходящий Вам вечерний макияж',
                                    'Все актуальные и продающиеся техники макияжа',
                                    'Макияж на Ваш выбор или по моей рекомендации',
                                ]
                            }
                            ]}
                            price={[
                                {
                                    title: 'Стоимость:',
                                    price: <div><span>18500 руб</span></div>
                                },
                                {
                                    title: 'Условия:',
                                    price: <div>время занятий не ограничено, дни и время по договоренности</div>
                                },
                                {
                                    title: 'Результат:',
                                    price: <div>сертификат</div>
                                },
                            ]}
                        />
                    </SimpleGrid>
                </section>
                <section>
                    <LinedText text='услуга' size={60} />
                    <Banner3 />
                    <LinedText text='почему я?' size={60} />
                    <Round />
                    <LinedText text='отзывы' size={60} />
                    <WpSlider />
                </section>
            </Container>
            <Full />
            <Container>
                <LinedText text='Галерея' size={60} />
                <Galery imgs={[
                    '/cards/makeup/1.webp',
                    '/cards/makeup/2.webp',
                    '/cards/makeup/3.webp',
                    '/cards/makeup/4.webp',
                    '/cards/makeup/5.webp',
                    '/cards/makeup/6.webp',
                ]} />
            </Container>
        </MakeUpWrap>
    )
}
