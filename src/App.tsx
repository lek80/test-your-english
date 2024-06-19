import QuestionFieldSet from './components/QuestionFieldSet';
import Header from './components/commons/Header';
import Subheader from './components/commons/Subheader';
import Wrapper from './components/commons/Wrapper';

function App() {
  return (
    <div id='questionnaire' className='bg-background-main min-h-screen flex justify-center'>
      <Wrapper>
        <Header title='General English' />
        <Subheader title='Test Your English' />
        <div id='questionnaire__container' className='p-4'>
          <QuestionFieldSet />
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
