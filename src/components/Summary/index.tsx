import { Container } from './styles';

import SVGIncome from '../../assets/income.svg';
import SVGOutcome from '../../assets/outcome.svg';
import SVGTotal from '../../assets/total.svg';

export function Summary()  {
  return(
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={SVGIncome} alt="Entradas"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={SVGOutcome} alt="Saída"/>
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={SVGTotal} alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
};