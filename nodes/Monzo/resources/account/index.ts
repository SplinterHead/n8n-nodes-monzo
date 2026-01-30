import type { INodeProperties } from 'n8n-workflow';
import { accountGetDescription } from './get';

export const accountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/accounts',
					},
				},
			},
		],
		default: 'getAll',
	},
	...accountGetDescription,
];
