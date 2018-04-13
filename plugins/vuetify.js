import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    warning: colors.amber,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    background: '#020305',
    seedg: '#37AA57',
    seedb: '#4280E2',
    seedr: '#D53038',
    seedy: '#EFA82F'
  }
})