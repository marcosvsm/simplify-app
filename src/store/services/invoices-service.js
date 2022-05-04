import axios from 'axios';
import Jsona from 'jsona';

const url = process.env.VUE_APP_API_BASE_URL;
const jsona = new Jsona();

function list(params) {
  const options = {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, {encode: false});
    }
  };

  return axios.get(`${url}/invoices`, options)
    .then(response => {
      return {
        list: jsona.deserialize(response.data),
        meta: response.data.meta
      };
    });
}

function get() {
  return axios.get(`${url}/invoices`)
    .then(response => {
      return {
        list: jsona.deserialize(response.data),
        meta: response.data.meta
      };
    });
}

function update(invoices) {

  const payload = jsona.serialize({
    stuff: invoices,
    includeNames: []
  });

  const options = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  return axios.patch(`${url}/invoices`, payload, options)
    .then(response => {
      return jsona.deserialize(response.data);
    });
}

export default {
  list,
  get,
  update
};
