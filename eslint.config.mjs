import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  lib: [
    'index.js',
    'rules/**/*.js'
  ],
  test: [
    'test/**/*.js'
  ]
};

export default [

  // lib
  ...bpmnIoPlugin.configs.recommended.map(config => {

    return {
      ...config,
      files: files.lib,
      languageOptions: {
        sourceType: 'commonjs'
      }
    };
  }),

  // build + test
  ...bpmnIoPlugin.configs.node.map(config => {

    return {
      ...config,
      ignores: files.lib,
    };
  }),

  // test
  ...bpmnIoPlugin.configs.mocha.map(config => {

    return {
      ...config,
      files: files.test,
    };
  }),
  {
    languageOptions: {
      globals: {
        sinon: true,
        require: true
      }
    },
    files: files.test
  }
];