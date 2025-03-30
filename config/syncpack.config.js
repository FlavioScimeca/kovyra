module.exports = {
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json', 'server/package.json'],

  semverRanges: ['^', '~'],
  indent: '  ',
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'scripts',
  ],
  sortFirst: ['name', 'version', 'private', 'description', 'author', 'license'],
};
