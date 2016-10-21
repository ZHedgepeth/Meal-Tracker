##Angular Setup Checklist
_*Create the project directory

*Create index.html in the top level of the project directory.

*Create package.json file for npm dependencies.

*Run bower init to create the bower manifest file, keeping all the defaults.

*Create .gitignore file.

*Add resources folder, including subfolders for images, styles and js. Then add styles.css to the styles folder with a single obvious style rule to make sure the files are connected up correctly - for example, turn all the <h1> tags blue.

*Create the app folder, and inside of it, add the root component: app.component.ts.

*Also in the app folder, add the entry point files: app.module.ts and main.ts.

*Create the Angular configuration files in the top level of your project directory: tsconfig.json, typings.json, and systemjs.config.js.
Add gulpfile.js to the top level of your project directory.

*Install any bower dependencies, such as Bootstrap.

*Run the 4 development commands._

##Development Commands
_*npm install
*bower install
*gulp build
*gulp serve_

##Troubleshooting
If the above steps have been completed and there are still errors relating to dependencies, try deleting the node_modules and bower_components folders and then rerunning the npm and bower install commands.
