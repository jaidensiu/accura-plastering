import React, { ReactNode } from 'react';
import Header from './components/header';
import './normalize.css';
import mainStyles from './main.module.css';

interface Metadata {
    title: string;
    description: string;
}

interface RootLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'Accura website main section',
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html className={mainStyles.root}>
            <body className={mainStyles.body}>
                <div className={mainStyles.wrapper}>
                    <Header />
                    <main className={mainStyles.main}>{children}</main>
                </div>
            </body>
        </html>
    );
}
