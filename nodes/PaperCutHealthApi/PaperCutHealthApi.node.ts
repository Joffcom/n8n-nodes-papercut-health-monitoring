import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import {
	devicesAndPrintersFields,
	devicesAndPrintersOperations,
	informationOperations,
	statisticsFields,
	statisticsOperations,
	statusFields,
	statusOperations,
} from './descriptions';

export class PaperCutHealthApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PaperCut Health API',
		name: 'paperCutHealthApi',
		icon: 'file:PaperCut-Icon-RGB.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the PaperCut MF / NG health monitoring api',
		defaults: {
			name: 'PaperCut Health API',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'paperCutHealthApi',
				required: true,
			},
		],
		// Defaults
		requestDefaults: {
			baseURL: '={{$credentials.domain.replace(new RegExp("/$"), "")}}',
			skipSslCertificateValidation: '={{$credentials.selfSigned}}',
			headers: {},
		},
		// Properties
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Information',
						value: 'information',
						description: 'View information about the different components',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Devices & Printers',
						value: 'devicesAndPrinters',
						description: 'Check the status or job count for a device or printer',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Statistics',
						value: 'statistics',
						description: 'View stats on errors, warning and held jobs',
					},
					{
						name: 'Status',
						value: 'status',
						description: 'Check the status of different components',
					},
				],
				default: 'status',
			},
			...devicesAndPrintersOperations,
			...devicesAndPrintersFields,
			...informationOperations,
			...statisticsOperations,
			...statisticsFields,
			...statusOperations,
			...statusFields,
		],
	};
}
