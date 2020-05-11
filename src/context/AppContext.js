import React, { useState } from 'react';

export const appContext = React.createContext({
    theme: 'dark',
    isMenuShowing: false,
    language: 'en',
    toggleTheme: () => { },
    showMenu: () => { },
    hideMenu: () => { },
    toggleLanguage: () => { }
});

const AppContextProvider = props => {
    const [menuState, setMenuState] = useState(false);
    const [language, setLanguage] = useState('en');

    const showMenu = () => {
        setMenuState(true);
    }

    const hideMenu = () => {
        setMenuState(false);
    }

    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('es');
        } else {
            setLanguage('en');
        }
    }

    return (
        <appContext.Provider value={{ isMenuShowing: menuState, showMenu: showMenu, hideMenu: hideMenu, language: language, toggleLanguage: toggleLanguage }}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider;