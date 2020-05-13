import React, { useState, useEffect } from 'react';

export const appContext = React.createContext({
    isMenuShowing: false,
    language: 'en',
    showMenu: () => { },
    hideMenu: () => { },
    toggleLanguage: () => { }
});

const AppContextProvider = props => {
    const [menuState, setMenuState] = useState(false);
    const [language, setLanguage] = useState('en');

    // Set initial language
    useEffect(() => {
        const lsLanguage = localStorage.getItem('language');

        if (lsLanguage) {
            setLanguage(lsLanguage);
        } else {
            localStorage.setItem('language', 'en');
        }

    }, []);

    // Change application language
    const toggleLanguage = () => {
        // Change to Spanish
        if (language === 'en') {
            localStorage.setItem('language', 'es');
            setLanguage('es');

            // Change to English
        } else {
            localStorage.setItem('language', 'en');
            setLanguage('en');
        }
    }

    const showMenu = () => {
        setMenuState(true);
    }

    const hideMenu = () => {
        setMenuState(false);
    }

    return (
        <appContext.Provider value={{ isMenuShowing: menuState, showMenu: showMenu, hideMenu: hideMenu, language: language, toggleLanguage: toggleLanguage }}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider;