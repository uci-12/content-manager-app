import axios from "axios";

export default async function resource(req, res) {
  let url = `${process?.env?.API_URL}/resources`;
  if (req.method === "GET") {
    const dataRes = await fetch(url);
    const data = await dataRes.json();
    return res.send(data);
  }

  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority} = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }

    if (req.method === "PATCH") {
      url += `/${id}`;
    }

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosRes.data);
    } catch (e) {
      return res.status(422).send(e.response.data);
    }
  }
}