import { Image } from "@mantine/core"
import { useRouter } from "next/router";
import styled from "styled-components"
import { CutomButton } from "../src/shared/components/button/Button"

export default function Custom404() {
    const { push } = useRouter();
    const goToHome = (navigation) => {
        navigation('/')
    }
    return <Wrap>
        <h2>
            Кажется, что-то пошло не так! запрашиваемая вами страница не существует. возможно она устарела, была удалена или был введен неверный адрес в адресной строке.
        </h2>
        <div>
            <CutomButton key={1} func={() => goToHome(push)}>Перейти на главную</CutomButton>
        </div>
    </Wrap>
}

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: '#232323' ;
    height: 95vh;
    h2 {
        align-self: baseline;
        position: relative;
        text-align:center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFF7EF;
        margin:0 5rem 4rem 5rem;
    }
    /* overflow:hidden !important; */
`