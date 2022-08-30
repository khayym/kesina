import styled from 'styled-components'

export const CardWrapper = styled.div`
border: 1px solid #000000;
border-radius: 30px;
max-width:415px;
position: relative;
width:100%;
height:100%;
max-height:320px;

:hover{
    cursor: pointer;
}
.youtube-card{
    width:100% !important;
    height:100% !important;
    /* width:100%;
    height:100%;
     */
    iframe{
    width:100% !important;
    height:100% !important;
    border-radius: 30px;
    }
}

@media (max-width:${({ theme: { breakPoints } }) => breakPoints.xs}){
    /* max-width: 292px; */
    width: 95%;
    max-height: 210px;
    min-height:208px;
}
`