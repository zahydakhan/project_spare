import { all, call } from 'redux-saga/effects';

import {
	onFetchSitesStart,
	onAddSitesStart,
	onDelSitesStart,
	onEditSitesStart,
} from '../sites/sites.sagas';

import {
	onFetchRollerStart,
	onAddRollerStart,
	onDelRollerStart,
	onEditRollerStart,
} from '../roller/roller.sagas';

import {
	onFetchLocalspareStart,
	onAddLocalspareStart,
	onDelLocalspareStart,
	onEditLocalspareStart,
} from '../localspare/localspare.sagas';

import {
	onFetchSparepartStart,
	onAddSparepartStart,
	onDelSparepartStart,
	onEditSparepartStart,
	onFetchSparepartFullStart,
} from '../spareparts/spareparts.sagas';

import {
	onFetchSparepartMLStart,
	onFetchSparepartMPStart,
	onFetchSparepartGETStart,
} from '../catalogue/catalogue.sagas';

import {
	onFetchSiteOrderStart,
	onAddSiteOrderStart,
	onDelSiteOrderStart,
	onEditSiteOrderStart,
} from '../site-orders/site_order.sagas';

import {
	onFetchMainOrderStart,
	onAddMainOrderStart,
	onDelMainOrderStart,
	onEditMainOrderStart,
	onFetchMonthlyOrderStart,
} from '../main-order/main_order.sagas';

import { onFetchUserStart } from '../user/user.sagas';

export default function* rootSaga() {
	yield all([
		call(onFetchSitesStart),
		call(onAddSitesStart),
		call(onDelSitesStart),
		call(onEditSitesStart),

		call(onFetchRollerStart),
		call(onAddRollerStart),
		call(onDelRollerStart),
		call(onEditRollerStart),

		call(onFetchLocalspareStart),
		call(onAddLocalspareStart),
		call(onDelLocalspareStart),
		call(onEditLocalspareStart),

		call(onFetchSparepartStart),
		call(onAddSparepartStart),
		call(onDelSparepartStart),
		call(onEditSparepartStart),
		call(onFetchSparepartFullStart),

		call(onFetchSparepartMLStart),
		call(onFetchSparepartMPStart),
		call(onFetchSparepartGETStart),

		call(onFetchSiteOrderStart),
		call(onAddSiteOrderStart),
		call(onDelSiteOrderStart),
		call(onEditSiteOrderStart),

		call(onFetchMainOrderStart),
		call(onAddMainOrderStart),
		call(onDelMainOrderStart),
		call(onEditMainOrderStart),
		call(onFetchMonthlyOrderStart),
		call(onFetchUserStart),
	]);
}
