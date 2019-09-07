var expect = require('chai').expect;

var readModdle = require('bpmnlint/lib/testers/helper').readModdle;

var RuleTester = require('bpmnlint/lib/testers/rule-tester');

var noCollapsedSubProcessesRule = require('../../rules/no-collapsed-sub-processes');


RuleTester.verify('no-collapsed-sub-processes', noCollapsedSubProcessesRule, {
  valid: [
    {
      moddleElement: readModdle(__dirname + '/no-collapsed-sub-processes/valid.bpmn')
    }
  ],
  invalid: [
    {
      moddleElement: readModdle(__dirname + '/no-collapsed-sub-processes/invalid.bpmn'),
      report: {
        id: 'SubProcess',
        message: 'Sub-process should be expanded'
      }
    },
    {
      moddleElement: readModdle(__dirname + '/no-collapsed-sub-processes/invalid-implicit.bpmn'),
      report: {
        id: 'SubProcess',
        message: 'Sub-process should be expanded'
      }
    }
  ]
});