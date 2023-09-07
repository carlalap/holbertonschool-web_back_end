# Project: ES6 classes


<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" title="Classes" target="_blank">Classes</a></li>
<li><a href="https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies" title="Metaprogramming" target="_blank">Metaprogramming</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/njFFGENoXPXVPrxCyuHqMg" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

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

