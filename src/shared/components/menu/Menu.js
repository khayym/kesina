import React, { useState } from 'react'
import { Menu, Burger } from '@mantine/core';
import { NextLink } from '@mantine/next';

export const CustomMenu = ({ pathname }) => {
    const [opened, setOpened] = useState(false);


    return (
        <Menu shadow="md" width={150} className="customMenu" >
            <Menu.Target>
                <Burger
                    size={24}
                    opened={opened}
                    color={pathname !== '/' ? '#fff' : '#000'}
                    onClick={() => setOpened((o) => !o)}
                />
            </Menu.Target>

            <Menu.Dropdown style={{ backgroundColor: '#FFF4F4B2' }}>
                <Menu.Item component={NextLink} href="/makeup-hair" style={{ fontSize: '15px', fontWeight: '500' }} onClick={() => setOpened(false)}>
                    Make-up & Hair
                </Menu.Item>
                <Menu.Item component={NextLink} href="/stil" style={{ fontSize: '15px', fontWeight: '500' }} onClick={() => setOpened(false)}>
                    Стиль
                </Menu.Item>
                <Menu.Item component={NextLink} href="/your-choise" style={{ fontSize: '15px', fontWeight: '500' }} onClick={() => setOpened(false)}>
                    выбирай себя
                </Menu.Item>

            </Menu.Dropdown>
        </Menu>
    )
}
