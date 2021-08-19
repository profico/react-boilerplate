/**
 * This script might be useful if we want to readd all dependencies.
 * One use-case might be that the version constraints for the packages might be too old and running `yarn upgrade` wouldn't be enough.
 * Other use-case might be that we explicitly want all the packages to be as newer version as possible. For example, when kicking off a project.
 */

const path = require('path');
const childProcess = require('child_process');

const { dependencies, devDependencies } = require(path.resolve(__dirname, '../package.json'));

const listOfDeps = Object.keys(dependencies).join(' ');
const listOfDevDeps = Object.keys(devDependencies).join(' ');

const addAllDeps = () => {
  childProcess.execSync(`yarn add ${listOfDeps} && yarn add --dev ${listOfDevDeps}`);
};

addAllDeps();
