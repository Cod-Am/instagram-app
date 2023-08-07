import './App.css';
import Nav from './components/NavBar/Nav';
import Info from './components/RightInfoPane/Info';
import Content from './components/Content/Content';
function App() {
  return (
    <div className="App">
      {/* left navbar */}
      <Nav/>
      {/* posts */}
      <Content />
      {/* info */}
      <Info />
    </div>
  );
}

export default App;
