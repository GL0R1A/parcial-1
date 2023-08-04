import Layout from "../components/Layout";
const Biografia = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Biografía de Ada Lovelace</h1>
            <p>
              Augusta Ada King-Noel, Condesa de Lovelace, nacida el 10 de diciembre de 1815, fue una matemática y escritora conocida por su trabajo en la máquina analítica, un dispositivo mecánico de propósito general diseñado por Charles Babbage.
            </p>
            <p>
              Ada Lovelace es a menudo considerada como la primera programadora del mundo. En la mitad del siglo XIX, escribió notas detalladas y perspicaces sobre la máquina analítica, visualizando sus posibles usos más allá de simples cálculos numéricos. Sus notas incluían un algoritmo destinado a ser procesado por la máquina, lo que se considera el primer programa de computadora del mundo.
            </p>
            <p>
              Las ideas visionarias de Ada se extendieron más allá de la tecnología de su época y sentaron las bases para la programación moderna de computadoras. Sus contribuciones continúan inspirando e influyendo en el campo de la tecnología.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Logros</h3>
            <p>
              - Primera programadora conocida en la historia
            </p>
            <h3>Innovación</h3>
            <p>- Desarrollo del primer algoritmo destinado a ser procesado por una máquina</p>
            <h3>Legado</h3>
            <p>
              - Sentó las bases para la programación moderna
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Biografia;
