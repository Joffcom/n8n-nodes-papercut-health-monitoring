import { INodeProperties } from 'n8n-workflow';

export const informationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['information'],
			},
		},
		options: [
			{
				name: 'Base System',
				value: 'baseSystem',
				action: 'Get a summary of all components and base system',
				description: 'Get a summary of all components and base system',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health',
					},
				},
			},
			{
				name: 'Devices',
				value: 'devices',
				action: 'Get a device summary',
				description: 'Get a device summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/devices',
					},
				},
			},
			{
				name: 'Job Ticketing',
				value: 'jobTicketing',
				action: 'Get a job ticketing summary',
				description: 'Get a job ticketing summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/job-ticketing',
					},
				},
			},
			{
				name: 'Mobility Print',
				value: 'mobilityPrint',
				action: 'Get a mobility print summary',
				description: 'Get a Mobility Print summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/mobility-print-servers',
					},
				},
			},
			{
				name: 'Print Providers',
				value: 'printProviders',
				action: 'Get a print provider summary',
				description: 'Get a print provider summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/print-providers',
					},
				},
			},
			{
				name: 'Printers',
				value: 'printers',
				action: 'Get a printers summary',
				description: 'Get a printers summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/printers',
					},
				},
			},
			{
				name: 'Site Servers',
				value: 'siteServers',
				action: 'Get a site servers summary',
				description: 'Get a site servers summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/site-servers',
					},
				},
			},
			{
				name: 'Web Print',
				value: 'webPrintServers',
				action: 'Get a web print summary',
				description: 'Get a Web Print summary',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/web-print',
					},
				},
			},
		],
		default: 'baseSystem',
	},
];
