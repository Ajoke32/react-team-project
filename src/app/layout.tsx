'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import Header from '@/components/Header/Header';
import NotificationModal from '@/components/NotificationModal/NotificationModal';
import { NotificationContextWrapper } from '@/components/NotificationsContext/NotificationContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NotificationContextWrapper>
                    <Header
                        titles={[
                            { id: 1, title: 'About as', href: '/about' },
                            { id: 2, title: 'Support', href: '/support' },
                            { id: 3, title: 'Dashboard', href: '/dashboard' },
                        ]}
                    />
                    {children}
                </NotificationContextWrapper>
            </body>
        </html>
    );
}
