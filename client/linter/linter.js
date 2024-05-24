import LinterResponse from './LinterResponse'
import LinterMessages from './linterMessages'
localStorage.removeItem('linter-state');
export default function lintElementsAndSaveToLocalStorage(elements) {
    let result = elements.map(element => lint(element))
        .flat()
        .filter(e => e!=[])
    localStorage.setItem('linter-state', JSON.stringify(result));
    return result
}

function lint(element) {
    return linters
        .map(linterData => 
            lintByPredicate(
                element, 
                linterData.predicate, 
                linterData.message
            )
        )
        .filter(e => !e.isOk)
}

const linters = [
    {
        predicate: (element)=> {
            let bpmnElement = element.di.bpmnElement
            return element.type === "bpmn:ScriptTask" && bpmnElement.scriptFormat === "Java Script"
        },
        message: LinterMessages.JS
    },
    {
        predicate: (element)=> {
            let bpmnElement = element.di.bpmnElement
            return element.type === "bpmn:ServiceTask" && (bpmnElement.class !== undefined || bpmnElement.delegateExpression)
        },
        message: LinterMessages.DELEGATES
    },
    {
        predicate: (element)=> {
            let bpmnElement = element.di.bpmnElement

            return element.type === "bpmn:UserTask" && bpmnElement.formRef !== undefined && bpmnElement.formRef.includes(".html")
        },
        message: LinterMessages.HTML
    }
]

function lintByPredicate(element, linterPredicateIsNotOk, message) {
    let isOk = true
    if (linterPredicateIsNotOk(element)) isOk = false
    return new LinterResponse(
        element.id,
        isOk,
        isOk === true ? null : element.id + ' - ' + message
    )
}