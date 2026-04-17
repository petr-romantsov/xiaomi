import { useMediaQuery } from '@/hooks';
import {
  Backstage,
  Collection,
  Concept,
  Contest,
  Filters,
  FirstBlock,
  Footer,
  Header,
  Hero,
  VideoBlock,
} from '@/shared/components';

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Header />
      <FirstBlock />
      <Hero />
      <Concept />
      <Filters />
      {isMobile && <Contest />}
      <Collection />
      <VideoBlock />
      <Backstage />
      <Footer />
    </>
  );
}

export default App;
