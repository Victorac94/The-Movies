import React, { useState, useEffect, useCallback } from 'react';

export const appContext = React.createContext({
    isMenuShowing: false,
    language: 'en',
    movie: null,
    tv: null,
    showMenu: () => { },
    hideMenu: () => { },
    toggleLanguage: () => { },
    setMovie: () => { },
    setTv: () => { }
});

const AppContextProvider = props => {
    const [menuState, setMenuState] = useState(false);
    const [language, setLanguage] = useState('en');
    const [movie, setMovie] = useState(null);
    const [tv, setTv] = useState(null);

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

    // Menu
    const showMenu = () => {
        setMenuState(true);
    };

    const hideMenu = () => {
        setMenuState(false);
    };

    // Genres
    const setMovieGenres = movieGenres => {
        const englishOptions = [{ 'top_rated': 'Top rated' }, { 'now_playing': 'Now playing' }, { 'popular': 'Popular' }];
        const spanishOptions = [{ 'top_rated': 'Mejor valoradas' }, { 'now_playing': 'En cines' }, { 'popular': 'Popular' }];
        const options = language === 'en' ? englishOptions : spanishOptions;

        setMovie([...options, ...movieGenres]);
    };

    const setTvGenres = tvGenres => {
        const englishOptions = [{ 'top_rated': 'Top rated' }, { 'on_the_air': 'On Air' }, { 'popular': 'Popular' }];
        const spanishOptions = [{ 'top_rated': 'Mejor valoradas' }, { 'on_the_air': 'En emisión' }, { 'popular': 'Popular' }];
        const options = language === 'en' ? englishOptions : spanishOptions;

        setTv([...options, ...tvGenres]);
    };

    return (
        <appContext.Provider value={{ isMenuShowing: menuState, showMenu: showMenu, hideMenu: hideMenu, language: language, toggleLanguage: toggleLanguage, movie: movie, tv: tv, setMovie: setMovieGenres, setTv: setTvGenres }}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider;