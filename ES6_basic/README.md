 # Project: ES6 Basics


 <h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://www.w3schools.com/js/js_es6.asp" title="ECMAScript 6 - ECMAScript 2015" target="_blank">ECMAScript 6 - ECMAScript 2015</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements" title="Statements and declarations" target="_blank">Statements and declarations</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" title="Arrow functions" target="_blank">Arrow functions</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters" title="Default parameters" target="_blank">Default parameters</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" title="Rest parameter" target="_blank">Rest parameter</a></li>
<li><a href="https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4" title="Javascript ES6 — Iterables and Iterators" target="_blank">Javascript ES6 — Iterables and Iterators</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="https://fs.blog/feynman-learning-technique/" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What ES6 is</li>
<li>New features introduced in ES6</li>
<li>The difference between a constant and a variable</li>
<li>Block-scoped variables</li>
<li>Arrow functions and function parameters default to them</li>
<li>Rest and spread function parameters</li>
<li>String templating in ES6</li>
<li>Object creation and their properties in ES6</li>
<li>Iterators and for-of loops</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using the <a href="https://jestjs.io/" title="Jest Testing Framework" target="_blank">Jest Testing Framework</a></li>
<li>Your code will be analyzed using the linter <a href="/rltoken/awTYlxNaMZw7HShPeC9D5w" title="ESLint" target="_blank">ESLint</a> along with specific rules that we&rsquo;ll provide</li>
<li>All of your functions must be exported</li>
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
<summary>Click to show/hide file contents</summary>
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
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
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
<summary>Click to show/hide file contents</summary>
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

<h3>Finally&hellip;</h3>

<p>Don&rsquo;t forget to run <code>npm install</code> from the terminal of your project folder to install all necessary project dependencies.</p>

  </div>
</div>

<h2 class="gap">Tasks</h2>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Const or let?
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Modify</p>

<ul>
<li>function <code>taskFirst</code> to instantiate variables using <code>const</code></li>
<li>function <code>taskNext</code> to instantiate variables using <code>let</code></li>
</ul>

<pre><code>export function taskFirst() {
  var task = &#39;I prefer const when I can.&#39;;
  return task;
}

export function getLast() {
  return &#39; is okay&#39;;
}

export function taskNext() {
  var combination = &#39;But sometimes let&#39;;
  combination += getLast();

  return combination;
}
</code></pre>

<p>Execution example:</p>

<pre><code>bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from &#39;./0-constants.js&#39;;

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
</code></pre>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Block Scope
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

  <!-- Task Body -->
   <p>Given what you&rsquo;ve read about <code>var</code> and hoisting, modify the variables inside the function <code>taskBlock</code> so that the variables aren&rsquo;t overwritten inside the conditional block.</p>

<pre><code>export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 1-main.js
import taskBlock from &#39;./1-block-scoped.js&#39;;

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Arrow functions
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Rewrite the following standard function to use ES6&rsquo;s arrow syntax of the function <code>add</code> (it will be an anonymous function after)</p>

<pre><code>export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = [&#39;SOMA&#39;, &#39;Union Square&#39;];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from &#39;./2-arrow.js&#39;;

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood(&#39;Noe Valley&#39;);
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ &#39;SOMA&#39;, &#39;Union Square&#39;, &#39;Noe Valley&#39; ]
bob@dylan:~$
</code></pre>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Parameter defaults
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Condense the internals of the following function to 1 line - without changing the name of each function/variable. </p>

<p><em>Hint:</em> The key here to define default parameter values for the function parameters.</p>

<pre><code>export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 3-main.js
import getSumOfHoods from &#39;./3-default-parameter.js&#39;;

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Rest parameter syntax for functions
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Modify the following function to return the number of arguments passed to it using the rest parameter syntax</p>

<pre><code>export default function returnHowManyArguments() {

}
</code></pre>

<p>Example:</p>

<pre><code>&gt; returnHowManyArguments(&quot;Hello&quot;, &quot;Holberton&quot;, 2020);
3
&gt;
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from &#39;./4-rest-parameter.js&#39;;

console.log(returnHowManyArguments(&quot;one&quot;));
console.log(returnHowManyArguments(&quot;one&quot;, &quot;two&quot;, 3, &quot;4th&quot;));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. The wonders of spread syntax
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.</p>

<pre><code>export default function concatArrays(array1, array2, string) {
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 5-main.js
import concatArrays from &#39;./5-spread-operator.js&#39;;

console.log(concatArrays([&#39;a&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;d&#39;], &#39;Hello&#39;));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  &#39;a&#39;, &#39;b&#39;, &#39;c&#39;,
  &#39;d&#39;, &#39;H&#39;, &#39;e&#39;,
  &#39;l&#39;, &#39;l&#39;, &#39;o&#39;
]
bob@dylan:~$
</code></pre>

  </div>
