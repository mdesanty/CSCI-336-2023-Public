import { useState } from 'react';
import Greeting from './Greeting';

function GreetingPage() {
  const [greetings, setGreetings] = useState([
    {greeting: 'Hello', firstName: 'Jim', lastName: 'Halpert'},
    {greeting: 'Hi', firstName: 'Michael', lastName: 'Scott'},
    {greeting: 'Yo', firstName: 'Dwight', lastName: 'Schrute'}
  ]);

  const [formData, setFormData] = useState({greeting: '', firstName: '', lastName: ''});

  return (
    <div>
      <div id="greetings">
        {greetings.map((greeting, index) =>
          <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        )}
      </div>
    </div>
  );
}

export default GreetingPage;