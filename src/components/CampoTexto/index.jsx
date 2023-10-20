import styled from "styled-components";
import Tipografia from "../Tipografia";

const StyledLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: ${props => props.theme.espacamentos.xs};
`
const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px; 
    border-radius: 16px;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    padding-left: ${props => props.theme.espacamentos.s};
    border: 1px solid ${props => props.theme.cores.neutras.a}; 
`

const CampoTexto = ({ titulo }) => {
    return (
        <StyledLabel>
            <Tipografia componente={'label'} variante={'body'}>{titulo}</Tipografia>
            <StyledInput/>
        </StyledLabel>
    )
}

export default CampoTexto;