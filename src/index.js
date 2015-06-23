import yargs from 'yargs';

const one = function (name) {
  const caps = name.toUpperCase();
  return yargs.argv[name]
    || process.env[name] === '1'
    || process.env[caps] === '1'
    || process.env[name] === 'true'
    || process.env[caps] === 'true'
    || false;
};

export default function (names) {
  return names
    .map(one)
    .reduce((a, b) => a || b, false);
};

