import { Outlet } from 'react-router-dom';
import components from './index';

const { Header, Footer } = components;

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}