// import React from 'react'

// export const Button = () => {
//     return (
//         <Button>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum corporis voluptates eligendi in omnis quaerat repellat aliquid non mollitia architecto illo ipsam iure ab, ullam harum vero fugiat veritatis nam amet nihil quam minus animi. Illum quam eveniet voluptate, provident porro eaque qui fuga nihil, consectetur voluptates ipsam soluta!
//         </Button>
//     )
// }

import React from 'react'
import { StyledButton } from './Button.Styled'

export const CutomButton = ({ children, variant = 'primary', sty, onClick }) => {
    return (
        <StyledButton style={sty} variant={variant} onClick={() => onClick()}>{children}</StyledButton>
    )
}
