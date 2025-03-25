import About from './about/about';
import Book from './book/book';
import Contacts from './contacts/contacts';
import Hero from './hero/hero';
import Nav from './nav/nav';

function App() {
  return (
    <section>
      <Nav />
      <Hero />
      <Contacts />
      <Book />
      <About />
    </section>
  );
}

export default App;
