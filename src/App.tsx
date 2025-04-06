import About from './about/about';
import Book from './book/book';
import Contacts from './contacts/contacts';
import Hero from './hero/hero';
import { LangProvider } from './langContext/langContext';
import Map from './map/map';
import Massage from './massage/massage';
import Nav from './nav/nav';

function App() {
  return (
    <LangProvider>
      <section id='app'>
        <Nav />
        <Hero />
        <Contacts />
        {/* <Book /> */}
        <About />
        <Massage />
        <Contacts />
        <Map />
      </section>
    </LangProvider>
  );
}

export default App;
