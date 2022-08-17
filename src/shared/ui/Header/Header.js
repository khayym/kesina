import React from 'react'
import Link from 'next/link';

export const Header = () => {
    return (
        <header style={{ border: '1px solid #fff', gap: '2rem', display: 'flex' }}>
            <Link href="/makeup-hair">Make-up & Hair</Link>
            <Link href="/stil">Стиль</Link>
            <Link href="/your-choise">выбирай себя</Link>
            <a to='javascript:void(0)'
                onClick={() => window.location = 'mailto:xeyyam.kerimov@gmail.com'}>
                Contact Me
            </a>
        </header>
    )
}
