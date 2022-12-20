import {
	IExecuteSingleFunctions,
	IN8nHttpFullResponse,
	INodeExecutionData,
	JsonObject,
	NodeApiError,
} from 'n8n-workflow';

export async function ignoreFalseError(this: IExecuteSingleFunctions, data: INodeExecutionData[], response: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
	// 500 is not always an error
	if (response.statusCode === 200 || (response.statusCode === 500 && (response.body as unknown as JsonObject).status)) {
		return data;
	} else {
		throw new NodeApiError(this.getNode(), response as unknown as JsonObject);
	}
}
