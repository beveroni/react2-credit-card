import './style.css';
import { CreditCardInput } from '../../components';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Kreditní karta</h1>
      </header>
      <p>Zadej číslo své kreditní karty.</p>
      <main>
        <CreditCardInput />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
