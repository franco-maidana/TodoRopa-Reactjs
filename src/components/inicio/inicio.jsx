const Inicio = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <h1>TodoRopa</h1>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <section className="d-flex justify-content-center align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEM7zpnhrPKt3pdteMwrLTsvL8YMLHf_M_A&usqp=CAU"
              alt="arrow"
              style={{ height: "400px; width: 500px; margin-right: 10px;" }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvcaMrYZjSzlWV-0qvms42TRBRMJt0YpA-A&usqp=CAU"
              alt="arrow"
              style={{ height: "400px; width: 500px; margin-left: 10px;" }}
            />
          </section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <section>
                  <p className="text-center" style={{ fontSize: "22px" }}>
                    ¡Bienvenido a TiendaRopa! Sumérgete en un mundo de elegancia
                    y comodidad con nuestra cuidadosa selección de moda. Desde
                    prendas clásicas hasta tendencias modernas, tenemos todo lo
                    que necesitas para expresar tu estilo único. Explora nuestra
                    colección y encuentra la pieza perfecta que complemente tu
                    personalidad. En la seccion de productos encontraras todos
                    nuestros modelos.<br></br>
                    ¡Descubre la moda sin esfuerzo con TiendaRopa
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Inicio;
