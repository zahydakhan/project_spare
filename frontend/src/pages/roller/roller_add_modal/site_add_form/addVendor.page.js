import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import AddRoller from './components/SiteAddPage/AddRoller.page';

function AddVendorMainPage({ setOpen }) {
	return (
		<React.Fragment>
			<MaterialLayout>
				<AddRoller setOpen={setOpen} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddVendorMainPage;
