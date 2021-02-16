import React from 'react';

import async from '../components/Async';
//import localStorage from "../utils/localStorage";

import {
	BookOpen,
	Briefcase,
	Calendar as CalendarIcon,
	CheckSquare,
	CreditCard,
	Grid,
	Heart,
	Layout,
	List,
	Map,
	Monitor,
	ShoppingCart,
	PieChart,
	Sliders,
	Users,
} from 'react-feather';

// Guards
const AuthGuard = async(() => import('../components/AuthGuard'));
const AdminGuard = async(() => import('../components/AdminGuard'));

// Auth components
const SignIn = async(() => import('../pages/auth/SignIn'));
const SignUp = async(() => import('../pages/auth/SignUp'));
const ResetPassword = async(() => import('../pages/auth/ResetPassword'));
const Page404 = async(() => import('../pages/auth/Page404'));
const Page500 = async(() => import('../pages/auth/Page500'));

// Components components
const Alerts = async(() => import('../pages/components/Alerts'));
const Avatars = async(() => import('../pages/components/Avatars'));
const Badges = async(() => import('../pages/components/Badges'));
const Buttons = async(() => import('../pages/components/Buttons'));
const Cards = async(() => import('../pages/components/Cards'));
const Chips = async(() => import('../pages/components/Chips'));
const Dialogs = async(() => import('../pages/components/Dialogs'));
const ExpPanels = async(() => import('../pages/components/ExpansionPanels'));
const Lists = async(() => import('../pages/components/Lists'));
const Menus = async(() => import('../pages/components/Menus'));
const Pagination = async(() => import('../pages/components/Pagination'));
const Progress = async(() => import('../pages/components/Progress'));
const Snackbars = async(() => import('../pages/components/Snackbars'));
const Tooltips = async(() => import('../pages/components/Tooltips'));

// Dashboards components
const GetSpareTable = async(() =>
	import('../pages/catalogue/get_sp_maintable/catalogue_get_main.table')
);
const MLSpareTable = async(() =>
	import('../pages/catalogue/ml_sp_maintable/catalogue_ml_main.table')
);
const MPSpareTable = async(() =>
	import('../pages/catalogue/mp_sp_maintable/catalogue_mp_main.table')
);

const RollerSpareTable = async(() =>
	import('../pages/catalogue/roller_sp_maintable/catalogue_roller_main.table')
);

const Analytics = async(() => import('../pages/dashboards/Analytics'));
const SaaS = async(() => import('../pages/dashboards/SaaS'));

// Forms components
const Pickers = async(() => import('../pages/forms/Pickers'));
const SelectionCtrls = async(() => import('../pages/forms/SelectionControls'));
const Selects = async(() => import('../pages/forms/Selects'));
const TextFields = async(() => import('../pages/forms/TextFields'));
const Dropzone = async(() => import('../pages/forms/Dropzone'));
const Editors = async(() => import('../pages/forms/Editors'));
const Formik = async(() => import('../pages/forms/Formik'));

// Icons components
const MaterialIcons = async(() => import('../pages/icons/MaterialIcons'));
const FeatherIcons = async(() => import('../pages/icons/FeatherIcons'));

// Pages components
const Blank = async(() => import('../pages/pages/Blank'));
const InvoiceDetails = async(() => import('../pages/pages/InvoiceDetails'));
const InvoiceList = async(() => import('../pages/pages/InvoiceList'));
const CheckoutPage = async(() => import('../pages/cart/cartMain.page'));
const Pricing = async(() => import('../pages/pages/Pricing'));
const SparePart = async(() => import('../pages/sparepart/spare.page'));
const Roller = async(() => import('../pages/roller/roller.page'));
const Tasks = async(() => import('../pages/pages/Tasks'));
const Projects = async(() => import('../pages/pages/Projects'));
const Calendar = async(() => import('../pages/pages/Calendar'));
const Localspare = async(() => import('../pages/localspare/localspare.page'));
const Sites = async(() => import('../pages/sites/sites.page'));

// Tables components
const SimpleTable = async(() => import('../pages/tables/SimpleTable'));
const AdvancedTable = async(() => import('../pages/tables/AdvancedTable'));
const DataGrid = async(() => import('../pages/tables/DataGrid'));

// Chart components
const Chartjs = async(() => import('../pages/charts/Chartjs'));

// Maps components
const GoogleMaps = async(() => import('../pages/maps/GoogleMaps'));
const VectorMaps = async(() => import('../pages/maps/VectorMaps'));

// Documentation
const Welcome = async(() => import('../pages/docs/Welcome'));
const GettingStarted = async(() => import('../pages/docs/GettingStarted'));
const EnvironmentVariables = async(() =>
	import('../pages/docs/EnvironmentVariables')
);
const Deployment = async(() => import('../pages/docs/Deployment'));
const Theming = async(() => import('../pages/docs/Theming'));
const StateManagement = async(() => import('../pages/docs/StateManagement'));
const APICalls = async(() => import('../pages/docs/APICalls'));
const ESLintAndPrettier = async(() =>
	import('../pages/docs/ESLintAndPrettier')
);
const Support = async(() => import('../pages/docs/Support'));
const Changelog = async(() => import('../pages/docs/Changelog'));

// Landing
const Landing = async(() => import('../pages/presentation/Landing'));

// Protected routes
const ProtectedPage = async(() => import('../pages/protected/ProtectedPage'));

//orders routes
const PurchaseRequest = async(() => import('../pages/site_order/site_order.main.page'));
const PrintOrders = async(() => import('../pages/main_order/main_order.page'));
const MonthlyOrders = async(() => import('../pages/monthly-order/monthlyOrder.table'));

const dashboardsRoutes = {
	id: 'Catalogue',
	path: '/dashboard',
	header: 'Pages',
	icon: <Sliders />,
	containsHome: true,
	children: [
		{
			path: '/dashboard/ml',
			name: 'Manganese Liner',
			component: MLSpareTable,
		},
		{
			path: '/dashboard/getparts',
			name: 'Ground Engaging Tools',
			component: GetSpareTable,
		},
		{
			path: '/dashboard/mpparts',
			name: 'Mechanical Parts',
			component: MPSpareTable,
		},
		{
			path: '/dashboard/rollerparts',
			name: 'Roller Spare Parts',
			component: RollerSpareTable,
		},
	],
	component: null,
};

const pagesRoutes = {
	id: 'Admin',
	path: '/admin',
	icon: <Layout />,
	children: [
		{
			path: '/admin/sites',
			name: 'Sites',
			component: Sites,
		},
		{
			path: '/admin/sparepart',
			name: 'Spare Parts',
			component: SparePart,
		},

		{
			path: '/admin/rollers',
			name: 'Roller Spare Parts',
			component: Roller,
		},

		{
			path: '/admin/local',
			name: 'Local Spareparts',
			component: Localspare,
		},
		{
			path: '/admin/blank',
			name: 'Blank Page',
			component: Blank,
		},
	],
	component: null,
};


const OrdersRoutes = {
	id: 'Orders',
	path: '/orders',
	icon: <CreditCard />,
	children: [
		{
			path: '/orders/purchasereq',
			name: 'Purchase Request',
			component: PurchaseRequest,
		},
		{
			path: '/orders/printorders',
			name: 'Print Orders',
			component: PrintOrders,
		},
		{
			path: '/orders/monthlyorders',
			name: 'Monthly Orders',
			component: MonthlyOrders,
		},
	],
	component: null,
};

const analyticsRoutes = {
	id: 'Analytics',
	path: '/analytics',
	icon: <CreditCard />,
	children: [
		{
			path: '/analytics/analytic',
			name: 'Analytics',
			component: Analytics,
		},
		{
			path: '/analytics/saas',
			name: 'SaaS',
			component: SaaS,
		},
	],
	component: null,
};

const orderRoutes = {
	id: 'Cart',
	path: '/cart',
	icon: <ShoppingCart />,
	component: CheckoutPage,
	children: null,
};

const authRoutes = {
	id: 'Auth',
	path: '/auth',
	icon: <Users />,
	children: [
		{
			path: '/auth/sign-in',
			name: 'Sign In',
			component: SignIn,
		},
		{
			path: '/auth/sign-up',
			name: 'Sign Up',
			component: SignUp,
		},
		{
			path: '/auth/reset-password',
			name: 'Reset Password',
			component: ResetPassword,
		},
		{
			path: '/auth/404',
			name: '404 Page',
			component: Page404,
		},
		{
			path: '/auth/500',
			name: '500 Page',
			component: Page500,
		},
	],
	component: null,
};



const chartRoutes = {
	id: 'Charts',
	path: '/charts',
	icon: <PieChart />,
	component: Chartjs,
	children: null,
};

const landingRoutes = {
	id: 'Landing Page',
	path: '/',
	header: 'Docs',
	icon: <Monitor />,
	component: Landing,
	children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
	id: 'Private',
	path: '/private',
	component: ProtectedPage,
	children: null,
	guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
	dashboardsRoutes,
	pagesRoutes,
	orderRoutes,
	OrdersRoutes,
	analyticsRoutes,
	chartRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes, dashboardsRoutes, pagesRoutes,];

const simpleUser = [
	dashboardsRoutes,
	orderRoutes,
	OrdersRoutes,
	analyticsRoutes,
	chartRoutes,
  ];
  
  const adminUser = [
	dashboardsRoutes,
	pagesRoutes,
	orderRoutes,
	OrdersRoutes,
	analyticsRoutes,
	chartRoutes,
  ];

  const viewer = [
	authRoutes,
  ];

//selectCurrentUser


const layoutRoutes = () => {
	const roleBasedRoutes = JSON.parse(localStorage.getItem('currentUser')) && JSON.parse(localStorage.getItem('currentUser')).role;
	console.log("Current User status in routes", roleBasedRoutes)

	switch (roleBasedRoutes) {
		case 'admin':
		  return adminUser;
		  break;
		case 'user':
			return simpleUser
		  break;
		default:
		  return viewer;
		  break;
	  } 

// 	if(roleBasedRoutes){

// 		if(roleBasedRoutes.is_staff){
// 			return adminUser;
// 		}
// 		else{
// 			return simpleUser;
// 		}
// 	}
// 	else{
// 		return viewer;
// 	}
  }

  // Routes visible in the sidebar
export const sidebarRoutes = layoutRoutes();
