import Vue from 'vue';
window.Vue = Vue;

import {library, dom }  from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons'

library.add(fas);

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()
