import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyles'
import { theme } from '../../styles/theme'
import { Layout } from '../layout/Layout'

const AppProvider = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    {children}
                </Layout>
            </ThemeProvider>
        </div>
    )
}

export default AppProvider