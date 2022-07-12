import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div class = "App">
      <Header name="Test Header" id ="test"/>
      <Content name="Test Content" ad1 = "ad1" ad2 = "ad2"/>
      <Footer name="Test footer"/>
    </div>
  );
}

export default App;



