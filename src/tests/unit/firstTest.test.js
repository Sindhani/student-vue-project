import {describe, it, expect} from "vitest";
import { shallowMount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import HelloWorld from '@/components/Login.vue';

const vuetify = createVuetify();
const css = require('css-loader!../node_modules/vuetify/dist/vuetify.min.css');

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        plugins: [vuetify],
        stubs: ['router-link'],
        mocks: {
          $store: {
            getters: {
              isAdmin: true,
            },
          },
        },
      },
      // Include the css
      attachTo: css,
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
