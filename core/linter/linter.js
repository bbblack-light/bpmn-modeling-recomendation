import { LinterResponse } from "./LinterResponse"
import { LinterState } from "./LinterState"
import { LinterMessages } from "./linterMessages"

export default function lint(element) {
    LinterState.addStates(
        linters
            .map(linterData => 
                lintByPredicate(
                    element, 
                    linterData.predicate, 
                    linterData.message
                )
            )
            .filter(e => !e.isOk)
    )
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
        isOk,
        isOk === true ? null : message
    )
}