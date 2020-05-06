import React from "react";
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
import Header from ".components/Header";

import "./App.css";

function App() {
	return (
		<div className='App'>
			<Wrapper>
				<Header />
				<EmployeeTable />
			</Wrapper>
		</div>
	);
}

export default App;

//Pseudo Code
//
// DB of random users
//
// Table of Users rendered on loaded page
//
// Sort Button by one category
//
// Filter users by one property
//
// Employee Directory Header
//
// randomuser.me (in general)
//
// Search bar
//	DOB Search Range
//
// Table Header
//		Image
//		Name
//		Number
//		Email
//		DOB
