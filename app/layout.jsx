import Header from './header/header';
import './normalize.css';
import mainStyles from './main.module.css';

export const metadata = {
    title: 'Accura Plastering Ltd.',
    description: 'Accura website main section',
}

export default function RootLayout({ children }) {
    return (
      <html className={mainStyles.root}>
        <body className={mainStyles.body}>
            <div className={mainStyles.wrapper}>
                <Header/>
                <main className={mainStyles.main}>
                  {children}
                </main>
            </div>
        </body>
      </html>
    )
}