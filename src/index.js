import React from 'react';
import ReactDOM from 'react-dom';

import "@/assets/css/reset.less"

import App from '@/page/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
