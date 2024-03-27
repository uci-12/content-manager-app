import axios from "axios";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ResourceForm from "@/components/ResourceForm";


const ResourceEdit = ({ resource }) => {
  const router = useRouter();

  const handleUpdateResource = (formData) => {
    axios.patch("/api/resources", formData)
    .then((_) => router.push(`/resources/${resource.id}`))
    .catch((err) => alert(err?.response?.data))
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm initialData={resource} onFormSubmit={handleUpdateResource} />
          </div>
        </div>
      </div>
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

export default ResourceEdit;