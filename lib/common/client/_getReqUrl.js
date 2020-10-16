"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getReqUrl = void 0;
const getReqUrl_1 = require("../utils/getReqUrl");
function _getReqUrl(params) {
    return getReqUrl_1.getReqUrl(params, this.options);
}
exports._getReqUrl = _getReqUrl;
