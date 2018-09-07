var expect = require('chai').expect;

var readModdle = require('bpmnlint/lib/testers/helper').readModdle;

var RuleTester = require('bpmnlint/lib/testers/rule-tester');

var avoidLanesRule = require('../../rules/avoid-lanes');


RuleTester.verify('avoid-lanes', avoidLanesRule, {
  valid: [
    {
      moddleElement: readModdle(__dirname + '/avoid-lanes/valid.bpmn')
    }
  ],
  invalid: [
    {
      moddleElement: readModdle(__dirname + '/avoid-lanes/invalid.bpmn'),
      report: {
        id: 'Lane',
        message: 'lanes should be avoided'
      }
    }
  ]
});