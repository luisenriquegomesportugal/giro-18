import Link from 'next/link';
import { classNames } from 'primereact/utils';
import { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '../types/types';
import AppLogo from './AppLogo';
import { AuthContext } from '../contexts/authcontext';
import { LayoutContext } from '../contexts/layoutcontext';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar, changeTheme, isDesktop } = useContext(LayoutContext);
    const { isAuthenticated, user, login, logout } = useContext(AuthContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const onChangeTheme = () => {
        const colorScheme = layoutConfig.colorScheme === 'light' ? 'dark' : 'light';
        changeTheme(colorScheme);
    }

    const overlayMenuItems = [
        {
            label: 'Sair',
            icon: 'pi pi-sign-out'
        }
    ];


    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <AppLogo />
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>


            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <button type="button" className="p-link text-secondary layout-topbar-button" onClick={onChangeTheme}>
                    <i className={`pi ${layoutConfig.colorScheme !== 'light' ? 'pi-sun' : 'pi-moon'}`}></i>
                    <span>{layoutConfig.colorScheme !== 'light' ? 'Modo Diurno' : 'Modo Noturno'}</span>
                </button>
                {
                    isAuthenticated
                        ?
                        <>
                            <button type="button" className="p-link text-secondary layout-topbar-button force-display" onClick={() => logout()} title="Sair">
                                {
                                    user?.photoURL
                                        ? <img src={user.photoURL} alt={user.displayName || 'USN'} />
                                        : <i className="pi pi-user"></i>
                                }
                                <span>Sair</span>
                            </button>
                        </>
                        : <button type="button" className="p-link text-secondary layout-topbar-button" onClick={() => login()} title="Logar">
                            <i className="pi pi-sign-in"></i>
                            <span>Logar</span>
                        </button>
                }
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
