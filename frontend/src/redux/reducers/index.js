import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './themeReducer';
import authReducer from './authReducer';

import siteReducer from '../sites/sites.reducers';
import rollerReducer from '../roller/roller.reducers';
import localspareReducer from '../localspare/localspare.reducers';
import sparepartReducer from '../spareparts/spareparts.reducers';
import cataloguetReducer from '../catalogue/catalogue.reducers';
import cartReducer from '../cart/cart.reducers';
import siteOrderReducer from '../site-orders/site_order.reducers';
import mainOrderReducer from '../main-order/main_order.reducers';
import userReducer from '../user/user.reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'siteReducer',
		'rollerReducer',
		'localspareReducer',
		'sparepartReducer',
		'cataloguetReducer',
		'cartReducer',
		'siteOrderReducer',
		'userReducer',
	],
};

const rootReducer = combineReducers({
	themeReducer: themeReducer,
	authReducer: authReducer,
	siteReducer: siteReducer,
	rollerReducer: rollerReducer,
	localspareReducer: localspareReducer,
	sparepartReducer: sparepartReducer,
	cataloguetReducer: cataloguetReducer,
	cartReducer: cartReducer,
	siteOrderReducer: siteOrderReducer,
	mainOrderReducer: mainOrderReducer,
	userReducer: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
