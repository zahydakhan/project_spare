import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import SpareAddPage from './components/SpareAddPage';

function AddVendorMainPage({ setOpen }) {
	return (
		<React.Fragment>
			<MaterialLayout>
				<SpareAddPage setOpen={setOpen} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddVendorMainPage;
