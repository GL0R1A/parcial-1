import Layout from "../components/Layout";
const Logros = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Logros de Ada Lovelace</h1>
            <p>
              Estos son algunos de los logros más destacados y hitos en la trayectoria de Ada Lovelace.
            </p>
            <ul>
              <li>
                <strong>Visión de la Máquina Analítica:</strong> Ada Lovelace
                imaginó las posibles aplicaciones de la máquina analítica de
                Charles Babbage, previendo que podría usarse no solo para
                cálculos matemáticos, sino también para crear música y arte.
              </li>
              <li>
                <strong>Primer Algoritmo de Computadora:</strong> Escribió el
                primer algoritmo diseñado para ser procesado por una máquina,
                lo que la convierte en la primera programadora de la historia.
              </li>
              <li>
                <strong>Colaboración con Charles Babbage:</strong> Trabajó
                estrechamente con Charles Babbage, brindando un enfoque
                matemático y conceptual a su máquina analítica y ampliando su
                potencial.
              </li>
              <li>
                <strong>Legado Duradero:</strong> Sus contribuciones a la
                programación y la informática sentaron las bases para la
                tecnología moderna y continúan inspirando a científicos y
                programadores en la actualidad.
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Logros</h3>
            <p>
              - Pionera en la programación y visión tecnológica
            </p>
            <h3>Contribuciones</h3>
            <p>- Desarrollo del primer algoritmo para ser procesado por una máquina</p>
            <h3>Legado</h3>
            <p>
              - Sentó las bases para la programación moderna y la informática
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Logros;
