import { ThemeProvider } from "styled-components"

export const ProvedorTema = ({children}) => {
    const tema ={
        cores: {
            branco : '',
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
                a: '',
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
            s: '16px',
            l: '32px'
        }
    }
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}