import { StyledButton } from './Button.Styled'
export const CutomButton = ({ children, variant = 'primary', sty, func }) => {
    return (
        <StyledButton style={sty} variant={variant} onClick={() => func && func()} >{children}</StyledButton>
    )
}
