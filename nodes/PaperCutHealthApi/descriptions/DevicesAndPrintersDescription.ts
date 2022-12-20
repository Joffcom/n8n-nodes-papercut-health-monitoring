import { INodeProperties } from 'n8n-workflow';

export const devicesAndPrintersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['devicesAndPrinters'],
			},
		},
		options: [
			{
				name: 'Recent Jobs',
				value: 'recentJobs',
				action: 'Get recent jobs',
				description: 'Indicates whether or not a job has been sent to a device or printer in a defined period of time',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/api/health/" + $parameter.type + "/" + $parameter.deviceOrPrinterId + "/has-recent-jobs"}}',
					},
				},
			},
			{
				name: 'Status',
				value: 'status',
				action: 'Get the status of a printer or device',
				description: 'The status of a printer or device',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/api/health/" + $parameter.type + "/" + $parameter.deviceOrPrinterId + "/status"}}',
					},
				},
			},
		],
		default: 'recentJobs',
	},
];

export const devicesAndPrintersFields: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		required: true,
		options: [
			{
				name: 'Device',
				value: 'devices',
			},
			{
				name: 'Printer',
				value: 'printers',
			},
		],
		displayOptions: {
			show: {
				resource: ['devicesAndPrinters'],
			},
		},
		default: 'printers',
	},
	{
		displayName: 'Device or Printer ID',
		name: 'deviceOrPrinterId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['devicesAndPrinters'],
			},
		},
		default: 1001,
		description: 'The ID of the device or printer'
	},
	{
		displayName: 'Minutes',
		name: 'minute',
		type: 'number',
		default: 10,
		description: 'Number of minutes to go back, Max value 240',
		displayOptions: {
			show: {
				resource: ['devicesAndPrinters'],
				operation: ['recentJobs'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'minutes',
			},
		},
	},
];
