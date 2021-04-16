const BpmnModdle = require('bpmn-moddle');
const camundaModdleSchema = require('camunda-bpmn-moddle/resources/camunda.json');

const readFileSync = require('fs').readFileSync;


module.exports = readModdle;

/**
 * Return moddle instance, read from the given file.
 *
 * @param {String} filePath
 *
 * @return {Promise<Object>}
 */
function readModdle(filePath) {
  const contents = readFileSync(filePath, 'utf8');

  return createModdle(contents);
}

/**
 * Create moddle instance.
 *
 * @param {String} xml the XML string
 *
 * @return {Promise<Object>}
 */
async function createModdle(xml, elementType = 'bpmn:Definitions') {
  const moddle = new BpmnModdle({ camunda: camundaModdleSchema });

  const {
    rootElement: root,
    warnings = []
  } = await moddle.fromXML(xml, elementType, { lax: true });

  return {
    root,
    moddle,
    context: {
      warnings
    },
    warnings
  };
}
