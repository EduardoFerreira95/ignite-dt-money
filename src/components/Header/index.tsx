import { Container, Content } from './styles';
import SVGLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={SVGLogo} alt="dt money"/>
        <button>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}