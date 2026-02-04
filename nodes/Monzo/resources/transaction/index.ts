import { INodeProperties } from 'n8n-workflow';
import { transactionGetDescription } from './get';
import { transactionPatchDescription } from './patch';

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
							"expand[]": '=merchant',
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
						qs: {
							"expand[]": '=merchant',
						},
					},
				},
			},
			{
				name: 'Annotate',
				value: 'annotate',
				action: 'Annotate a transaction',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/transactions/{{$parameter["transactionId"]}}',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...transactionGetDescription,
	...transactionPatchDescription,
];