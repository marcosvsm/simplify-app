import service from '@/store/services/invoices-service';

const state = {
  list: {},
  invoice: {},
  meta: {},
  url: null
};

const mutations = {
  SET_LIST: (state, list) => {
    state.list = list;
  },
  SET_RESOURCE: (state, invoice) => {
    state.invoice = invoice;
  },
  SET_META: (state, meta) => {
    state.meta = meta;
  },
  SET_URL: (state, url) => {
    state.url = url;
  }
};

const actions = {
  list({commit, dispatch}, params) {
    return service.list(params)
      .then(({list, meta}) => {
        commit('SET_LIST', list);
        commit('SET_META', meta);
      });
  },

  get({commit, dispatch}, params) {
    return service.get(params)
      .then((invoice) => { commit('SET_RESOURCE', invoice); });
  },

  update({commit, dispatch}, params) {
    return service.update(params)
      .then((invoices) => {
        commit('SET_RESOURCE', invoices);
      });
  },
};

const getters = {
  list: state => state.list,
  invoice: state => state.invoice
};

const invoices = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default invoices;
