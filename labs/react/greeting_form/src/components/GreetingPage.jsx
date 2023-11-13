import { useState } from 'react';
import Greeting from './Greeting';

function GreetingPage() {
  const [greetings, setGreetings] = useState([
    {greeting: 'Hello', firstName: 'Jim', lastName: 'Halpert'},
    {greeting: 'Hi', firstName: 'Michael', lastName: 'Scott'},
    {greeting: 'Yo', firstName: 'Dwight', lastName: 'Schrute'}
  ]);

  return (
    <div id="greetings">
      <div id="container">
        {greetings.map((greeting, index) =>
          <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        )}
      </div>
    </div>
  );
}

export default GreetingPage;