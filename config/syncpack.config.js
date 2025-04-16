/** @type {import('@syncpack/config').SyncpackConfig} */

module.exports = {
  source: [
    'package.json',
    'apps/*/package.json',
    'packages/*/package.json',
    'server/package.json',
  ],

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
  versionGroups: [
    {
      label: 'Completely ignore internal @kovyra packages',
      packages: ['**'],
      dependencies: ['@kovyra/ui', '@kovyra/theme', '@kovyra/app'],
      isIgnored: true,
    },
  ],
};
