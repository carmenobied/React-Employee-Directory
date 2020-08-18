import axios from "axios";
// Export an object containing methods we'll use for accessing the API

const BASEURL = 'https://randomuser.me/api/?results=100';

export default {
  // Gets all users
  getEmployees: function() {

    return axios.get(BASEURL);
  }
};