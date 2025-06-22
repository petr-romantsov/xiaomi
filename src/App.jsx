import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { SectionTitle } from './components/SectionTitle/SectionTitle';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SectionTitle color="pink">Коллекция</SectionTitle>
      <SectionTitle>Коллекция</SectionTitle>
    </div>
  );
}

export default App;
