import LandingHeader from "./LandingHeader";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="landing">
      <div className="bg-dark text-light p-1 d-flex justify-content-between align-items-center">
        <LandingHeader />
      </div>
      <div className="landing-content">
        <div className="bg-image d-flex flex-column align-items-center justify-content-center">
          <h3 className="bg-dark text-light p-4 rounded-pill wel-come">
            Welcome To pool Tournament
          </h3>
          <p className="play text-center btn p-2 text-dark bg-light">
            <Link to="/register" className="text-decoration-none">
              Let's Play
            </Link>
          </p>
        </div>
        <section className="p-4">
          <article className="p-5">
            <h3>Welcome to the Club</h3>
            <p className="container">
            Welcome to the Club, where the thrill of the game meets the spirit of competition.
            Today, we bring together pool enthusiasts from all skill levels to showcase their talent,
            strategy, and passion for the game. Prepare for a day of intense matches, strategic shots,
            and camaraderie. Let the tournament begin and may the best player win!
            </p>
          </article>
          <div className="d-flex mt-5">
            <div className="art-image"></div>
            <article>
              <h3>A trusted Club</h3>
              <p className="container">
              At our club, trust and camaraderie are at the heart of every game.
              Our commitment to providing a fair, friendly, and competitive environment
              has earned us the loyalty of players from all walks of life. Here,
              you can hone your skills, forge new friendships, and experience the true spirit of the game.
              Join us and become part of a community that values integrity and excellence in every shot.
              </p>
            </article>
          </div>
          <article className="mt-5 p-4">
            <h3>Games and Rules</h3>
            <p className="container">
            Our tournament follows a single elimination format.
            Players compete in one-on-one matches, and the loser of
            each match is eliminated from the tournament.
            The winner advances to the next round until a champion is crowned.
            Make sure to play by the rules and give it your best shot!
            </p>
          </article>
          <div className="row d-flex justify-content-center p-3">
            <article className="col-3">
              <h3>Pool Billard</h3>
              <p>
              Pool billiards is about potting balls into pockets with precision and strategy.
              Show off your skills and aim for the win in this timeless game.
              </p>
            </article>
            <article className="col-3">
              <h3>8 Ball pool</h3>
              <p>
              In 8-ball pool, pot all your assigned balls (solids or stripes) before sinking the 8-ball to claim victory.
              It’s a game of careful planning and execution.
              </p>
            </article>
            <article className="col-3">
              <h3>snooker</h3>
              <p>
              Snooker requires potting red and colored balls in sequence to score points.
              It’s a test of strategic thinking and precise cue control.
              </p>
            </article>
          </div>
          <article className="container p-3">
            <h3>Few words about us</h3>
            <p className="container p-3">
            Our club fosters a love for pool with top-notch facilities, expert coaching, and a vibrant community.
            Whether you're here to compete or socialize, we’re committed to making your experience enjoyable and memorable.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;