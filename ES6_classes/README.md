# Project: ES6 classes


<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" title="Classes" target="_blank">Classes</a></li>
<li><a href="https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies" title="Metaprogramming" target="_blank">Metaprogramming</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="https://fs.blog/feynman-learning-technique/" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>How to define a Class</li>
<li>How to add methods to a class</li>
<li>Why and how to add a static method to a class</li>
<li>How to extend a class from another</li>
<li>Metaprogramming and symbols</li>
</ul>

<h2>Setup</h2>

<h3>Install NodeJS 12.11.x</h3>

<p>(in your home directory): </p>

<pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

<h3>Install Jest, Babel, and ESLint</h3>

<p>in your project directory: </p>

<ul>
<li>Install Jest using: <code>npm install --save-dev jest</code></li>
<li>Install Babel using: <code>npm install --save-dev babel-jest @babel/core @babel/preset-env</code></li>
<li>Install ESLint using: <code>npm install --save-dev eslint</code></li>
</ul>

<h2>Configuration files</h2>

<h3><code>package.json</code></h3>

<details>
<summary>
Click to show/hide file contents</summary>
<pre>
<code>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>
Click to show/hide file contents</summary>
<pre>
<code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</code>
</pre>
</details>

<h3>and&hellip;</h3>

<p>Don&rsquo;t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

  </div>
</div>

<h2 class="gap">Tasks</h2>
   <div data-role="task21481" data-position="1" id="task-num-0">
    <div class="panel panel-default task-card " id="task-21481">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
     0. You used to attend a place like this at some point
   </h3>

  </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Implement a class named <code>ClassRoom</code>:</p>

<ul>
<li>Prototype: <code>export default class ClassRoom</code></li>
<li>It should accept one attribute named <code>maxStudentsSize</code> (Number) and assigned to <code>`_maxStudentsSize`</code></li>
</ul>

<pre><code>bob@dylan:~$ cat 0-main.js
import ClassRoom from &quot;./0-classroom.js&quot;;

const room = new ClassRoom(10);
console.log(room.`_maxStudentsSize`)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      1. Let&#39;s make some classrooms
    </h3>
  </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Import the <code>ClassRoom</code> class from <code>0-classroom.js</code>. </p>

<p>Implement a function named <code>initializeRooms</code>. It should return an array of 3 <code>ClassRoom</code> objects with the sizes 19, 20, and 34 (in this order).</p>

<pre><code>bob@dylan:~$ cat 1-main.js
import initializeRooms from &#39;./1-make_classrooms.js&#39;;

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  `ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }`
]
bob@dylan:~$ 
</code></pre>

</div>

<div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      2. A Course, Getters, and Setters
   </h3>

   </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Implement a class named <code>HolbertonCourse</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>name</code> (String)</li>
<li><code>length</code> (Number)</li>
<li><code>students</code> (array of Strings)</li>
</ul></li>
<li>Make sure to verify the type of attributes during object creation</li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>Implement a getter and setter for each attribute. </li>
</ul>

<pre><code>bob@dylan:~$ cat 2-main.js
import HolbertonCourse from &quot;./2-hbtn_course.js&quot;;

const c1 = new HolbertonCourse(&quot;ES6&quot;, 1, [&quot;Bob&quot;, &quot;Jane&quot;])
console.log(c1.name);
c1.name = &quot;Python 101&quot;;
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse(&quot;ES6&quot;, &quot;1&quot;, [&quot;Bob&quot;, &quot;Jane&quot;]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse `{
  _name: &#39;Python 101&#39;,
  _length: 1,
  _students: [ &#39;Bob&#39;, &#39;Jane&#39; ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$` 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
     3. Methods, static methods, computed methods names..... MONEY
   </h3>
  </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>
   <!-- Progress vs Score -->

  <!-- Task Body -->
  <p>Implement a class named <code>Currency</code>:</p>

<ul>
<li>- Constructor attributes: 

<ul>
<li><code>code</code> (String)</li>
<li><code>name</code> (String)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>Implement a getter and setter for each attribute. </li>
<li>Implement a method named <code>displayFullCurrency</code> that will return the attributes in the following format <code>name (code)</code>.</li>
</ul>

<pre><code>bob@dylan:~$ cat 3-main.js
import Currency from &quot;./3-currency.js&quot;;

const dollar = new Currency(&#39;$&#39;, &#39;Dollars&#39;);
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
</code></pre>

  </div>


 <div class="panel-heading panel-heading-actions">
  <h3 class="panel-title">
     4. Pricing
  </h3>

     </div>

 <div class="panel-body">
<span id="user_id" data-id="6138"></span>
  <!-- Progress vs Score -->
   <!-- Task Body -->
  <p>Import the class <code>Currency</code> from <code>3-currency.js</code></p>

<p>Implement a class named <code>Pricing</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>amount</code> (Number)</li>
<li><code>currency</code> (Currency)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>Implement a getter and setter for each attribute. </li>
<li>Implement a method named <code>displayFullPrice</code> that returns the attributes in the following format <code>amount currency_name (currency_code)</code>.</li>
<li>Implement a static method named <code>convertPrice</code>. It should accept two arguments: <code>amount</code> (Number), <code>conversionRate</code> (Number). The function should return the amount multiplied by the conversion rate.</li>
</ul>

<pre><code>bob@dylan:~$ cat 4-main.js
import Pricing from &#39;./4-pricing.js&#39;;
import Currency from &#39;./3-currency.js&#39;;

const p = new Pricing(100, new Currency(&quot;EUR&quot;, &quot;Euro&quot;))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: &#39;EUR&#39;, _name: &#39;Euro&#39; }
}
100 Euro (EUR)
bob@dylan:~$ 
</code></pre>

  </div>

 
  <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
     5. A Building
   </h3>
</div>
   
  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Implement a class named <code>Building</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>sqft</code> (Number)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>Implement a getter for each attribute.</li>
<li>Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named <code>evacuationWarningMessage</code>.

<ul>
<li>If a class that extends from it does not have a <code>evacuationWarningMessage</code> method, throw an error with the message <code>Class extending Building must override evacuationWarningMessage</code></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ cat 5-main.js
import Building from &#39;./5-building.js&#39;;

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building `{ _sqft: 100 }`
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
</code></pre>

  </div>

  
  <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      6. Inheritance
    </h3>
</div>
    
  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Import <code>Building</code> from <code>5-building.js</code>.</p>

<p>Implement a class named <code>SkyHighBuilding</code> that extends from <code>Building</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>sqft</code> (Number) (must be assigned to the parent class <code>Building</code>)</li>
<li><code>floors</code> (Number)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>Implement a getter for each attribute. </li>
<li>Override the method named <code>evacuationWarningMessage</code> and return the following string <code>Evacuate slowly the NUMBER_OF_FLOORS floors</code>.</li>
</ul>

<pre><code>bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from &#39;./6-sky_high.js&#39;;

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
</code></pre>

  </div>

  
  <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      7. Airport
    </h3>
</div>

   <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->
   <!-- Task Body -->
   <p>Implement a class named <code>Airport</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>name</code> (String)</li>
<li><code>code</code> (String)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>The default string description of the class should return the airport <code>code</code> (example below).</li>
</ul>

<pre><code>bob@dylan:~$ cat 7-main.js
import Airport from &quot;./7-airport.js&quot;;

const airportSF = new Airport(&#39;San Francisco Airport&#39;, &#39;SFO&#39;);
console.log(airportSF);
console.log(airportSF.toString());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: &#39;San Francisco Airport&#39;, _code: &#39;SFO&#39; }
[object SFO]
bob@dylan:~$ 
</code></pre>

  </div>

  
  <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      8. Primitive - Holberton Class
    </h3>
</div>
    
<div class="panel-body">
 <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->
   <!-- Task Body -->
   <p>Implement a class named <code>HolbertonClass</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>size</code> (Number)</li>
<li><code>location</code> (String)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>When the class is cast into a <code>Number</code>, it should return the size. </li>
<li>When the class is cast into a <code>String</code>, it should return the location.</li>
</ul>

<pre><code>bob@dylan:~$ cat 8-main.js
import HolbertonClass from &quot;./8-hbtn_class.js&quot;;

const hc = new HolbertonClass(12, &quot;Mezzanine&quot;)
console.log(Number(hc));
console.log(String(hc));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
</code></pre>

  </div>

  
  <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      9. Hoisting
    </h3>

   </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
  <p>Fix this code and make it work.</p>

<pre><code>const class2019 = new HolbertonClass(2019, &#39;San Francisco&#39;);
const class2020 = new HolbertonClass(2020, &#39;San Francisco&#39;);

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton(&#39;Guillaume&#39;, &#39;Salva&#39;, class2020);
const student2 = new StudentHolberton(&#39;John&#39;, &#39;Doe&#39;, class2020);
const student3 = new StudentHolberton(&#39;Albert&#39;, &#39;Clinton&#39;, class2019);
const student4 = new StudentHolberton(&#39;Donald&#39;, &#39;Bush&#39;, class2019);
const student5 = new StudentHolberton(&#39;Jason&#39;, &#39;Sandler&#39;, class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
</code></pre>

<p>Result:</p>

<pre><code>bob@dylan:~$ cat 9-main.js
import listOfStudents from &quot;./9-hoisting.js&quot;;

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student =&gt; student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: &#39;Guillaume&#39;,
    _lastName: &#39;Salva&#39;,
    _holbertonClass: HolbertonClass { _year: 2020, _location: &#39;San Francisco&#39; }
  },
  StudentHolberton {
    _firstName: &#39;John&#39;,
    _lastName: &#39;Doe&#39;,
    _holbertonClass: HolbertonClass { _year: 2020, _location: &#39;San Francisco&#39; }
  },
  StudentHolberton {
    _firstName: &#39;Albert&#39;,
    _lastName: &#39;Clinton&#39;,
    _holbertonClass: HolbertonClass { _year: 2019, _location: &#39;San Francisco&#39; }
  },
  StudentHolberton {
    _firstName: &#39;Donald&#39;,
    _lastName: &#39;Bush&#39;,
    _holbertonClass: HolbertonClass { _year: 2019, _location: &#39;San Francisco&#39; }
  },
  StudentHolberton {
    _firstName: &#39;Jason&#39;,
    _lastName: &#39;Sandler&#39;,
    _holbertonClass: HolbertonClass { _year: 2019, _location: &#39;San Francisco&#39; }
  }
]
[
  &#39;Guillaume Salva - 2020 - San Francisco&#39;,
  &#39;John Doe - 2020 - San Francisco&#39;,
  &#39;Albert Clinton - 2019 - San Francisco&#39;,
  &#39;Donald Bush - 2019 - San Francisco&#39;,
  &#39;Jason Sandler - 2019 - San Francisco&#39;
]
bob@dylan:~$ 
</code></pre>

  </div>

   <div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      10. Vroom
    </h3>

  </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Implement a class named <code>Car</code>:</p>

<ul>
<li>Constructor attributes: 

<ul>
<li><code>brand</code> (String)</li>
<li><code>motor</code> (String)</li>
<li><code>color</code> (String)</li>
</ul></li>
<li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code>name</code> is stored in <code>`_name`</code>)</li>
<li>Add a method named <code>cloneCar</code>. This method should return a new object of the class.</li>
</ul>

<p>Hint: Symbols in ES6</p>

<pre><code>bob@dylan:~$ cat 10-main.js
import Car from &quot;./10-car.js&quot;;

class TestCar extends Car {}

const tc1 = new TestCar(&quot;Nissan&quot;, &quot;Turbo&quot;, &quot;Pink&quot;);
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: &#39;Nissan&#39;, _motor: &#39;Turbo&#39;, _color: &#39;Pink&#39; }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
</code></pre>

  </div>

  

