import React from 'react'
import { PageHead } from '../../shared/ui/head/Head'
import { Wrap } from './Stil.Styled'

export const StilPage = () => {
    return (
        <Wrap>
            <PageHead
                url={['/images/head-images/stil-sm.png', '/images/head-images/stil-md.png', '/images/head-images/stil-xl.png']}
                title='стиль и шопинг'
                body="Текст об особенностях и принципах обучения у Ксении."
            />
        </Wrap>
    )
}
