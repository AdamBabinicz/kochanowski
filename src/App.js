import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <main>
      <ScrollToTop />
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
