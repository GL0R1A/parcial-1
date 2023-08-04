import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row mt-3">
          <div className="col-md-8">
            <h1>Ada Lovelace</h1>
            <p>
              Augusta Ada King-Noel, Condesa de Lovelace, nacida el 10 de
              diciembre de 1815, fue una matemática y escritora conocida por su
              trabajo en la máquina analítica, un dispositivo mecánico de
              propósito general diseñado por Charles Babbage.
            </p>
            <p>
              Ada Lovelace es a menudo considerada como la primera programadora
              del mundo. En la mitad del siglo XIX, escribió notas detalladas y
              perspicaces sobre la máquina analítica, visualizando sus posibles
              usos más allá de simples cálculos numéricos. Sus notas incluían un
              algoritmo destinado a ser procesado por la máquina, lo que se
              considera el primer programa de computadora del mundo.
            </p>
            <p>
              Las ideas visionarias de Ada se extendieron más allá de la
              tecnología de su época y sentaron las bases para la programación
              moderna de computadoras. Sus contribuciones continúan inspirando e
              influyendo en el campo de la tecnología.
            </p>
            <div className="col-md-12 text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg"
                alt="Ada Lovelace"
                style={{ maxWidth: "20%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <h3>Sobre Ada Lovelace</h3>
            <p>
              Augusta Ada King-Noel, Condesa de Lovelace, fue una pionera en el
              campo de la programación. Su colaboración con Charles Babbage y
              sus visionarias notas sobre la máquina analítica la convierten en
              la primera programadora conocida. Su trabajo sienta las bases para
              la informática moderna.
            </p>
            <h3>Contribuciones</h3>
            <ul>
              <li>
                Desarrollo del primer algoritmo para ser procesado por una
                máquina
              </li>
              <li>
                Visión de las posibles aplicaciones de la máquina analítica
              </li>
              <li>Influencia duradera en la ciencia y tecnología</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
