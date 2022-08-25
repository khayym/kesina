import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { Banner } from '../../shared/components/banner/Banner';
import { CutomButton } from '../../shared/components/button/Button';
import { Full } from '../../shared/components/full';
import { LinedText } from '../../shared/components/lindedText/LinedText';
import { Round } from '../../shared/components/round/Round';
import { WpSlider } from '../../shared/components/wp-slider/WpSlider';
import { PageHead } from '../../shared/ui/head/Head'
import { goToTelegram } from '../../utils/nav';
import { Container, Wrap } from './YourChoise.Styled'

export const YourChoisePage = () => {
    const viewport = useRef(null);
    const scrollToBottom = () => window.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    const { push } = useRouter();
    return (
        <Wrap ref={viewport}>
            <PageHead
                handleScroll={scrollToBottom}
                url={['/images/head-images/your-sm.png', '/images/head-images/your-md.png', '/images/head-images/your-xl.png']}
                title='Выбирай себя'
                body="Курс по проработке самооценки. Учимся уверенности в себе"
            />
            <Container>
                <LinedText text='об обучении “Выбирай себя”' size={60} left={false} right={false} />
                <Banner
                    url={'/images/your/1.png'}
                    url2={'/images/your/2.png'}
                    top
                    thin
                    title={<h3>Выбирай себя</h3>}
                    price={<p>Стоимость: <span>29000 руб</span> (есть возможность прохождения только одного блока, тогда его стоимость <span>14500 руб</span>)</p>}
                    buttons={[<CutomButton sty={{ marginBottom: '2rem' }} key={1} func={() => goToTelegram(push)}>Хочу записаться!</CutomButton>]}
                    label={[
                        {
                            labelTitle: 'Если Вы хотите:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Изменить течение Вашей женской энергии',
                                    'Поднять уровень САМООЦЕНКИ',
                                    'Наполниться энергией ',
                                    'Перейти на НОВЫЙ ЭТАП',
                                ],
                                nodeIcon: 'dots'
                            }
                        },
                        {
                            labelTitle: '3 обучающие индивидуальные сессии:',
                            nodes: {
                                nodeStyle: 'column',
                                childs: [
                                    'Диагностика запроса личная онлайн или offline встреча, беседа с применением практик и психологических приемов, которая ПОМОЖЕТ СОБРАТЬСЯ и понять дальнейший алгоритм ваших действий',
                                    'Психология внешнего вида, как Вы себя подаёте, что следует изменить и почему. Работа С ВНУТРЕННИМ И ВНЕШНИМ. Разбираем внешний вид, даю советы по гардеробу и макияжу',
                                    'Практика, которую я привезла из Зимбабве, на наполнение и возврат энергии. Разбор типовой модели личных отношений. Конкретно разбираем что нужно изменить чтобы достичь желаемой модели (БАЛАНС МУЖСКОГО И ЖЕНСКОГО)',
                                ],
                                nodeIcon: 'dots'
                            }
                        },
                        {
                            labelTitle: 'Условия:',
                            nodes: {
                                nodeStyle: 'row',
                                childs: ['время занятий не ограничено, дни и время по договоренности. В среднем 4 часа на одну сессию'],
                                nodeIcon: false
                            }
                        },
                    ]} />

                <div style={{ marginTop: '5rem', marginBottom: '5rem' }} >
                    <LinedText text='почему я?' size={60} />
                    <Round />
                </div>

                <LinedText text='отзывы' size={60} />
                <WpSlider />
            </Container>
            <Full />
        </Wrap>
    )
}
