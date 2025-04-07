import About from './about/about';
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
        <Massage />
        <About />
        <Contacts />
        <Map />
      </section>
    </LangProvider>
  );
}

export default App;
