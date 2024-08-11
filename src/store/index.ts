import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import { createStore } from 'vuex';

const store = createStore({
  state,
  actions,
  mutations,
})

export default store;
