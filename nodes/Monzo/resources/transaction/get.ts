import type { INodeProperties } from 'n8n-workflow';

export const transactionGetDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'The ID of the account to list transactions for',
		routing: {
			send: {
				type: 'query',
				property: 'account_id',
			},
		},
	},
	{
		displayName: 'Transaction ID',
		name: 'transactionId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The ID of the transaction to retrieve',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getAll'],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Since',
		name: 'since',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'Timestamp to start listing transactions from',
		routing: {
			send: {
				type: 'query',
				property: 'since',
			},
		},
	},
	{
		displayName: 'Before',
		name: 'before',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'Timestamp to list transactions until',
		routing: {
			send: {
				type: 'query',
				property: 'before',
			},
		},
	},
];