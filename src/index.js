import yargs from 'yargs';

export default function(name) {
  return process.env[name] === '1' || yargs.argv[name] || false;
}
