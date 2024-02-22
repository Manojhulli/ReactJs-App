import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <NavBar title="ReactJS" ></NavBar>

    <div className="container">
      <TextArea heading="Enter The Text Below "/>
    </div>
    </>
  );
}

export default App;

// commented to check gpg  