import React from 'react';

import './app.scss';
import Intro from 'src/components/Intro';
import Form from 'src/components/Form';
import Password from 'src/components/Password';

const App = () => (
  <main className='app'>
  <Intro />
  <Form />
  <Password />
  </main>
);

export default App;
