import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PaperCutHealthApi implements ICredentialType {
	name = 'paperCutHealthApi';
	displayName = 'PaperCut Health API';
	properties: INodeProperties[] = [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://papercut:9192',
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Self Signed Certifiate',
			name: 'selfSigned',
			type: 'boolean',
			default: false,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/api/health',
			skipSslCertificateValidation: '={{$credentials?.selfSigned}}',
		},
	};
}
