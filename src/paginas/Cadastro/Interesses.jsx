import GrupoRadio from "../../componentes/Radio/GrupoRadio";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../contexto/ContextoUsuario";
import { useEffect } from "react";

const Interesses = () => {
    const {usuario, setInteresse, possoSelecionarInteresse} = useCadastroUsuarioContext()

    const navegar = useNavigate()

    useEffect(() => {
        if (!possoSelecionarInteresse()) {
            navegar('/cadastro')
        }
    }, [navegar, possoSelecionarInteresse])

    const opcoes = [
        {
            valor: 1,
            label: 'TI e Programação',
        },
        {
            valor: 2,
            label: 'Design e Multimídia',
        },
        {
            valor: 3,
            label: 'Revisão',
        },
        {
            valor: 4,
            label: 'Tradução',
        },
        {
            valor: 5,
            label: 'Transcrição',
        },
        {
            valor: 6,
            label: 'Marketing',
        }
    ]

    const nav = useNavigate()
    return (
        <>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Qual a sua área de interesse?
            </Tipografia>
            <GrupoRadio opcoes={opcoes} valor={usuario.interesse} key={opcoes.valor} onChange={setInteresse} />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link onClick={() => nav(-1)}>
                        <Botao variante="secundaria">
                            Anterior
                        </Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/dados-pessoais">
                        <div style={{ textAlign: 'right' }}>
                            <Botao>
                                Próxima
                            </Botao>
                        </div>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Interesses;