import { useState } from 'react';
import Greeting from './Greeting';

function GreetingPage() {
  const [greetings, setGreetings] = useState([
    {greeting: 'Hello', firstName: 'Jim', lastName: 'Halpert'},
    {greeting: 'Hi', firstName: 'Michael', lastName: 'Scott'},
    {greeting: 'Yo', firstName: 'Dwight', lastName: 'Schrute'}
  ]);

  const [formData, setFormData] = useState({greeting: "", firstName: "", lastName: ""});

  function handleSubmit(e) {
    e.preventDefault();
    setGreetings((previousGreetings) => [...previousGreetings, formData]);
  }

  return (
    <div id="greetings">
      <div id="container">
        {greetings.map((greeting, index) =>
          <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: "10px"}}>
          <label htmlFor="greeting-input">Greeting:&nbsp;</label>
          <input type="text" id="greeting-input" value={formData.greeting} onChange={(e) => setFormData({...formData, greeting: e.target.value})} />
        </div>

        <div style={{marginBottom: "10px"}}>
          <label htmlFor="first-name-input">First name:&nbsp;</label>
          <input type="text" id="first-name-input" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        </div>

        <div style={{marginBottom: "10px"}}>
          <label htmlFor="last-name-input">Last name:&nbsp;</label>
          <input type="text" id="last-name-input" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
        </div>

        <button type="submit">Add greeting</button>
      </form>
    </div>
  );
}

export default GreetingPage;