import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import moment from "moment";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchActiveResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");
      const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }
      setResource(resource);
    }

    fetchActiveResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    },1000);

    if (seconds < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  },[seconds]);

  const handleCompleteResource = () => {
    axios.patch("/api/resources", { ...resource, status: "complete"})
    .then((_) => location.reload())
    .catch((_) => alert("Cannot complete resource"));
  };

  const hasResource = resource && resource.id;
  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : "No Resource Active"}
      </h1>
      <div className="time-wrapper">
        {hasResource && (
          seconds > 0 ? (
            <h2 className="elapsed-time">
              {hasResource && seconds}
            </h2>
          ) : (
            <h2 className="elapsed-time">
              <button className="button is-success" onClick={handleCompleteResource}>Click and Done!</button>
            </h2>
          )
        )}
      </div>
      {hasResource && (
        seconds > 0 ?
        (
          <Link href={`/resources/${resource.id}`}>
            <button className="button is-info is-outlined">Go to resource</button>
          </Link>
        ) : (
          <Link href="/">
            <button className="button is-info is-outlined">Go to resources</button>
          </Link>
        )
      )}
    </div>
  );
};

export default ActiveResource;