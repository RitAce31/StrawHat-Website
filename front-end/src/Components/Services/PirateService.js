import axios from "axios";

const URL = "http://127.0.0.1:8000/api/";

export const getPirateList = async () => {
  let apiUrl = URL + "character-list/";
  return axios.get(apiUrl);
};

export const getPirateDetail = (id) => {
  let apiUrl = URL + "character-list/" + id;
  return axios.get(apiUrl);
};

export const delPirate = (id) => {
  let apiUrl = URL + "character-list/" + id;
  return axios.delete(apiUrl);
};

export const addPirate = (obj) => {
  let apiUrl = URL + "add-character";
  return axios.post(apiUrl, obj);
};

export const addPirateDetail = (obj) => {
  let apiUrl = URL + "add-character-details";
  return axios.post(apiUrl, obj);
};

export const addBountyData = () => {
  let apiUrl = URL + "bounty-details";
  return axios.get(apiUrl);
};

export const delBountyData = (id) => {
  let apiUrl = URL + "delete-bounty" + "/" + id;
  return axios.get(apiUrl);
};
