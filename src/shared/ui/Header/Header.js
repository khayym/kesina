import React from 'react'
import Link from 'next/link';
import { HeaderContainer } from './Header.Styled';
import { CustomMenu } from '../../components/menu/Menu';
import { useRouter } from 'next/router'


export const Header = () => {
    const { pathname } = useRouter();
    return (
        <HeaderContainer path={pathname}>
            <div className='linksGroup'>
                <Link href="/makeup-hair">Make-up & Hair</Link>
                <Link href="/stil">Стиль</Link>
                <Link href="/your-choise">выбирай себя</Link>
            </div>
            <div>
                <CustomMenu />
            </div>
            <a to='javascript:void(0)'
                onClick={() => window.location = 'mailto:kseniashaportv@mail.ru'}>
                kseniashaportv@mail.ru
            </a>

        </HeaderContainer >
    )
}
