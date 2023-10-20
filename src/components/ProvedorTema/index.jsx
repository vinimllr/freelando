import { ThemeProvider } from "styled-components"

export const ProvedorTema = ({children}) => {
    const tema ={
        cores: {
            branco : '#fff',
            atencao : '',
            focus : '',
            primarias: {
                a: '#EBEAF9 ',
                b: '',
                c: ''
            },
            secundarias: {
                a: '#5754ED',
                b: '',
                c: ''
            },
            neutras: {
                a: '#373737',
                b: '',
                c: '',
                d: ''
            },
            dark: {
                a: '',
                b: ''
            }
        },
        espacamentos: {
            xs: '8px',
            s: '16px',
            l: '32px',
            m: '34px',
            xxl: '64px'
        },
        fontFamily: "'Montserrat', sans-serif"
    }
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}