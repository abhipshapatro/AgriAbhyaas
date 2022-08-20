import logo from './logo.svg';
import './App.css';
import Section from './components/Section';
import QuestionPage from './components/QuestionPage';

function App() {
  return (
    <div className="home">
      {/* section page */}
      <Section path='/' />
      {/* question page */}
      <QuestionPage path='/questionpage' />
    </div>
  );
}

export default App;
