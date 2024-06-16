function App() {
    // TODO: Find out why React throws error when trying to display an object
    // Printing JavaScript variables in JSX
    let message = "Hello World";
    let age = 34;
    // Using Math.random() to generate a random number between 0 and 1.
    if (Math.random() > 0.5) {
        message = "Hello World2";
        if (Math.random() > 0.5) {
            message = "Hello World3";
        }
    }
    // Just writing the jsx element doesn't work. We need to return it.
    <h4>PRactice</h4>;
    // curly braces means we are going to refer to a JavaScript variable.
    return (
        <div>
            <h1>
                {message} My age is {age}
            </h1>
            {/* This is a comment in JSX */}
            {/* Shorthand JS Expression to print the current time.*/}
            <h1>{new Date().toLocaleTimeString()}</h1>
            {/* String are wrapped in double quotes. Numbers are wrapped in curly braces*/}

            {/* Prop can be an object or an array or any java script variable*/}

            {/* autoFocus is a boolean prop. It has to be camelCased to work with JSX. Here autofocus will not work like it works in HTML*/}

            {/* All prop names in JSX are camelCased. For example, class becomes className in JSX, and tabindex becomes tabIndex. */}
            {/* maxlength becomes maxLength. */}
            {/* Number attributes should be wrapped in curly braces. */}
            {/* Boolen 'true' can be written as {true} or simply as true. But boolean 'false' must be written with curly braces . Like in case of spellCheck here.*/}
            {/* In JSX class is a reserved keyword. So we use className instead of class. */}
            <input
                min={5}
                style={{
                    color: "blue",
                    border: "3px solid red",
                    margin: "10px",
                }}
                autofocus={true}
                spellCheck="false"
            ></input>

            <div className="style1_div">
                {/* Textarea is a self closing tag. */}
                <textarea autoFocus={true} style={{ margin: "10px" }} />
            </div>
        </div>
    );
}

/**
 * Represents the main application component.
 * @component
 */
export default App;
