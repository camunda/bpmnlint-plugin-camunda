# Implementation (implementation)

This rule ensures that `camunda:ServiceTaskLike` (Service/Send/Business Rule Tasks as well as Message
Intermediate Throw Event, and Message End Event) contain implementation details.

Example of __incorrect__ usage for this rule:

```bpmn
<bpmn:sendTask id="SendTask" name="Send Message"/>
```

Example of __correct__ usage for this rule:

```bpmn
<bpmn:sendTask id="SendTask" name="Send Message" camunda:type="external" camunda:topic="pizza">
```
