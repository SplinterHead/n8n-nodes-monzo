import { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class MonzoOAuth2Api implements ICredentialType {
	name = 'monzoOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Monzo OAuth2 API';
	icon: Icon = "file:../nodes/Monzo/monzo.svg";
	documentationUrl = "https://github.com/SplinterHead/n8n-nodes-monzo?tab=readme-ov-file#credentials";
	properties: INodeProperties[] = [
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://auth.monzo.com/',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.monzo.com/oauth2/token',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
	];
}