const readModdle = require('../util/readModdle');

const RuleTester = require('bpmnlint/lib/testers/rule-tester');

const implementation = require('../../rules/implementation');


RuleTester.verify('implementation', implementation, {
  valid: [
    {
      moddleElement: readModdle(__dirname + '/implementation/valid.bpmn')
    }
  ],
  invalid: [
    {
      moddleElement: readModdle(__dirname + '/implementation/invalid.bpmn'),
      report: [
        {
          id: 'Service',
          message: 'Implementation is missing'
        },
        {
          id: 'BusinessRule',
          message: 'Implementation is missing'
        },
        {
          id: 'Send',
          message: 'Implementation is missing'
        },
        {
          category: 'error',
          id: 'IntermediateThrowEventMessageEventDefinition',
          message: 'Implementation is missing'
        },
        {
          category: 'error',
          id: 'EndEventMessageEventDefinition',
          message: 'Implementation is missing'
        },
        {
          category: 'error',
          id: 'WITH_EXTENSION_ELEMENTS',
          message: 'Implementation is missing'
        }
      ]
    }
  ]
});