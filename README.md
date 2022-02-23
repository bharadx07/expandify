# expandify

🚀 Simple express.js tool to evaluate expressions in HTML templates.

## Installation

```sh
npm install expandify
```

## Usage

First create a HTML file with things you want to be evaluated (index.html).

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hey {"BOB".toLowerCase()}</h1>
    <p>1+1 is equal to {1+1}</p>
  </body>
</html>
```

Then create a express application with the tool (index.js).

```sh
npm i express
```

```js
const expandify = require("expandify");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(expandify(__dirname + "/index.html"));
});

app.listen(8080);
```

Once you run the application, head to `localhost:8080` and you will see all
the expressions evaluated!

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

Then, when you call ```expandify()``` pass in the variables like this:

```js
expandify(__dirname + "/index.html", { name: "Bob", greeting: "How's life!" })
```

## Advanced Usage
You can even evaluate complex lists by mapping and then joining variables:
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
expandify(__dirname + "/index.html", { todos: ["Do chores", "Do homework"] })
```
The possibilities are endless!
