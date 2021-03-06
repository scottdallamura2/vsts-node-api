/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

"use strict";



export interface DataSourceBindingBase {
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    parameters: { [key: string] : string; };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}

export interface ProcessParameters {
    dataSourceBindings: DataSourceBindingBase[];
    inputs: TaskInputDefinitionBase[];
    sourceDefinitions: TaskSourceDefinitionBase[];
}

export interface TaskInputDefinitionBase {
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: { [key: string] : string; };
    properties: { [key: string] : string; };
    required: boolean;
    type: string;
    visibleRule: string;
}

export interface TaskSourceDefinitionBase {
    authKey: string;
    endpoint: string;
    keySelector: string;
    selector: string;
    target: string;
}

export var TypeInfo = {
    DataSourceBindingBase: {
        fields: <any>null
    },
    ProcessParameters: {
        fields: <any>null
    },
    TaskInputDefinitionBase: {
        fields: <any>null
    },
    TaskSourceDefinitionBase: {
        fields: <any>null
    },
};

TypeInfo.DataSourceBindingBase.fields = {
};

TypeInfo.ProcessParameters.fields = {
    dataSourceBindings: {
        isArray: true,
        typeInfo: TypeInfo.DataSourceBindingBase
    },
    inputs: {
        isArray: true,
        typeInfo: TypeInfo.TaskInputDefinitionBase
    },
    sourceDefinitions: {
        isArray: true,
        typeInfo: TypeInfo.TaskSourceDefinitionBase
    },
};

TypeInfo.TaskInputDefinitionBase.fields = {
};

TypeInfo.TaskSourceDefinitionBase.fields = {
};
