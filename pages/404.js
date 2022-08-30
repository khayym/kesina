import { useRouter } from "next/router";
import styled from "styled-components"
import { CutomButton } from "../src/shared/components/button/Button"
import { Image } from '@mantine/core';
export default function Custom404() {
    const { push } = useRouter();
    const goToHome = (navigation) => {
        navigation('/')
    }
    return <Wrap>
        <Image src={'/icons/404.svg'} alt='404' onClick={() => goToHome(push)} className='svg404' />
        <h2>
            Кажется, что-то пошло не так! запрашиваемая вами страница не существует. возможно она устарела, была удалена или был введен неверный адрес в адресной строке.
        </h2>
        <div className='btn404'>
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

    .btn404{
        display:none;
    }
    h2 {
        display:none;
        align-self: baseline;
        position: relative;
        text-align:center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFF7EF;
        margin:0 5rem 4rem 5rem;
    };

    @media(max-width:1200px){
        .svg404{
            display:none;
        }

        .btn404{
            display:block;
        }

        h2{
            display:flex !important;
        }
    }
    /* overflow:hidden !important; */
`