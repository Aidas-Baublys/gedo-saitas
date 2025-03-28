import About from './about/about';
import Book from './book/book';
import Contacts from './contacts/contacts';
import Hero from './hero/hero';
import Massage from './massage/massage';
import Nav from './nav/nav';

function App() {
  return (
    <section id='app'>
      <Nav />
      <Hero />
      <Contacts />
      <Book />
      <About />
      <Massage />
      <Contacts />
    </section>
  );
}

export default App;
