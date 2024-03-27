import axios from "axios";

export default async function activeResource(req, res) {
  const axiosRes = await axios.get(`${process?.env?.API_URL}/activeresource`);
  const response = axiosRes.data;
  return res.send(response);
}