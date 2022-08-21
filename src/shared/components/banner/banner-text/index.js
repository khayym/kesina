import styled from 'styled-components'

export const BannerText = ({ title, required, label, price, buttonOne, buttonTwo }) => {
    // console.log(label)
    return (
        <BannerTextStyled>
            <h3>{title}</h3>
            {
                required && <p className='banner-text-require'><span>*</span>{required}</p>
            }
            {
                label && label.map((item, index) => {
                    console.log({ item });
                    return (
                        <div key={index}>
                            <p className='banner-text-label'>{item.labelName}</p>
                            {
                                item.labelValue && item.labelValue.map((item, index) => {
                                    return (
                                        <div key={index}>

                                            <p key={index} className='banner-text-value'>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </BannerTextStyled>
    )
}


const BannerTextStyled = styled.div`
    h3{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        text-transform: uppercase;
        color: #FFFDFB;
    }

    .banner-text-require{
        border: 1px solid blue;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;

        span{
            color:#FF2E2E;
        }
    }
` 