import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import AddRoller from './components/RollerEditPage/EditRoller.page';

function AddVendorMainPage({ setOpen, row }) {
	return (
		<React.Fragment>
			<MaterialLayout sty>
				<AddRoller setOpen={setOpen} row={row} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddVendorMainPage;
