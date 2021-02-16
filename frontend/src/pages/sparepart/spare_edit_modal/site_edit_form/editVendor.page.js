import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import AddSites from './components/SpareEditPage/EditSpares.page';

function AddVendorMainPage({ setOpen, row }) {
	return (
		<React.Fragment>
			<MaterialLayout sty>
				<AddSites setOpen={setOpen} row={row} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddVendorMainPage;
