import { INodeProperties } from 'n8n-workflow';

export const statusOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['status'],
			},
		},
		options: [
			{
				name: 'Application Server',
				value: 'applicationServer',
				action: 'Get the application server status',
				description: 'Indicates whether or not the available hard disk space on the Application Server is below a predefined threshold',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/application-server/status',
					},
				},
			},
			{
				name: 'Database Server',
				value: 'databaseServer',
				action: 'Get the database server status',
				description: 'Indicates whether or not the Application Server can connect to the database',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/database/status',
					},
				},
			},
			{
				name: 'Devices',
				value: 'devices',
				action: 'Get the status of devices',
				description: 'Indicates whether or not a predefined number of devices are offline',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/devices/status',
					},
				},
			},
			{
				name: 'Job Ticketing',
				value: 'jobTicketing',
				action: 'Get the job ticketing status',
				description: 'Indicates whether or not the Job Ticketing can connect with the Application Server',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/job-ticketing/status',
					},
				},
			},
			{
				name: 'License',
				value: 'license',
				action: 'Get the license status',
				description: 'Indicates whether or not any licenses are invalid',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/license/status',
					},
				},
			},
			{
				name: 'Mobility Print Servers',
				value: 'mobilityPrintServers',
				action: 'Get the mobility print server status',
				description: 'Indicates whether or not any Mobility Print servers are offline',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/mobility-print-servers/status',
					},
				},
			},
			{
				name: 'Primary Health Check',
				value: 'primaryHealthCheck',
				action: 'Get a summary of the system health',
				description: 'A summary status of the PaperCut NG/MF system health',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/status',
					},
				},
			},
			{
				name: 'Print Providers',
				value: 'printProviders',
				action: 'Get a print provider server status',
				description: 'Indicates whether or not any Print Providers are offline',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/print-providers/status',
					},
				},
			},
			{
				name: 'Printers',
				value: 'printers',
				action: 'Get the printer status',
				description: 'Indicates whether or not a predefined number of printers are offline',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/printers/status',
					},
				},
			},
			{
				name: 'Site Servers',
				value: 'siteServers',
				action: 'Get the status of site servers',
				description: 'Indicates whether or not any Site Servers are offline',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/site-servers/status',
					},
				},
			},
			{
				name: 'Web Print Servers',
				value: 'webPrintServers',
				action: 'Get the status of web print servers',
				description: 'Indicates whether or not a predefined number of Web Print servers are offline',
				routing: {
					request: {
						method: 'GET',
						url: '/api/health/web-print/status',
					},
				},
			},
		],
		default: 'primaryHealthCheck',
	},
];

export const statusFields: INodeProperties[] = [
	{
		displayName: 'Disk Threshold MB',
		name: 'diskThresholdMb',
		type: 'number',
		default: 1024,
		description: 'Threshold for disk space errors',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['applicationServer'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'disk-threshold-mb',
			},
		},
	},
	{
		displayName: 'Connections Threshold Percentage',
		name: 'connectionsThresholdPercentage',
		type: 'number',
		default: 90,
		description: 'Threshold for successful databse connections, Under this is an error',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['databaseServer'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'connections-threshold-percentage',
			},
		},
	},
	{
		displayName: 'Offline Threshold',
		name: 'offlineThreshold',
		type: 'number',
		default: 0,
		description: 'Threshold for allowed offline devices',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['devices'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'offline-threshold',
			},
		},
	},
	{
		displayName: 'In Error Threshold',
		name: 'inErrorThreshold',
		type: 'number',
		default: 0,
		description: 'Threshold for allowed printers with errors',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['printers'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'in-error-threshold',
			},
		},
	},
	{
		displayName: 'Servers In Error Threshold',
		name: 'serversInErrorThreshold',
		type: 'number',
		default: 0,
		description: 'Threshold for allowed server errors',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['webPrintServers'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'servers-in-error-threshold',
			},
		},
	},
];
