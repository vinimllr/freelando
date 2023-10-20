import styled from "styled-components";
import logo from "../../assets/logoFreelando.svg"

const CabecalhoEstilizado = styled.header`
    background: ${props => props.theme.cores.secundarias.a};
    padding: ${props => props.theme.espacamentos.m} 120px;
    display: flex; 
    justify-content: space-between;
    align-items: center; 
`

const Logo = styled.figure`
    width: 246.482px;
    height: 56px; 
`

const BotaoLogin = styled.a`
    text-decoration: none;
    color: ${props => props.theme.cores.branco};
`

const Cabecalho = () => {
    return (
        <CabecalhoEstilizado>
            <Logo>
                <img src={logo} alt="Logo da Freelando" />
            </Logo>
            <nav>
                <BotaoLogin href="#">Login</BotaoLogin>
            </nav>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;