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
    width:100%;
    height:100%;
    
    iframe{
    width:100%;
    height:100%;
    border-radius: 30px;
    }
}

@media (max-width:${({ theme: { breakPoints } }) => breakPoints.xs}){
    max-width: 272px;
    max-height: 210px;
}
`