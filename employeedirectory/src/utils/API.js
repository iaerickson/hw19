import axios from "axios";

export default {
	//gets 200 us nationality users to seed app
	getUsers: function () {
		return axios.get("https://randomuser.me/api/?results=200&nat=us");
	},
};
