import type { INodeProperties } from 'n8n-workflow';

export const accountGetDescription: INodeProperties[] = [
	{
		displayName: 'Account Type',
		name: 'accountType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				name: 'All',
				value: '',
			},
			{
				name: 'Personal',
				value: 'uk_retail',
			},
			{
				name: 'Joint',
				value: 'uk_retail_joint',
			},
		],
		default: '',
		description: 'Filter the list of returned accounts',
		routing: {
			send: {
				type: 'query',
				property: '={{$parameter["accountType"] != "" ? "account_type" : "ignore_type"}}',
			},
		},
	},
];