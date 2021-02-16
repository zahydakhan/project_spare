import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';

import AddLocalspare from './components/LocalspareEditPage/EditLocalspares.page';

function AddVendorMainPage({ setOpen, row }) {
	return (
		<React.Fragment>
			<MaterialLayout>
				<AddLocalspare setOpen={setOpen} row={row} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddVendorMainPage;
