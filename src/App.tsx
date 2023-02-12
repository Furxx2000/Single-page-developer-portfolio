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
      <RingsImage position='left-[-86%] md:left-[-35%] xl:left-[-7%] top-[15%] md:top-[10%] xl:top-[13%] z-[-10]' />
    </>
  );
}

export default App;
