import { useRouter } from 'next/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyles'
import { theme } from '../../styles/theme'
import { Layout } from '../layout/Layout'

const AppProvider = ({ children }) => {
    const { route } = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {
                route !== '/404' ? <Layout>
                    {children}
                </Layout> : children
            }
        </ThemeProvider>
    )
}

export default AppProvider