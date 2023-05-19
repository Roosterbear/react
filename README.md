# React Projects 🪝

### VITE
__Create a new project__<br/>
```linux
>yarn create vite
```
It will ask us for the name of the project (my-app)<br/>
it will ask us the technology (REACT)<br/>
It will ask us the Language (Javascript)<br/>
```linux
>cd my-app
>yarn
>yarn dev
```
Now check that you can have a __main.jsx:__ <br/>
```react
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
Look that ```<App />``` is the name of our Component.

__props__ <br />
We have to add props manually:<br />
```linux
>yarn add prop-types
```

Now we have to add:<br />
```react
import PropTypes from 'prop-types';
```

### CREATE REACT APP
__Create a new project__<br/>
```linux
>npx create-react-app my-app
>cd my-app
>npm start
```

