import styles from './ThemeSwitcher.module.css'
import { useState, useEffect } from 'react'

//ICONS 
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline'

// Custom hooks
import {useLocalStorage} from '../Hooks/useLocalStorage';

export const ThemeSwitcher = () => {
    const [hue, setHue] = useLocalStorage('react-todo.color', '240')
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage('todoVR.theme', defaultDark ? "dark" : "light" )
    const [isColorPicking, setIsColorPicking] = useState(false)
    
    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
      }, [theme])
    
      useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue);
      }, [hue])

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? 'hsl(var(--muted) / .6)'
          : 'transparent'
      }}
    >
        {
            isColorPicking
            ? (
                <>
                <button
                    className={`btn ${styles.close}`}
                    aria-label="Close color picking mode"
                    onClick={() => setIsColorPicking(false)}
                >
                <XMarkIcon />
            </button>
                <input  
                        className={styles.picker}
                        type="range" 
                        min="0"
                        max="360"
                        aria-label='Change color theme slider'
                        value={hue}
                        onInput={(e) => setHue(e.target.value)}
                
                />
                </>
            )
            :(
                <div className={styles.btns}>
                    <button className='btn'
                            aria-label={`changer le theme : ${theme === "light" ? "dark" : "light"}`}
                            role="switch"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme ==="dark" ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button className='btn'
                            aria-label='activer changement de couleur'
                            onClick={() => setIsColorPicking(true)}
                    >
                        <SwatchIcon />
                    </button>
                </div>
            )
        }
    </aside>
  )
}
