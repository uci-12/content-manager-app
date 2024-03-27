import axios from "axios";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ResourceForm from "@/components/ResourceForm";



const ResourceCreate = () => {
  
  const router = useRouter();

  const handleCreateResource = (formData) => {
    axios.post("/api/resources", formData)
    .then((_) => router.push("/"))
    .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onFormSubmit={handleCreateResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
