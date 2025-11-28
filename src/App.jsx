import styles from './App.module.scss';
import { Header } from './shared/components/blocks/Header/Header';
import { SectionTitle } from './shared/components/ui/SectionTitle/SectionTitle';
import { Text } from './shared/components/ui/Text/Text';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SectionTitle color="pink">Коллекция</SectionTitle>
      <SectionTitle>Коллекция</SectionTitle>
      <Text color="pink" size="sm">
        Маленький розовый текст
      </Text>
      <Text color="white" size="sm">
        Маленький белый текст
      </Text>
      <Text color="pink">Средний розовый текст</Text>
      <Text color="white">Средний белый текст</Text>
      <Text color="pink" size="lg">
        Большой розовый текст
      </Text>
      <Text color="white" size="lg">
        Большой белый текст
      </Text>
    </div>
  );
}

export default App;
