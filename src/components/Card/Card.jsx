import styled from "styled-components"

const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.primarias.a};
    border: 1px solid ${props => props.theme.cores.secundarias.a};
    border-radius: ${props => props.theme.espacamentos.s};
`

const Card = ({ children }) => {
    return (
        <DivEstilizada>
            {children}
        </DivEstilizada>
    )
}
export default Card;