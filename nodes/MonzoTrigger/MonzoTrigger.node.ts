import {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	NodeConnectionTypes,
} from 'n8n-workflow';

export class MonzoTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Monzo Trigger',
		name: 'monzoTrigger',
		icon: { light: "file:../../icons/monzo.light.svg", dark: 'file:../../icons/monzo.dark.svg' },
		group: ['trigger'],
		version: 1,
		description: 'Handle Monzo webhooks',
		defaults: {
			name: 'Monzo Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'monzoOAuth2Api',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'string',
				default: '',
				required: true,
				description: 'The account to listen for events on',
			},
		],
		usableAsTool: true,
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const accountId = this.getNodeParameter('accountId') as string;
				const endpoint = `https://api.monzo.com/webhooks?account_id=${accountId}`;

				try {
					const responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'monzoOAuth2Api', {
						method: 'GET',
						url: endpoint,
					});

					for (const webhook of responseData.webhooks) {
						if (webhook.url === webhookUrl) {
							return true;
						}
					}
				} catch {
					return false;
				}

				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const accountId = this.getNodeParameter('accountId') as string;

				const endpoint = 'https://api.monzo.com/webhooks';
				const contentType = 'application/x-www-form-urlencoded';

				await this.helpers.httpRequestWithAuthentication.call(this, 'monzoOAuth2Api', {
					method: 'POST',
					url: endpoint,
					headers: {
						'Content-Type': contentType,
					},
					body: `account_id=${accountId}&url=${webhookUrl}`,
				});
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const accountId = this.getNodeParameter('accountId') as string;

				const endpoint = `https://api.monzo.com/webhooks?account_id=${accountId}`;

				try {
					const responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'monzoOAuth2Api', {
						method: 'GET',
						url: endpoint,
					});

					for (const webhook of responseData.webhooks) {
						if (webhook.url === webhookUrl) {
							await this.helpers.httpRequestWithAuthentication.call(this, 'monzoOAuth2Api', {
								method: 'DELETE',
								url: `https://api.monzo.com/webhooks/${webhook.id}`,
							});
							return true;
						}
					}
				} catch {
					return false;
				}
				return false;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();
		return {
			workflowData: [this.helpers.returnJsonArray(bodyData)],
		};
	}
}