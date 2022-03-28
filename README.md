# expandify

🚀 Simple HTML templating for expressjs.

## Installation

```sh
npm install expandify
```

## Getting Started

First create a HTML file that will serve as your template (index.html).

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hey expandify templates!</h1>
  </body>
</html>
```

Then create a express application with expandify (index.js).

```sh
npm i express
```

```js
const expandify = require("expandify");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send(expandify(path.join(__dirname, "index.html")));
});

app.listen(8080);
```

The expandify function takes the path to your template, and returns a string as your compiled template. You can use the `res.send()` function to display the compiled template's HTML.

Once you run `node index.js`, head to `localhost:8080` and you will see `Hey expandify templates!` on the screen!

## Features

### Embedding Values

You can embed any values or expressions into your templates:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>1+1 is equal to {{1+1}}</h1>
  </body>
</html>
```

You can also embed variables from your javascript code:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hey {{name}}</h1>
    <p>{{greeting}}</p>
  </body>
</html>
```

Then, when you call `expandify()` pass the variables like this:

```js
expandify(__dirname + "/index.html", { name: "Bob", greeting: "How's life!" });
```

You can embed lists (which will be joined), or map through them. This must stay on one line:

```html
<!DOCTYPE html>
<html>
  <body>
    <ul>
      {todos.map(todo => `<li>${todo}</li>`)}
    </ul>
  </body>
</html>
```

```js
expandify(__dirname + "/index.html", { todos: ["Do chores", "Do homework"] });
```

Or embed JSON, which will be stringified for you:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My cool JSON</h1>
    {{{key: "value"}}}
  </body>
</html>
```

### Binding Props

You can bind an expression to any prop with the `bind:propname` directive:

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="number" bind:value="1+1" />
  </body>
</html>
```

Or use any variable passed in through your javascript code:

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" bind:placeholder="myPlaceholder" />
  </body>
</html>
```

```js
expandify(__dirname + "/index.html", { myPlaceholder: "Hey!" });
```

A shortcut for binding a variable to a attribute with the same name is `bind:attribute:`:

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" bind:placeholder: />
  </body>
</html>
```

```js
expandify(__dirname + "/index.html", { placeholder: "Hey!" });
```

### Styling with SCSS
To write embedded styles with scss, use the ```<style lang="scss">``` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <style lang="scss">
      $color: red;

      body {
        color: $color;
      }
    </style>
  </head>
  <body>
    Red text!
  </body>
</html>
```

You dont have to do anything else, expandify will automatically compile the scss for you!

## License

**expandify** is [MIT-licensed](LICENSE) open-source software created by Bharadwaj Duggaraju.