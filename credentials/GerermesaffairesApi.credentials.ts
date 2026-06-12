import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GerermesaffairesApi implements ICredentialType {
        name = 'N8nDevGerermesaffairesApi';

        displayName = 'Gerermesaffaires API';

        icon: Icon = { light: 'file:../nodes/Gerermesaffaires/gerermesaffaires.png', dark: 'file:../nodes/Gerermesaffaires/gerermesaffaires.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://sandbox.gerermesaffaires.com/api/v1/',
                        required: true,
                        placeholder: 'https://sandbox.gerermesaffaires.com/api/v1/',
                        description: 'The base URL of your Gerermesaffaires API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
