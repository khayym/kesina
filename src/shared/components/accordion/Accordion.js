import { Accordion } from '@mantine/core'
import Image from 'next/image'
import styled from 'styled-components'

export const TextAccordion = () => {
    return (
        <Accord
            variant="filled"
            defaultValue="customization"
            transitionDuration={400}
            chevron={<Image src={'/icons/plus.svg'} width={35} height={35} alt='plus-icon' />}
        >
            <Accord.Item value="customization">
                <Accord.Control>Я хочу получить профессию визажиста-стилиста. Подойдет ли мне курс База?</Accord.Control>
                <Accord.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accord.Panel>
            </Accord.Item>

            <Accord.Item value="flexibility">
                <Accord.Control>Как получить стилистическую услугу?</Accord.Control>
                <Accord.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accord.Panel>
            </Accord.Item>

            <Accord.Item value="Можно ли оплатить курсы в рассрочку">
                <Accord.Control>Можно ли оплатить курсы в рассрочку?</Accord.Control>
                <Accord.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accord.Panel>
            </Accord.Item>
            <Accord.Item value="focus-ring">
                <Accord.Control>Подойдет  ли мне курс База, если у меня нет опыта в макияже?</Accord.Control>
                <Accord.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accord.Panel>
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
    }
    .mantine-Accordion-item{
        background-color:transparent;
    }
`