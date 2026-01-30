import type { INodeProperties } from 'n8n-workflow';
import { balanceGetDescription } from './get';

export const balanceDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['balance'],
      },
    },
    options: [
			{
				name: 'Get Balance',
				value: 'getBalance',
				action: 'Get balance for an account',
				routing: {
					request: {
						method: 'GET',
						url: '/balance',
						qs: {
							account_id: '={{$parameter["accountId"]}}',
						},
					},
				},
			},
		],
		default: 'getBalance',
  },
  ...balanceGetDescription,
];