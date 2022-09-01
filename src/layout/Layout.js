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
        <div ref={viewport} style={{ border: "1px solid #fff", height: "98vh", display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <h1 style={{ fontSize: "200px" }}>Not working</h1>
            {/* <Header />
            {children}
            <Footer viewport={scrollToTop} /> */}
        </div>
    )

}
