import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyles'
import { theme } from '../../styles/theme'
import { Layout } from '../layout/Layout'

const AppProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
    )
}

export default AppProvider