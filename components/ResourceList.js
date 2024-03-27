import moment from "moment";
import Link from "next/link";
import ResourceLabel from "./ResourceLabel";


const ResourceList = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {resources?.map(resource => (
                <div key={resource.id} className="column is-5 is-offset-1">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <Link href={`/resources/${resource.id}`}>
                      <h1 className="title has-text-black is-3">{resource.title}</h1>
                    </Link>
                    <p className="has-text-dark">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
