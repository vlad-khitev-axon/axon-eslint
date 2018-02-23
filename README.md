# Axon eslint configs

## Eslint

First, configure eslint and prettier following instructions in the appropriate package:

- [Base](./base/README.md)
- [React](./react/README.md)
- [Vue](./vue/README.md)

## Formatting Code on commit

After configuring eslint you can enable automatic code formatting before committing to git.

To format our code whenever we make a commit in git, we need to install the following dependencies:

```sh
npm install --save-dev husky lint-staged
```

Alternatively you may use `yarn`:

```sh
yarn add -D husky lint-staged
```

* `husky` makes it easy to use githooks as if they are npm scripts.
* `lint-staged` allows us to run scripts on staged files in git. See this [blog post about lint-staged to learn more about it](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8).

Now we can make sure every file is formatted correctly by adding a few lines to the `package.json` in the project root.

Add the following line to `scripts` section:

```diff
  "scripts": {
+   "precommit": "lint-staged",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Next we add a 'lint-staged' field to the `package.json`, for example:

```diff
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,json,css}": [
+     "prettier --single-quote --trailing-comma=all --write",
+     "git add"
+   ]
+ },
  "scripts": {
```

Now, whenever you make a commit, Prettier will format the changed files automatically. You can also run `./node_modules/.bin/prettier --single-quote --trailing-comma=all --write "src/**/*.{js,jsx,json,css}"` to format your entire project for the first time.
