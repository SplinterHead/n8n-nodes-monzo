import type { INodeProperties } from 'n8n-workflow';

export const accountGetDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getBalance'],
			},
		},
		default: '',
		description: 'The ID of the account to get the balance for',
	},
];