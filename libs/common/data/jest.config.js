module.exports = {
  name: 'common-data',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/data',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
