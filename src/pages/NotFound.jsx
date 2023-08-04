import Layout from "../components/Layout";
const NotFound = () => {
  return (
    <Layout>
      <div className="container mt-5 text-center">
        <img
          src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
          alt="Not Found"
          style={{ maxWidth: "20%", height: "auto" }}
        />
        <h1 className="mt-4">Error 404: Página no encontrada</h1>
        <p>
          Esta página no puede ser encontrada, ¡parece que te has perdido en el
          ciberespacio! :c
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
