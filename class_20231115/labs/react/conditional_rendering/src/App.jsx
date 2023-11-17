import './App.css';
import Greeting from './components/Greeting';

function App() {
  const greetings = [
    {greeting: 'Hello', firstName: 'Homer', lastName: 'Simpson'},
    {greeting: 'Hi', firstName: 'Pete', lastName: 'Jones'},
    {greeting: 'Yo', firstName: 'Kim', lastName: 'Possible'},
    {greeting: 'Howdy', firstName: 'Don', lastName: 'Draper'},
  ]
  return (
    <div id="greetings">
      {greetings.map(function(greeting, index) {
        if(greeting.greeting.length >= 4)
          return <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        else
          return <></>
      })}

      {greetings.map((greeting, index) =>
        <>
          {greeting.greeting.length >= 4 ?
            <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
            :
            <></>
          }
        </>
      )}
    </div>
  );
}

export default App;
