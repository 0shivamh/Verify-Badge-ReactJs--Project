
import './App.css';
import Footer from './Component/footer.component';
import Header from './Component/header.component';
import Navbar from './Component/navbar.component';

function App() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
