# bpmnlint-plugin-camunda

[![CI](https://github.com/camunda/bpmnlint-plugin-camunda/workflows/CI/badge.svg)](https://github.com/camunda/bpmnlint-plugin-camunda/actions?query=workflow%3ACI)

Camunda modeling guidelines, packed as a [bpmnlint](https://github.com/bpmn-io/bpmnlint) plug-in.


## Usage

Add the plug-in via your `.bpmnlintrc` file:

```
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:camunda/recommended"
  ]
}
```


## Resources

* [Documentation](https://github.com/camunda/bpmnlint-plugin-camunda/tree/master/docs/rules)
* [Issues](https://github.com/camunda/bpmnlint-plugin-camunda/issues)


## See also

Checkout the [camunda-compat](https://github.com/camunda/bpmnlint-plugin-camunda-compat) plug-in to validate a BPMN 2.0 diagram for Camunda version compatibility.


## License

MIT
