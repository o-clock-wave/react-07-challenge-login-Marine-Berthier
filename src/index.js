// == Import : npm
import React from 'react';
import { render } from 'react-dom';


// == Import : local
// Styles de base
import 'src/styles/index.scss';
// Composant racine
import App from 'src/components/App';


// == Render

const rootComponent = <App />;

const target = document.getElementById('root');


render(rootComponent, target);
