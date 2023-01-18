import { useCallback, useEffect, useRef, useState } from "react"
import "./Dark-mode.css"

// type ThemeType = 'dark' | 'light' | 'system';

export const DarkMode = () => {
    // const {theme, setThemeState} =  useState<ThemeType>(
    //     (localStorage.getItem('theme') as 'dark' | 'light') ?? 'system'
    // );

    // const setTheme = (themeType: ThemeType): void => {
    //     let newTheme = themeType;
    //     if (theme === 'system' && newTheme !== 'system') {
    //         const prefersdark = window.matchMedia('(prefers-color-schema: dark)').matches;

    //         newTheme = prefersdark ? 'light' : 'dark';
    //     }

    //     setThemeState(themeType);
    // };
    // useEffect(() => {
    //     const root = window.document.documentElement;
    //     if (theme !== 'system') {
    //         root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    //         root.classList.add(theme);
    //         localStorage.setItem('theme', theme);
    //     } else{
    //         mediaListener.current();
    //         localStorage.removeItem('theme');
    //     }
    // },[theme])
    // const handleMediaQuery = useCallback(() =>{
    //     const root = window.document.documentElement;
    //     const prefersdark = window.matchMedia(
    //         '(prefers-color-schema: dark)',
    //         ).matches;
    //     if (theme == 'system') {
    //         root.classList.remove(prefersdark ? 'light' : 'dark');
    //         root.classList.add(prefersdark ? 'light' : 'dark');
    //     }

    // }, [theme]);

    // const mediaListener = useRef(handleMediaQuery);
    // mediaListener.current = handleMediaQuery;

    // useEffect(() => {
    //     const handler = () => mediaListener.current();
    //     const media = window.matchMedia('(prefers-color-schema: dark)');
    //     media.addEventListener('change', handler);

        
    //     handler();
    //     return () =>removeEventListener('change', handler);
    // }, [])

    // return [theme, setTheme] as const;
    return<label className="switch">
<input type="checkbox" />
<span className="slider"/>

    </label>
}