import React, { useRef } from 'react'
import { Footer } from '../shared/ui/Footer/Footer'
import { Header } from '../shared/ui/Header/Header'

export const Layout = ({ children }) => {
    const viewport = useRef(null);
    const scrollToTop = (viewport) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div ref={viewport}>
            <Header />
            {children}
            <Footer viewport={scrollToTop} />
        </div>)

}
