# expandify

🚀 Simple HTML templating for expressjs.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Template Features](#features)
  - [Embedding Values](#embedding-values)
    - [@text tag](#@text-tag)
    - [@nohtml tag](#@nohtml-tag)
  - [Evaluated Attributes](#evaluated-attributes)
  - [Styling with SCSS](#styling-with-scss)

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
const { renderFile } = require("expandify");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send(renderFile(path.join(__dirname, "index.html")));
});

app.listen(8080);
```

The `renderFile` function takes the path to your template, and returns a string as your compiled template. You can use the `res.send()` function to display the compiled template's HTML. You can also use a string instead of another file for your template with the `render` function. However, these docs will use the `renderFile` function for consistency. It is also a good idea to seperate your templates into another file.

Once you run `node index.js`, head to `localhost:8080` and you will see `Hey expandify templates!` on the screen!

## Template Features

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

Then, when you call `renderFile()` pass the variables like this:

```js
renderFile(__dirname + "/index.html", { name: "Bob", greeting: "How's life!" });
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
renderFile(__dirname + "/index.html", { todos: ["Do chores", "Do homework"] });
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

### @text tag

The @text tag will change any HTML tags into plain text to prevent XSS. You can use it like this:

```html
<!DOCTYPE html>
<html>
  <body>
    {{@text tryingToXSS}}
  </body>
</html>
```

```js
const tryingToXSS = `<img src="alert(hacked!" />`; // or any mal string
renderFile(__dirname + "/index.html", {tryingToXSS});
```

Instead of actually rendering the image tag like HTML, the tag will be parsed as text, so you will actually see ```<``` and ```>``` (will be converted to entities). 

### @nohtml tag

The @nohtml tag will remove any HTML tags, leaving you with only text. You can use it like this:
```html
<!DOCTYPE html>
<html>
  <body>
    {{@nohtml htmlString}}
  </body>
</html>
```

```js
const htmlString = `<h1>do not render as a h1</h1>`; // or any string with html tags
renderFile(__dirname + "/index.html", {htmlString});
```

In this case, the text "do not render as a h1" would be the only thing rendered, as the @nohtml tag would remove any HTML tags present.


### Evaluated Attributes

You can set an attribute equal to any expression with the `$:attribute` directive:

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="number" $:value="1+1" />
  </body>
</html>
```

Or set an attribute equal to a variable passed in through your javascript code:

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" $:placeholder="myPlaceholder" />
  </body>
</html>
```

```js
renderFile(__dirname + "/index.html", { myPlaceholder: "Hey!" });
```

A shortcut for assigning a variable to a attribute with the same name is `$:attribute:` :

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" $:placeholder: />
  </body>
</html>
```

```js
renderFile(__dirname + "/index.html", { placeholder: "Hey!" });
```

### Styling with SCSS

To write embedded styles with scss, use the `<style lang="scss">` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <style lang="scss">
      $size: 10rem;

      body {
        font-size: $size;
      }
    </style>
  </head>
  <body>
    Large text!
  </body>
</html>
```

You dont have to do anything else, expandify will automatically compile the SCSS for you!

## License

**expandify** is [MIT-licensed](LICENSE) open-source software created by Bharadwaj Duggaraju.
