import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import AddSites from './components/SiteAddPage';

function AddVendorMainPage({ setOpen }) {
	return (
		<React.Fragment>
			<MaterialLayout>
				<AddSites setOpen={setOpen} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddVendorMainPage;
