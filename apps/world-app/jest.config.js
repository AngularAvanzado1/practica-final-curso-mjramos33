module.exports = {
  name: 'world-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/world-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
