import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'


const Nodes = ({ nodes: { childs, nodeIcon }, thin }) => {
    return (
        <NodeWrapper thin={thin}>
            {childs.map((node, i) => (

                <div key={i} className='nodeWrapContainer' id={`${childs?.length > 1 ? 'once' : 'notOnce'}`}>
                    {nodeIcon === 'tic' && <Image src="/icons/clik.svg" alt='clik-icon' className='iconImages' height={11} width={15} />}
                    {nodeIcon === 'dots' && <Image src="/icons/dots.svg" alt='clik-icon' className='iconImages' height={7} width={7} />}
                    <p>{node}</p>
                </div>
            ))}
        </NodeWrapper>
    )
}

export const BannerText = ({ title, required, label, price, buttons, reverse, thin }) => {
    const { route } = useRouter();
    return (
        <BannerTextStyled reverse route={route}>
            {title}
            {
                label.map(({ labelTitle, nodes }, index) => {
                    return (
                        <BannerLable key={index} direction={nodes.nodeStyle}>
                            <p className='labelTitle'>{labelTitle}</p>
                            <Nodes nodes={nodes} thin={thin} />
                        </BannerLable>
                    )
                })
            }
            <div className='bannerPriceDiv'>
                <p>Стоимость: </p>
                {price}
            </div>
            {required && <div className='bannerTextRequired'>*<p>{required}</p></div>}

            <div className='bannerButtonsGroup'>
                {
                    buttons.map(button => button)
                }
            </div>
        </BannerTextStyled>
    )
}


const BannerTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap:22px;
    width: 100%;
    padding-top:1rem;

    .bfs{
        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
            font-family: 'Montserrat' !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 16px !important;
        }
    }

    h3{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        text-transform: uppercase;
        color: #FFFDFB;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
            text-align: center;
            font-size:17px;
        }
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
            text-align: center;
            font-size:20px;
        }
    }

    .bannerTextRequired{
        color:#FF2E2E;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 0.4em;

        p{
            color:#fff;
        }
    }

    .bannerPriceDiv{
        display: flex;
        gap: 15px;

        p:first-child {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color:#fff;
        }

        p:nth-child(2){
            font-family: 'Montserrat';
            font-style: italic;
            font-weight: 400;
            font-size: 15px;

            span{
            font-family: 'Montserrat';
            font-style: italic;
            font-weight: 400;
            font-size: 15px;
            color: #FF2E2E;
            }
        }
    }

    .bannerButtonsGroup{
        display: flex;
        align-items: center;
        gap:15px;
        flex-grow: 1;
        justify-content: ${props => props.route == '/' ? 'flex-start' : 'center'};
        @media(max-width:823px) {
            flex-direction: column;
            margin-bottom: 20px;
        }
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}) {
        margin-top:25px;
        /* align-items: center; */
    }

`

const BannerLable = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    column-gap: 9px;

    .labelTitle{
        /* padding-bottom: 9px; */
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
    }
`

const NodeWrapper = styled.div`
/* margin:0; */
    display:flex;
    flex-direction: column;
    gap:8px;

    #once:first-child {
        margin-top: 15px;
    }

.nodeWrapContainer{

    display: flex;
    align-items: center;
    gap: 0.4em;
}

p{
 font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
color: #FFFFFF;
}

span{
    min-width: 15px !important;
    min-height: 11px !important;
    align-self:center;
}

`