import { INodeProperties } from 'n8n-workflow';
import { transactionGetDescription } from './get';

export const transactionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many transactions',
				routing: {
					request: {
						method: 'GET',
						url: '/transactions',
						qs: {
							account_id: '={{$parameter["accountId"]}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a transaction',
				routing: {
					request: {
						method: 'GET',
						url: '=/transactions/{{$parameter["transactionId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...transactionGetDescription,
];