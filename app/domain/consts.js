module.exports = {
    outCodes: {
        PREPARE_TO_CAMUNDA_8: "E13_PREPARE_TO_CAMUNDA_8",
        CHECK_INSTRUMENTS: "E14_CHECK_INSTRUMENTS",
        IMPROVE_PROCESS_READABILITY: "E15_IMPROVE_PROCESS_READABILITY",
        DECOMPOSE_PROCESS: "E16_DECOMPOSE_PROCESS",
        LEAVE_ALONE: "E17_LEAVE_ALONE",
    },
    inputCodes: {
        PREPARE_TO_CAMUNDA_8: "E1_PREPARE_TO_CAMUNDA_8",
        NOT_PREPARE_TO_CAMUNDA_8: "E12_NOT_PREPARE_TO_CAMUNDA_8",
        HANDLE_ERROR: "E2_HANDLE_ERROR",
        HARD_TO_FEATURES: "E3_HARD_TO_FEATURES",
        REPEATABLE_MOMENTS: "E5_REPEATABLE_MOMENTS",
        CUSTOM_TASKLIST: "E6_CUSTOM_TASKLIST",
        NO_CUSTOM_TASKLIST: "E11_NO_CUSTOM_TASKLIST",
        QUICK_RELEASE: "E10_QUICK_RELEASE",
        NOT_QUICK_RELEASE: "E7_NOT_QUICK_RELEASE",
    },
    normilizeRecomendationStatus: {
        LOW: "LOW",
        MEDIUM: "MEDIUM",
        HIGHT: "HIGHT"
    },
    constDevState:
    [
        {
            "bpmnElementId": "DoSomethingByDeprecatedDelegated",
            "isOk": false,
            "message": "DoSomethingByDeprecatedDelegated - <b>Содержит Java делегат.</b> Java делегаты не поддерживаются автоматически Camunda 8. Предлагаем перевести Java делегат на <a href\"\">ExternalTaskHandler</a> или ознакомиться с данной документацией, по подключению <a href='\"https://github.com/camunda-community-hub/camunda-7-to-8-migration/tree/main/camunda-7-adapter\">Camunda 7 adapter</a>, который позволяет переиспользовать Java Delegates"
        },
        {
            "bpmnElementId": "DoSomethingJSScript",
            "isOk": false,
            "message": "DoSomethingJSScript - <b>Содержит JavaScript.</b> JavaScript поддерживается в Camunda 8, но требует изменений в процессе. Ознакомьтесь с <a href=\"https://docs.camunda.io/docs/components/modeler/bpmn/script-tasks/\">документацией</a>"
        },
        {
            "bpmnElementId": "DoSomethingWithDeprecatedHtmlForms",
            "isOk": false,
            "message": "DoSomethingWithDeprecatedHtmlForms - <b>Содержит ссылку HTML файл.</b> HTML файл не поддерживается в Camunda 8. Используйте .forms. Подробнее <a href=\"https://docs.camunda.io/docs/guides/utilizing-forms/\">в документации</a>"
        }
    ]
}