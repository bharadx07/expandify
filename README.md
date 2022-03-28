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

Then create a express application (index.js).

```sh
npm i express
```

```js
const expandify = require("expandify");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey expandify!");
});

app.listen(8080);
```

If we want to render our template instead of just displaying the string, all we have to do is replace the string with `expandify(filePath)`:

```js
res.send(expandify(__dirname + "/index.html"));
```

Once you run the application, head to `localhost:8080` and you will see ```Hey expandify templates!``` on the screen!

## Variables

You can also evaluate variables from your express application.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hey {name}</h1>
    <p>{greeting}</p>
  </body>
</html>
```

Then, when you call `expandify()` pass in the variables like this:

```js
expandify(__dirname + "/index.html", { name: "Bob", greeting: "How's life!" });
```

## Advanced Usage

You can even evaluate complex lists by mapping and then joining variables:

```html
<!DOCTYPE html>
<html>
  <body>
    <ul>
      {todos.map(todo => `
      <li>${todo}</li>
      `)}
    </ul>
  </body>
</html>
```

```js
expandify(__dirname + "/index.html", { todos: ["Do chores", "Do homework"] });
```

The possibilities are endless!
