import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import AddLocalsparepart from './components/LocalspareAddPage';

function AddLocalspareMainPage({ setOpen }) {
	return (
		<React.Fragment>
			<MaterialLayout>
				<AddLocalsparepart setOpen={setOpen} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddLocalspareMainPage;
