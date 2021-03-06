import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  sensors: {},
  journal: {
    addMode: false,
    messages: [],
  },
  weatherForecastItems: [
    {
      temperature: -5,
      time: '2016-10-10 18:00:00.000000 +03:00',
      weathersymbol3: 1,
    },
    {
      temperature: -6,
      time: '2016-10-10 11:00:00.000000 +03:00',
      weathersymbol3: 41,
    },
    {
      temperature: -7,
      time: '2016-10-10 12:00:00.000000 +03:00',
      weathersymbol3: 63,
    },
    {
      temperature: 666,
      time: '2016-10-10 13:00:00.000000 +03:00',
      weathersymbol3: 12,
    },
    {
      temperature: -7,
      time: '2016-10-10 14:00:00.000000 +03:00',
      weathersymbol3: 63,
    },
    {
      temperature: 666,
      time: '2016-10-10 15:00:00.000000 +03:00',
      weathersymbol3: 12,
    },
    {
      temperature: -7,
      time: '2016-10-10 16:00:00.000000 +03:00',
      weathersymbol3: 63,
    },
  ],
  view: {
    internal: {
      editMode: false,
      drawMode: false,
    },
    blueprint: {
      exteriorWalls: [],
      interiorWalls: [],
    },
    sensors: {},
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [],
});
