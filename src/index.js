import ReactDOM from 'react-dom';
import routes from './routes'
import registerServiceWorker from './registerServiceWorker';

import './theme/globalStyles'

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();