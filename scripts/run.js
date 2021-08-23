/* eslint-disable no-console */

const { exec } = require('child_process');

const splicedArgs = process.argv.splice(2).map(a => a.replace('--', ''));
const args = [...new Set(splicedArgs)]
  .map(argument => {
    const [key, value] = argument.split('=');

    return { [key.trim().toLowerCase()]: value.trim().toLowerCase() };
  })
  .reduce((prev, current) => ({ ...prev, ...current }), {});

const validCommands = ['start', 'build'];

if (!args.cmd) {
  throw new Error('Required argument `cmd` is missing.');
}

if (!validCommands.includes(args.cmd)) {
  throw new Error(`\`${args.cmd}\` is not one of the supported commands: ${JSON.stringify(validCommands)}.`);
}

const reactScriptsCommand = `FORCE_COLOR=1 react-scripts ${args.cmd}`;
const shCommand = `REACT_APP_ENV=${args.env} sh -ac 'source .env.${args.env} && ${reactScriptsCommand}'`;
const child = exec(args.env ? shCommand : reactScriptsCommand);

child.stdout.on('data', data => {
  console.log(data);
});

child.stderr.on('data', error => {
  console.error(error);
});
