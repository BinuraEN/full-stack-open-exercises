import axios from "axios";

const baseUrl = " http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (note) => {
  const request = axios.post(baseUrl, note);
  return request.then((response) => response.data);
};

const update = (note) => {
  const request = axios.put(`${baseUrl}/${note.id}`, note);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  remove,
};
