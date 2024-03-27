import Link from "next/link";
import moment from "moment";
import ResourceLabel from "./ResourceLabel";



const ResourceHighlight = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources?.map(resource => (
            <section key={resource.id} className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <Link href={`/resources/${resource.id}`}>
                      <h1 className="title">{resource.title}</h1>
                    </Link>
                    <p>{resource.description}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
