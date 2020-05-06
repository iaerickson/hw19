import React from "react";

function SearchBox({ handleSearchChange }) {
	return (
		<div className='searchbox'>
			<form className='form-inline'>
				<input
					className='form-inline'
					type='search'
					placeholder='Search'
					aria-label='Search'
					onChange={(e) => handleSearchChange(e)}
				/>
			</form>
		</div>
	);
}
export default SearchBox;
