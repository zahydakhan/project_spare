import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import EditSites from './components/SpareEditPage/EditSites.page';

function AddSiteMainPage({ setOpen, row }) {
	return (
		<React.Fragment>
			<MaterialLayout sty>
				<EditSites setOpen={setOpen} row={row} />
			</MaterialLayout>
		</React.Fragment>
	);
}

export default AddSiteMainPage;
