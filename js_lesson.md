1. Variables storing data in a program keywords like var, let, or const.

2. Arithmetic Operators

- Basic operators include:
  - **Addition (+)**: Adds two numbers together.
  - **Subtraction (-)**: Subtracts one number from another.
  - **Multiplication (*)**: Multiplies two numbers together.
  - **Division (/)**: Divides one number by another.
  - **Modulus (%)**: Returns the remainder of the division of one number by another.


3. Accept user Input
    * easy way = user prompt
    * professional way = HTML textbox

4. Type Conversion change the database of a value to another (string, boolean, number) 

5. Const (Constants) variables that cannot be changed

6. Math built-in Object that provides a collection of properties and methods

7. If Statements, if true execute, if not something else

8. Checked property

9. Ternary operator shortcut to an if else statement

10. Switch to many if else statements

11. Strings allow you to manipulate and work with text

12. String slicing creating a substring from a portion of 
another substring

13. Method Chaining calling one method after another

14. Logical Operators used to manipulate boolean values. (True False)
    
- AND = &&
- OR = ||
- NOT = !

15. Equality

- " = " asignment operator

- " == " comparison operator (compare if values are equal)

- " === " strict equality operator (compare if values & datatype are equal)

- " != " inequality operator

- " !== " strict inequality operator

16. Loop repeats until a specified condition is met.

17. While Loop repeats some code while some condition is true.

- do is onother variotion to while -> means do the code first an then check the conditioning
- While will execute the code while some condition remain true

18. For Loop repeats some code certain/limited amount of times.

19. Function -> A section of reusable code 

- Declare code one, use it whenever you like
- Call that function to execute that code.

20. Variable Scope Where a variable is recognized and accessible (local vs global) 

- any variable declared within a function has a local scope.

- any variable declared outside of a function has a global scope.

21. Arrays, a variable like structure that can hold more than one value.

- change index of an array 

- fruits[0] = "coconut";

- add an element to array (push)

- fruits.push("coconut");

- removes the last element of an array (pop)

- fruits.pop()

- add an element to the beggining of array (unshift)

- fruits.unshift("coconut")

- removes the element from the beggining of array (shift)

- fruits.shift()

22. Spread Operator ... allows an iterable such as an array or string to be expanded into seperate elements.

22. Rest Operator ... allows a function work with a variable number of arguments by bundling them into an array.

- bundles seperate elements into an array

23. Callback that is a function passed as an argument to another function

- used to handle asynchronous operations

24. ForEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

25. .map() = accepts a callback and applies that function to each element of an array, then return a new array

25. .filter() = method crates a new array by filtering out elements.

26. .reduce() = reduce the element of an array to a single value.

27. Function declaration = define a reusable block of code that performs specific task.

28. Function expression = a way to define a functions as values and variables.

- Callbacks in asynchronous operations

- Higher-Order Functions

- Closures 

- Event Listeners

29. Arrow Function concise way to write function expression good for simple function that you use only once. (parameters) => some code

30. JavaScript Object - A collection of related properties and/or methods can represent real world objects(people, products, places).

- Object = {key:value, function()}

31. This. reference to the object where THIS is used (the object depends on the immediate context) 

- Person.name = this.name

32. Constructor a special method for defining the properties and methods to an objects.

33.  Class (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance  

34. Static keyword taht defines properties or methods that belong ot a calss itself rather than the objects created from that class (class owns anything static, not the objects)

35. Inheritance allows a new class to inherit properties and methods from existing class (parent -> child) helps with code reusability;


36. Super = keyword used in classes to call the constructor or access the properties and methods of a parent (superclass) 
this = this object
super = the parent

37. getters special method that makes a property readable
    setters special method that makes a property writeable

    validate and modify a value when reading/writing a property

38. destructuring allows us to extract values from arrays and objects, then assign them to variables in a convenient way 

[] = to perform array destructuring 

{} = to perform object destructuring

39. nested objects = Onjects inside of other objects.
allows you to represent more complex data structures child objects is enclosed by a parent object
Person{Addrss{}, ContactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

40. Array of Objects

41. sort() method used to sort elements of an arrray in place.
    Sorts element as strings in lexicographic order. not alphabetical lexicographic = (alphabet + numbers + symbols) as strings

42. Date objects that contain values that represent dates and times these date objects can be changed and formatted

43. Closure = A function defined insde of another function, the timer function has access to the variables and scope of the other function. Allow for private variables and state maintenance Used frequently in JS frameworks: React, Vue, Angular.

43.  setTimeout(callback, delay);

44. ES6 Module an external file that contains reusable code that can be imported into other JavaScript files. Write reusable code for many different apps. Can contain variables, classes, functions ... and more Introduced in ECMAScript 2015 update.

45. Synchronous = executes line by consecutvely in a sequential manner
Code that waits for an operaition to complete

46. Asynchronous = Allows mulitple operations to be performed concurrently without waiting Doesn't block the execution flow and allows the program to continue (I/O Operations, network request, fetching data, Hanlded with: Callbacks, Promises, Async/Await);

47. Error = An Object that is created to represent a problem that occurs Occur often with user input or establishing a connection

try { } = Encloses code that might potentially cause an error 

catch { } = Catch and Handle any thrown Errors from try { }

finally { } = (optional) Always executes. Used mostly for clean up ex. close files, close connection, release resources

48. // DOM = DOCUMENT OBJECT MODEL

Object {} that represents the page you see in the web browser
and provides you with an API to interact with it.
Web browser constructs the DOM when it loads an HTML document,
and structures all the elements in a tree-like representation.
JavaScript can access the DOM to dynamically
change the content, structure, and style of a web page.

49. element selectors = Methods used to target and manipulate HTML elements
They allow you to select one or multiple HTML elements
from the DOM (Document Object Model)
 1. document.getElementById()
 ELEMENT OR NULL
 2. document.getElementsClassName()  HTML COLLECTION
 3. document.getElementsByTagName()  HTML COLLECTION
 4. document.querySelector()    ELEMENT OR NULL
 5. document.querySelectorAll() NODELIST

 50. DOM Navigation = The process of navigating through the structure
of an HTML document using JavaScript. |
.firstElementChild
.lastElementChild
.nextElementSibling
.previous ElementSibling
.parentElement
.children

51. Mouse realted events -> eventListener
Listen for specific events to create interactive web pages
events: click, mouseover, mouseout
.addEventListener(event, callback);

51. Key realted events -> eventListener
Listen for specific events to create interactive web pages
events: keydown, keyup
.addEventListener(event, callback);

52. NodeList = Static collection of HTML elements by (id, class, element)
Can be created by using querySelectorAll()
Similar to an array, but no (map, filter, reduce)
NodeList won't update to automatically reflect changes

53. classList = Element property in JavaScript used to interact
with an element's list of classes (CSS classes)
Allows you to make reusable classes for many elements
across your webpage.

add()
remove()
toggle (Remove if present, Add if not)
replace(oldClass, newClass)
contains( )

54. Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read. Old patteren to handle asynchronous functions. Use Promises + async.await to avoid Callback Hell.

55. Promise = An Object that manages asynchronous operations.|
Wrap a Promise Object around {asynchronous code}
"I promise to return a value"
PENDING -> RESOLVED or REJECTED
new Promise((resolve, reject) => {asynchronous code}) 

56. Async/Await = Async makes a function return a promise           Await makes a Async function wait for a promise

Allows you write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters. Everything after Await is placed in an event queue.

57. fetch = Function used for making HTTP requests to fetch resources
(JSON style data, images, files)
Simplifies asynchronous data fetching in JavaScript and
used for interacting with APIs to retrieve and send
data asynchronously over the web.
fetch(url, {options})