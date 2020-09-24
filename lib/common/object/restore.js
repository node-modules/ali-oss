"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restore = void 0;
const obj2xml_1 = require("../utils/obj2xml");
async function restore(name, options = {}) {
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
        params.content = obj2xml_1.obj2xml(paramXMLObj);
    }
    params.successStatuses = [202];
    const result = await this.request(params);
    return {
        status: result.status,
        res: result.res,
    };
}
exports.restore = restore;
