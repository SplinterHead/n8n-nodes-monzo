import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { balanceDescription } from './resources/balance';
import { potDescription } from './resources/pot';
import { transactionDescription } from './resources/transaction';

export class Monzo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Monzo',
		name: 'monzo',
		icon: { light: "file:../../icons/monzo.light.svg", dark: 'file:../../icons/monzo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Interact with the Monzo API',
		defaults: {
			name: 'Monzo',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'monzoOAuth2Api', required: true }],
		requestDefaults: {
			baseURL: 'https://api.monzo.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Balance',
						value: 'balance',
					},
					{
						name: 'Pot',
						value: 'pot',
					},
					{
						name: 'Transaction',
						value: 'transaction',
					},
				],
				default: 'account',
			},
			...accountDescription,
			...balanceDescription,
			...potDescription,
			...transactionDescription,
		],
	};
}
