# Changelog

All notable changes to [bpmnlint-plugin-camunda](https://github.com/bpmn-io/bpmnlint-plugin-camunda) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 0.6.1

* `FIX`: correctly handle extension elements in `implementation` rule ([#24](https://github.com/camunda/bpmnlint-plugin-camunda/issues/24))

## 0.6.0

* `FEAT`: add `implementation` rule
* `CHORE`: remove `no-collapsed-sub-processes` rule. Camunda Platform 7.17 supports collapsed sub-processes

## 0.5.0

* `CHORE`: update to `bpmnlint@7`

## 0.4.2

* `CHORE`: do not publish `.github` folder

## 0.4.1

* `FIX`: correct `forking-conditions` after merging gateway

## 0.4.0

* `FEAT`: add `forking-conditions` rule
* `FEAT`: add `no-collapsed-sub-processes` rule
* `DOCS`: document all rules
* `FIX`: handle missing `isExpanded` attribute when checking `no-collapsed-sub-processes` rule

## 0.3.0

* `CHORE`: update to `bpmnlint@5`

## 0.2.0

* `FIX`: correct package name to `bpmnlint-plugin-camunda`

## 0.1.0

_Initial release._

* `FEAT`: add `avoid-lanes` rule
* `FEAT`: add `camunda:recommended` configuration
