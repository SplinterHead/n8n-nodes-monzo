import type { INodeProperties } from 'n8n-workflow';

export const transactionPatchDescription: INodeProperties[] = [
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'fixedCollection',
		default: {},
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['annotate'],
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'Key of the metadata item',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value of the metadata item',
					},
				],
			},
		],
		description: 'Key-value pairs to add as metadata',
		routing: {
			send: {
				type: 'body',
				property: 'metadata',
				value: '={{ (($parameter["metadata"] && $parameter["metadata"]["metadataValues"]) || []).reduce((acc, cur) => ({ ...acc, [cur.key]: cur.value }), {}) }}',
			},
		},
	},
];
