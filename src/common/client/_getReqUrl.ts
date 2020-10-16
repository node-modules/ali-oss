import { getReqUrl } from '../utils/getReqUrl';

export function _getReqUrl(this: any, params) {
  return getReqUrl(params, this.options);
}
