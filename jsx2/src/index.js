// 1) Import the React and ReactDOM libraries
// Import and Export at their core are ES6 concepts. They are used to share code/variables/functions between files. There are many ways to import and export code in JavaScript. The most common way is to use the export keyword. This keyword allows you to export a variable, function, file, or module so that it can be used in other files. The import keyword is used to import code that has been exported from another file. The import and export keywords are part of the ES6 module system, which is a way of organizing and sharing code in JavaScript.

// There are many rules and conventions to follow when using import and export in JavaScript. Here are some of the most common ones:
// 1. You can only export a variable, function, file, or module once. If you try to export the same thing multiple times, you will get an error.
// 2. You can import multiple things from a single file by separating them with commas.
// 3. You can import a single thing from a file by using the default keyword.
// 4. You can import everything from a file by using the * symbol.
// 5. You can rename things when you import them by using the as keyword.
// 6. You can import things from a file that has been exported by using the from keyword.
// 7. Export statements can be named and default. Named exports are useful when you want to export multiple things from a file. Default exports are useful when you want to export a single thing from a file.
// 8. When we use ./ in the import statement, it means that we are importing a file from the same directory as the current file. When we use ../ in the import statement, it means that we are importing a file from the parent directory of the current file.
// 9. When we import without using ./ or ../, it means that we are importing a package or a module that is installed in the node_modules directory.
// small test change to see if it triggers the build. some more changes to see if it triggers the build again.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) Get a reference ti the div with ID root.
const el = document.getElementById("root");

// 3) Tell react to take control of the element
const root = ReactDOM.createRoot(el);

// 4) Create a component
/* We moved the App component to different file. Earlier it was here */

// 5) Show the component on the screen
console.log(App);
root.render(<App />);
