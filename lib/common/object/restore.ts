import { obj2xml } from '../utils/obj2xml';

export async function restore(this: any, name: string, options: any = {}) {
  options.subres = Object.assign({ restore: '' }, options.subres);
  if (options.versionId) {
    options.subres.versionId = options.versionId;
  }

  const params = this._objectRequestParams('POST', name, options);
  const { restoreConfig } = options;

  if (restoreConfig) {
    const paramXMLObj = {
      RestoreRequest: {
        Days: restoreConfig.days,
        JobParameters: {
          Tier: restoreConfig.tier || 'Standard',
        },
      },
    };
    params.content = obj2xml(paramXMLObj);
  }

  params.successStatuses = [202];
  const result = await this.request(params);
  return {
    status: result.status,
    res: result.res,
  };
}
