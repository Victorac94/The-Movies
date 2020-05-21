import React, { useState } from 'react';

export const appContext = React.createContext({
    language: 'en',
    toggleLanguage: () => { },
});

const AppContextProvider = props => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');


    // Change application language and save to local storage
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
    };

    return (
        <appContext.Provider value={{ language: language, toggleLanguage: toggleLanguage }}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider;