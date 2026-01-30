import { INodeProperties } from 'n8n-workflow';
import { potGetDescription } from './get';

export const potDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		required: true,
		displayOptions: {
			show: {
				resource: ['pot'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many pots',
				routing: {
					request: {
						method: 'GET',
						url: '/pots',
						qs: {
							current_account_id: '={{$parameter["accountId"]}}',
						},
					},
				},
			},
			{
				name: 'Deposit',
				value: 'deposit',
				action: 'Deposit money into a pot',
				routing: {
					request: {
						method: 'PUT',
						url: '=/pots/{{$parameter["potId"]}}/deposit',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
					},
				},
			},
			{
				name: 'Withdraw',
				value: 'withdraw',
				action: 'Withdraw money from a pot',
				routing: {
					request: {
						method: 'PUT',
						url: '=/pots/{{$parameter["potId"]}}/withdraw',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
  ...potGetDescription
];