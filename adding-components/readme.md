# ADDING COMPONENTS

## Here we continue from HELLO-WORLD

### Adding components by classes


Now we can create __components__. Let's make a class: <br/>

```html
<script type="text/babel">
  class App extends React.Component {
    render() {
      return <h1>Hello from our app</h1>
    }
  }
</script>
```

__There are something missing??__ _YES!, we have to render a_ __WHAT__ _and a_ __WHERE__  <br/>

```html
<script type="text/babel">
  class App extends React.Component {
    render() {
      return <h1>Hello from our app</h1>
    }
  }

  const mount = document.querySelector('#app')
  ReactDOM.render(<App/>, mount)
</script>
```

