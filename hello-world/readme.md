# HELLO-WORLD

## This is a React Simple App with CDN, without create-react-app

__Runs on Live Server or directly from index.html in the browser__ <br/>

Notice that we have: <br/>

```html
<script type="text/babel">
    ReactDOM.render(
      <h1>Hello World</h1>,
      document.querySelector('#app')
    );
</script>
```

But we could: <br/>

```html
<script type="text/babel">
    var app = <h1>Hello World</h1>
    var mountComponent = document.querySelector('#app')
    ReactDOM.render(app, mountComponent);
</script>
```

At the end, ReactDOM.render has the next structure: <br/>

ReactDOM.render(__WHAT__, __WHERE__); <br/>

