import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import cliente from "../../assets/cliente.png"
import freelancer from "../../assets/freela.png"
import { Link } from "../../componentes/Link/Link";
import { Link as RouterLink } from "react-router-dom"
import { useCadastroUsuarioContext } from "../../contexto/ContextoUsuario";

const SelecaoCliente = () => {
    const {setPerfil} = useCadastroUsuarioContext()
    return (
        <>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink style={{textDecoration: 'none', color: 'inherit'}} to="interesses" onClick={() => setPerfil('cliente')}>
                        <img src={cliente} alt="" />
                        <Tipografia variante='body' componente='body'>
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="" />
                    <Tipografia variante='body' componente='body'>
                        Sou freela e preciso de cliente!
                    </Tipografia>
                </Col>
            </Row>
            <div style={{ textAlign: 'center' }}>
                <Tipografia variante='body2' componente='body2'>
                    Já tem conta?
                </Tipografia>
                <Link variante="primaria">
                    Faça login
                </Link>
            </div>
        </>
    )
}

export default SelecaoCliente;