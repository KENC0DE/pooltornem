const Landingpage = () => {
  return (
    <div className="landing">
      <nav className="bg-dark p-3 fixed-top">
        <ul className="d-flex justify-content-center">
          <li className="btn text-light">Home</li>
          <li className="btn text-light">Match</li>
          <li className="btn text-light">Players</li>
          <li className="btn text-light">Contact</li>
        </ul>
      </nav>
      <div className="landing-content">
        <div className="bg-image d-flex flex-column align-items-center justify-content-center">
          <h3 className="bg-dark text-light p-3 rounded-pill wel-come">
            Welcome To pool Tournament
          </h3>
          <p className="play text-center btn p-2 text-dark bg-light">
            Let's Play
          </p>
        </div>
        <section className="p-4">
          <article className="p-5">
            <h3>Welcome to the Club</h3>
            <p className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quidem rerum blanditiis saepe fuga eos aut architecto, ducimus hic
              nobis, atque distinctio modi. Numquam illum ab quae corporis! Hic,
              eligendi?
            </p>
          </article>
          <div className="d-flex mt-5">
            <div className="art-image"></div>
            <article>
              <h3>A trusted Club</h3>
              <p className="container">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
                vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit rem quibusdam quod cumque odit recusandae sapiente modi
                placeat assumenda fugiat?
              </p>
            </article>
          </div>
          <article className="mt-5 p-4">
            <h3>Games and Rules</h3>
            <p className="container">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              rerum ducimus deleniti eveniet iste unde ut quod! Corrupti
              doloremque odit deserunt beatae sint, tenetur non?
            </p>
          </article>
          <div className="row d-flex justify-content-center p-3">
            <article className="col-3">
              <h3>Pool Billard</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                repellendus?
              </p>
            </article>
            <article className="col-3">
              <h3>8 Ball pool</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                repellendus?
              </p>
            </article>
            <article className="col-3">
              <h3>snooker</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                repellendus?
              </p>
            </article>
          </div>
          <article className="container p-3">
            <h3>Few words about us</h3>
            <p className="container p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              maiores doloremque molestias illo, odio sapiente voluptatibus cum
              error nesciunt? Minima tempore incidunt consequuntur quibusdam?
              Sed veniam recusandae vel sint rem.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;
