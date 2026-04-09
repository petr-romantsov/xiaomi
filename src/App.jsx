import {
  Backstage,
  Collection,
  Concept,
  Filters,
  FirstBlock,
  Footer,
  Header,
  Hero,
  VideoBlock,
} from '@/shared/components';

function App() {
  return (
    <>
      <Header />
      <FirstBlock />
      <Hero />
      <Concept />
      <Filters />
      <Collection />
      <VideoBlock />
      <Backstage />
      <Footer />
    </>
  );
}

export default App;
