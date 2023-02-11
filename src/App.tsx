import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import RingsImage from './components/Content/HeroSection/RingsImage';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <RingsImage position='left-[-86%] md:left-[-35%] top-[15%] md:top-[10%] z-[-10]' />
    </>
  );
}

export default App;
