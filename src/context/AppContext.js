import React, { useState, useEffect } from 'react';

export const appContext = React.createContext({
    language: 'en',
    toggleLanguage: () => { },
});

const AppContextProvider = props => {
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
    };

    // // Genres
    // const setMovieGenres = movieGenres => {
    //     const englishOptions = [{ 'top_rated': 'Top rated' }, { 'now_playing': 'Now playing' }, { 'popular': 'Popular' }];
    //     const spanishOptions = [{ 'top_rated': 'Mejor valoradas' }, { 'now_playing': 'En cines' }, { 'popular': 'Popular' }];
    //     const options = language === 'en' ? englishOptions : spanishOptions;

    //     setMovie([...options, ...movieGenres]);
    // };

    // const setTvGenres = tvGenres => {
    //     const englishOptions = [{ 'top_rated': 'Top rated' }, { 'on_the_air': 'On Air' }, { 'popular': 'Popular' }];
    //     const spanishOptions = [{ 'top_rated': 'Mejor valoradas' }, { 'on_the_air': 'En emisión' }, { 'popular': 'Popular' }];
    //     const options = language === 'en' ? englishOptions : spanishOptions;

    //     setTv([...options, ...tvGenres]);
    // };

    return (
        <appContext.Provider value={{ language: language, toggleLanguage: toggleLanguage }}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider;