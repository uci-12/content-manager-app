import Link from "next/link";
import Layout from "@/components/Layout";
import axios from "axios";
import moment from "moment";
import ResourceLabel from "@/components/ResourceLabel";

const ResourceDetail = ({ resource }) => {
  let status = resource.status;
  status = status === "active" ? "inactive" : status === "inactive" ? "active" : status;

  const handleResourceStatus = () => {
    axios.patch("/api/resources", { ...resource, status})
    .then((_) => location.reload())
    .catch((err) => alert(err.response.data));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    {resource.status === "inactive" && (
                      <>
                        <Link href={`/resources/${resource.id}/edit`}>
                          <button className="button is-warning">UPDATE</button>
                        </Link>
                        <button className="button is-success ml-2" onClick={handleResourceStatus}>
                          {status.toUpperCase()}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(`${process?.env?.API_URL}/resources/${params?.id}`);
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;