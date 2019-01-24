import _ from 'lodash';
import { Util, Error } from 'naf-core';

const { isNullOrUndefined } = Util;

const filters = {
  getName(object) {
    const { data, searchItem, value, label } = object;
    if (data.length > 0) {
      if (!isNullOrUndefined(value)) {
        let returnText = 'undefined';
        for (const item of data) {
          if (item.value === value) {
            returnText = _.get(item, `${label}`);
            break;
          }
        }
        return returnText;
      } else {
        return _.get(data, searchItem) === undefined ? '' : _.get(data, searchItem);
      }
    }
  },
};

export default filters;
