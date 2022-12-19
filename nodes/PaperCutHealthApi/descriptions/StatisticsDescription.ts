import { INodeProperties } from 'n8n-workflow';

export const statisticsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['statistics'],
			},
		},
		options: [
			{
				name: 'Held Jobs Count',
				value: 'heldJobsCount',
				action: 'Get held jobs count',
				description: 'The number of jobs currently held in any print queue',
				routing: {
					request: {
						method: 'GET',
						url: '/api/stats/held-jobs-count',
					},
				},
			},
			{
				name: 'Recent Errors Count',
				value: 'recentErrorsCount',
				action: 'Get recent errors count',
				description: 'The number of errors that have occurred on all printers in a defined period of time',
				routing: {
					request: {
						method: 'GET',
						url: '/api/stats/recent-errors-count',
					},
				},
			},
			{
				name: 'Recent Pages Count',
				value: 'recentPagesCount',
				action: 'Get recent pages count',
				description: 'The number of pages printed from all printers in a defined period of time',
				routing: {
					request: {
						method: 'GET',
						url: '/api/stats/recent-pages-count',
					},
				},
			},
			{
				name: 'Recent Warnings Count',
				value: 'recentWarningsCount',
				action: 'Get recent warnings count',
				description: 'The number of warnings that have occurred on all printers in a defined period of time',
				routing: {
					request: {
						method: 'GET',
						url: '/api/stats/recent-warnings-count',
					},
				},
			},
		],
		default: 'heldJobsCount',
	},
];

export const statisticsFields: INodeProperties[] = [
	{
		displayName: 'Minutes',
		name: 'minute',
		type: 'number',
		default: 10,
		description: 'Number of minutes to go back, Max value 240',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['recentErrorsCount','recentPagesCount','recentWarningsCount'],
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
