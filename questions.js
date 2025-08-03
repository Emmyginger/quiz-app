const QUIZ_QUESTIONS = [
    // ----- HTML Section -----

{
    section: "HTML",
    question: "What does HTML stand for?",
    options: [
        "Home Tool Markup Language",
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Mark Language"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "What is the correct HTML element for inserting a line break?",
    options: [
        "<break>",
        "<br>",
        "<lb>",
        "<linebreak>"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "Choose the correct HTML element for the largest heading:",
    options: [
        "<heading>",
        "<h6>",
        "<h1>",
        "<head>"
    ],
    answer: 2
},
{
    section: "HTML",
    question: "What is the correct HTML element for creating a hyperlink?",
    options: [
        "<a>",
        "<href>",
        "<link>",
        "<url>"
    ],
    answer: 0
},
{
    section: "HTML",
    question: "Which attribute is used to provide a unique identifier to an HTML element?",
    options: [
        "class",
        "id",
        "name",
        "key"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "How can you make a numbered list?",
    options: [
        "<ol>",
        "<ul>",
        "<dl>",
        "<list>"
    ],
    answer: 0
},
{
    section: "HTML",
    question: "How can you make a bulleted list?",
    options: [
        "<ol>",
        "<ul>",
        "<list>",
        "<dl>"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "Choose the correct HTML element to define emphasized text:",
    options: [
        "<italic>",
        "<bold>",
        "<em>",
        "<i>"
    ],
    answer: 2
},
{
    section: "HTML",
    question: "What is the purpose of the title tag in HTML?",
    options: [
        "Defines a table caption",
        "Defines a title for the browser tab",
        "Defines a main heading",
        "Defines a tooltip for a link"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "Which attribute specifies an image's alternate text?",
    options: [
        "title",
        "alt",
        "src",
        "describe"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "Which HTML tag is used to display a picture on a web page?",
    options: [
        "<image>",
        "<pic>",
        "<img>",
        "<picture>"
    ],
    answer: 2
},
{
    section: "HTML",
    question: "In HTML, on which tag is the lang attribute commonly used?",
    options: [
        "<meta>",
        "<html>",
        "<title>",
        "<body>"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "What is the purpose of the form element?",
    options: [
        "To insert an image gallery",
        "To create interactive forms for user input",
        "To design tables",
        "To format text"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "Which tag is used to create a checkbox in a form?",
    options: [
        "<input type='check'>",
        "<checkbox>",
        "<input type='checkbox'>",
        "<check>"
    ],
    answer: 2
},
{
    section: "HTML",
    question: "How do you insert a comment in HTML?",
    options: [
        "// comment",
        "' comment",
        "<!-- comment -->",
        "<comment> comment </comment>"
    ],
    answer: 2
},
{
    section: "HTML",
    question: "What’s the correct HTML element for inserting a horizontal rule?",
    options: [
        "<hr>",
        "<line>",
        "<horizontal>",
        "<breakline>"
    ],
    answer: 0
},
{
    section: "HTML",
    question: "Which element is used to group together inline elements and apply styles to them?",
    options: [
        "<div>",
        "<span>",
        "<section>",
        "<article>"
    ],
    answer: 1
},
{
    section: "HTML",
    question: "What is the default character encoding for HTML5?",
    options: [
        "UTF-16",
        "ISO-8859-1",
        "UTF-8",
        "ASCII"
    ],
    answer: 2
},
{
    section: "HTML",
    question: "Which element should be used for the main content of a document?",
    options: [
        "<main>",
        "<body>",
        "<section>",
        "<content>"
    ],
    answer: 0
},
{
    section: "HTML",
    question: "What does the 'required' attribute do in an HTML form input?",
    options: [
        "Specifies a default value",
        "Makes the field mandatory to fill in",
        "Sets the maximum length",
        "Disables the field"
    ],
    answer: 1
},

    // ----- CSS Section -----
    
{
    section: "CSS",
    question: "Which CSS property controls the text size?",
    options: [
        "font-style",
        "text-size",
        "font-size",
        "text-style"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "What does CSS stand for?",
    options: [
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "How do you select an element with id 'demo'?",
    options: [
        "#demo",
        ".demo",
        "demo",
        "*demo"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "Which is the correct CSS syntax?",
    options: [
        "{body:color=black;}",
        "body:color=black;",
        "body {color: black;}",
        "{body;color:black;}"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "How do you make all paragraphs have a red text color?",
    options: [
        "p {color: red;}",
        "p.all {color: red;}",
        "p#all {color: red;}",
        "all.p {color:red;}"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "Which property is used to change the background color?",
    options: [
        "color",
        "background-color",
        "bgcolor",
        "background"
    ],
    answer: 1
},
{
    section: "CSS",
    question: "What is the correct way to add a comment in CSS?",
    options: [
        "// comment",
        "<!-- comment -->",
        "/* comment */",
        "# comment"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "How do you select all the elements of a page?",
    options: [
        "body",
        "html",
        "*",
        "all"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "What does 'margin: 10px 5px 15px 20px;' mean?",
    options: [
        "10px top, 5px right, 15px bottom, 20px left",
        "10px left, 5px top, 15px right, 20px bottom",
        "10px top, 5px left, 15px bottom, 20px right",
        "None of the above"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "Which property is used to change the font of an element?",
    options: [
        "font-style",
        "font-family",
        "font-weight",
        "font-variant"
    ],
    answer: 1
},
{
    section: "CSS",
    question: "How do you display hyperlinks without an underline?",
    options: [
        "a {text-decoration:none;}",
        "a {underline:none;}",
        "a {decoration:no-underline;}",
        "a {text-underline:none;}"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "How do you make each word in a text start with a capital letter?",
    options: [
        "text-transform:capitalize;",
        "text-style:capitalize;",
        "transform:capitalize;",
        "font-transform:capitalize;"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "Which CSS property controls the space between lines of text?",
    options: [
        "line-spacing",
        "letter-spacing",
        "line-height",
        "spacing"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "How do you make a list that lists its items with squares?",
    options: [
        "list-type: square;",
        "list-style-type: square;",
        "list: square;",
        "list-shape: square;"
    ],
    answer: 1
},
{
    section: "CSS",
    question: "How do you make a class selector in CSS?",
    options: [
        ".classname",
        "#classname",
        "*classname",
        "classname"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "Which property hides an element without deleting the space for it?",
    options: [
        "display: none;",
        "opacity: 0;",
        "visibility: hidden;",
        "hidden: true;"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "How do you make a border with rounded corners?",
    options: [
        "border-corner: round;",
        "border-radius: 10px;",
        "corner-radius: 10px;",
        "border: rounded 10px;"
    ],
    answer: 1
},
{
    section: "CSS",
    question: "What is the default value of position property?",
    options: [
        "relative",
        "absolute",
        "static",
        "fixed"
    ],
    answer: 2
},
{
    section: "CSS",
    question: "How do you set a transparent background color?",
    options: [
        "background-color: transparent;",
        "background: no-color;",
        "background-color: opacity(0);",
        "background-color: none;"
    ],
    answer: 0
},
{
    section: "CSS",
    question: "Which selector will select only p elements that are direct children of a div?",
    options: [
        "div p",
        "div > p",
        "div + p",
        "div.p"
    ],
    answer: 1
},

    // ----- JS Section -----
    
{
    section: "JavaScript",
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
        "<script href='xxx.js'>",
        "<script src='xxx.js'>",
        "<script name='xxx.js'>",
        "<script file='xxx.js'>"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "How do you write 'Hello World' in an alert box?",
    options: [
        "msg('Hello World');",
        "alertBox('Hello World');",
        "msgBox('Hello World');",
        "alert('Hello World');"
    ],
    answer: 3
},
{
    section: "JavaScript",
    question: "Where is the correct place to insert a JavaScript script?",
    options: [
        "Both the <head> and the <body> section",
        "Only in the <body> section",
        "Only in the <head> section",
        "Only after the </html> tag"
    ],
    answer: 0
},
{
    section: "JavaScript",
    question: "What is the correct syntax for creating a function in JavaScript?",
    options: [
        "function myFunction()",
        "function = myFunction()",
        "function:myFunction()",
        "func myFunction()"
    ],
    answer: 0
},
{
    section: "JavaScript",
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
        "onchange",
        "onclick",
        "onmouseclick",
        "onhover"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "How do you declare a JavaScript variable?",
    options: [
        "v carName;",
        "variable carName;",
        "var carName;",
        "carName var;"
    ],
    answer: 2
},
{
    section: "JavaScript",
    question: "How do you call a function named 'myFunction'?",
    options: [
        "call myFunction();",
        "myFunction();",
        "call function myFunction();",
        "Call.myFunction();"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "How do you write an IF statement in JavaScript?",
    options: [
        "if i == 5 then",
        "if (i == 5)",
        "if i = 5 then",
        "if i = 5"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "How can you add a single-line comment in JavaScript?",
    options: [
        "'This is a comment",
        "//This is a comment",
        "<!--This is a comment-->",
        "#This is a comment"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "What operator is used to assign a value to a variable?",
    options: [
        "*",
        "-",
        "=",
        "=="
    ],
    answer: 2
},
{
    section: "JavaScript",
    question: "What is the correct syntax for an array?",
    options: [
        "let colors = ['red', 'green', 'blue']",
        "let colors = 'red', 'green', 'blue'",
        "let colors = (red, green, blue)",
        "let colors = {red, green, blue}"
    ],
    answer: 0
},
{
    section: "JavaScript",
    question: "How do you round the number 7.25 to the nearest integer?",
    options: [
        "Math.round(7.25)",
        "round(7.25)",
        "Math.rnd(7.25)",
        "rnd(7.25)"
    ],
    answer: 0
},
{
    section: "JavaScript",
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
        "<js>",
        "<scripting>",
        "<javascript>",
        "<script>"
    ],
    answer: 3
},
{
    section: "JavaScript",
    question: "How do you find the number with the highest value of x and y?",
    options: [
        "Math.max(x, y)",
        "Math.higher(x, y)",
        "ceil(x, y)",
        "top(x, y)"
    ],
    answer: 0
},
{
    section: "JavaScript",
    question: "To check if two variables, a and b, are equal in value and type, use:",
    options: [
        "a == b",
        "a = b",
        "a === b",
        "a = = b"
    ],
    answer: 2
},
{
    section: "JavaScript",
    question: "What will this code output: console.log(typeof 42)?",
    options: [
        "'integer'",
        "'number'",
        "'int'",
        "'float'"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "How do you write a 'for' loop in JavaScript?",
    options: [
        "for (let i = 0; i < 5; i++)",
        "for i = 0 to 5",
        "for (i = 0; i =< 5; i++)",
        "for (i < 5; i++)"
    ],
    answer: 0
},
{
    section: "JavaScript",
    question: "What is the correct way to create a new Date object?",
    options: [
        "Date newDate = Date()",
        "let d = new Date()",
        "let d = Date.new()",
        "let d = Date()"
    ],
    answer: 1
},
{
    section: "JavaScript",
    question: "Which statement will add an element to the end of an array?",
    options: [
        "arr.add('item')",
        "arr[arr.length] = 'item';",
        "arr.push('item');",
        "arr.insert('item')"
    ],
    answer: 2
},
{
    section: "JavaScript",
    question: "What is the output of: Boolean('false')",
    options: [
        "false",
        "true",
        "null",
        "undefined"
    ],
    answer: 1
},
];