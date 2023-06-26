import type { AppProps } from 'next/app';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import { AuthProvider } from '../contexts/authcontext';
import { LayoutProvider } from '../contexts/layoutcontext';
import Layout from '../layout/layout';
import '../styles/layout/layout.scss';
import type { Page } from '../types/types';

type Props = AppProps & {
    Component: Page;
};

export default function MyApp({ Component, pageProps }: Props) {
    if (Component.getLayout) {
        return <AuthProvider>
            <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>
        </AuthProvider>;
    } else {
        return (
            <AuthProvider>
                <LayoutProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </LayoutProvider>
            </AuthProvider>
        );
    }
}
