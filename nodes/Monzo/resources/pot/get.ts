import type { INodeProperties } from 'n8n-workflow';

export const potGetDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['pot'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'The ID of the account to list Pots for',
		routing: {
			send: {
				type: 'body',
				property: 'current_account_id',
			},
		},
	},
	{
		displayName: 'Source Account ID',
		name: 'sourceAccountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['pot'],
				operation: ['deposit'],
			},
		},
		default: '',
		description: 'The ID of the account to deposit money from',
		routing: {
			send: {
				type: 'body',
				property: 'source_account_id',
			},
		},
	},
	{
		displayName: 'Pot ID',
		name: 'potId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['pot'],
				operation: ['deposit', 'withdraw'],
			},
		},
		default: '',
		description: 'The ID of the pot',
	},
	{
		displayName: 'Destination Account ID',
		name: 'destinationAccountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['pot'],
				operation: ['withdraw'],
			},
		},
		default: '',
		description: 'The ID of the account to withdraw money to',
		routing: {
			send: {
				type: 'body',
				property: 'destination_account_id',
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['pot'],
				operation: ['deposit', 'withdraw'],
			},
		},
		default: 0,
		description: 'Amount in minor units (e.g. pence)',
		routing: {
			send: {
				type: 'body',
				property: 'amount',
			},
		},
	},
	{
		displayName: 'Dedupe ID',
		name: 'dedupeId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['pot'],
				operation: ['deposit', 'withdraw'],
			},
		},
		default: '',
		description: 'Unique ID to ensure idempotency',
		routing: {
			send: {
				type: 'body',
				property: 'dedupe_id',
				value: '={{$value || $execution.id}}',
			},
		},
	},
];