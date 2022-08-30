import { Accordion } from '@mantine/core'
import Image from 'next/image'
import styled from 'styled-components'

export const TextAccordion = () => {
    return (
        <Accord
            variant="filled"
            transitionDuration={400}
            chevron={<Image src={'/icons/plus.svg'} width={35} height={35} alt='plus-icon' />}
        >
            <Accord.Item value="customization">
                <Accord.Control>Я хочу получить профессию визажиста-стилиста. Подойдет ли мне курс База</Accord.Control>
                <Accord.Panel>Курс База подходит для новичков в визаже и для тех, кто хочет получить базовые знания. И погрузиться в профессию визажиста-стилиста.
                </Accord.Panel>
            </Accord.Item>

            <Accord.Item value="flexibility">
                <Accord.Control>Как получить стилистическую услугу?</Accord.Control>
                <Accord.Panel>Вы можете получить стилистическую услугу, нажав на кнопку Купить или Хочу заказать и написав в открывшийся WhatsApp-чат.</Accord.Panel>
            </Accord.Item>

            <Accord.Item value="Можно ли оплатить курсы в рассрочку">
                <Accord.Control>Можно ли оплатить курс в рассрочку?</Accord.Control>
                <Accord.Panel>В рассрочку можно оплатить обучение Визажист-стилист  —  минимальная сумма оплаты 10500 рублей.</Accord.Panel>
            </Accord.Item>
            <Accord.Item value="focus-ring">
                <Accord.Control>Подойдёт ли мне курс База, если у меня нет опыта в макияже?</Accord.Control>
                <Accord.Panel>Курс База подходит всем. И тем, кто только начинает погружение в макияж и не имеет опыта.</Accord.Panel>
            </Accord.Item>
        </Accord>
    )
}

const Accord = styled(Accordion)`
    color:#fff;
    font-style:italic;
    font-weight:200;
    background-color:transparent;
    .mantine-Accordion-label{
            /* Текст УТП */

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            /* identical to box height, or 34px */
            color: #FFFFFF;
            
            @media(max-width:${({ theme: { breakPoints } }) => '577px'}){
                font-size:18px;
            }
    }
    .mantine-Accordion-item{
        background-color:transparent;
    }
`