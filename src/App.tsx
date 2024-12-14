import { useEffect } from 'react';
import './index.css';

export default function App() {

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark')
        }
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.add('light')
        }
    }, []);

    const toggleTheme = () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        }
        else {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }

    return (
        <div className="App">
            <hgroup>
                <h1>Hello, World!</h1>
                <p>What's on your mind?</p>
            </hgroup>
            <button className="btn" onClick={toggleTheme}>TOGGLE</button>
        </div>
    )
}