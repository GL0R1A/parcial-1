import Layout from "../components/Layout";
const Contacto = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Contacto</h1>
            <p>
              ¿Tienes alguna pregunta o quieres colaborar? Llena el formulario
              a continuación y te responderé lo antes posible.
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <h3>Información de Contacto</h3>
            <p>
              <strong>Correo electrónico:</strong> contacto@example.com
            </p>
            <p>
              <strong>Teléfono:</strong> (502) 4562-7890
            </p>
            <p>
              <strong>Ubicación:</strong> Guatemala, Guatemala
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
