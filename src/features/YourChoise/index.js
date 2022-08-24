import React from 'react'
import { PageHead } from '../../shared/ui/head/Head'
import { Wrap } from './YourChoise.Styled'

export const YourChoisePage = () => {
    // url={['/images/head-images/makeup-sm.png', '/images/head-images/makeup-md.png', '/images/head-images/makeup-xl.png']}
    return (
        <Wrap>
            <PageHead
                url={['/images/head-images/your-sm.png', '/images/head-images/your-md.png', '/images/head-images/your-xl.png']}
                title='Выбирай себя'
                body="Курс по проработке самооценки. Учимся уверенности в себе"
            />
        </Wrap>
    )
}
