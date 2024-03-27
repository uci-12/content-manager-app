import ResourceHighlight from "@/components/ResourceHighlight";
import Newsletter from "@/components/Newsletter";
import ResourceList from "@/components/ResourceList";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

function Home({ resources}) {
  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      <Newsletter />
      <ResourceList resources={resources} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch(`${process?.env?.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  };
}

export default Home;
