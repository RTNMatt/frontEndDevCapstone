
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Logo from './pictures/Logo .svg'




function App() {
  return (
    <>
    <meta name="description" content="Little Lemon Restaurant, Chicago"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="We are a family owned Mediterranean restaurant, focused on traditional recipes serviced with a modern 
    twist."/>
    <meta name="og:image" content={Logo
    }/>
    <Header />
    <Nav />
    <Main />
    <Footer />
    </>
  );
}

export default App;
