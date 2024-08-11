import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import { createStore } from 'vuex';
// import * as getters from './getters'

const store = createStore({
  state,
  actions,
  mutations,
  // getters,   
})

export default store;
