import React from 'react'
import { Footer } from '../shared/ui/Footer/Footer'
import { Header } from '../shared/ui/Header/Header'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
