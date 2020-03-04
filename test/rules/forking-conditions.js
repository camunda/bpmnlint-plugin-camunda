var readModdle = require('bpmnlint/lib/testers/helper').readModdle;

var RuleTester = require('bpmnlint/lib/testers/rule-tester');

var forkingConditionsRule = require('../../rules/forking-conditions');


RuleTester.verify('forking-conditions', forkingConditionsRule, {
  valid: [
    {
      moddleElement: readModdle(__dirname + '/forking-conditions/valid-conditions.bpmn')
    },
    {
      moddleElement: readModdle(__dirname + '/forking-conditions/valid-default-flow.bpmn')
    },
    {
      moddleElement: readModdle(__dirname + '/forking-conditions/valid-join.bpmn')
    },
    {
      moddleElement: readModdle(__dirname + '/forking-conditions/valid-no-condition-after-merge.bpmn')
    }
  ],
  invalid: [
    {
      moddleElement: readModdle(__dirname + '/forking-conditions/invalid.bpmn'),
      report: [
        {
          id: 'Flow_2',
          message: 'Sequence flow is missing condition'
        },
        {
          id: 'Flow_1',
          message: 'Sequence flow is missing condition'
        }
      ]
    },
  ]
});