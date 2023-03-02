/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import { VueFire, VueFireAuth } from 'vuefire'

import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {firebaseApp} from './firebase'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueFire, {
      // imported above but could also just be created here
      firebaseApp,

    })
}
