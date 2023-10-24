import './App.js'
import './Pportfolio.css'
function WebContent() {
  return (
    <div>
      <title>Personal Portfolio Webpage</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width initial-scale=1.0" />
      <link rel="stylesheet" href="Pportfolio.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
      <header className="header">
        <p>Fernando Mingo, developer</p>
        <nav id="navbar">
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Work">Work</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="About">
        <h1>I am Fernando Mingo</h1>
        <p><em>a developer</em></p>
      </section>
      <section id="Work">
        <h1>These are some of my projects</h1>
        <div className="project-tile">
          <a href="Ensayo_IA.html" target="_blank">
            <img className="project-img" src="https://store-images.s-microsoft.com/image/apps.45806.14197312115402585.1d94f203-6b04-4273-802d-33e85d3a3fe9.acc74b7d-a11f-48ef-8c9b-aba9db58b6f1" alt="AI essay" />
            <p>Ensayo IA</p>
          </a>
          <a href="https://github.com/FernandoMingo/Python-projects" target="_blank">
            <img className="project-img" src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png?w=750&h=750&q=100&fm=png" alt="Python logo" />
            <p>Python Projects</p>
          </a>
          <a href="https://codepen.io/freeCodeCamp/full/wgGVVX" target="_blank">
            <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="project Calculator" />
            <p>Calculator*</p>
          </a>
          <a href="https://codepen.io/freeCodeCamp/full/mVEJag" target="_blank">
            <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg" alt="project Map Data" />
            <p>Map Data*</p>
          </a>
          <a href="https://codepen.io/freeCodeCamp/full/wGqEga" target="_blank">
            <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png" alt="project Wiki Viewer" />
            <p>Wiki Viewer*</p>
          </a>
          <a href="https://codepen.io/freeCodeCamp/full/KzXQgy" target="_blank">
            <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png" alt="project Tic Tac Toe" />
            <p>Tic Tac Toe*</p>
          </a>
        </div>
        <a href="https://www.freecodecamp.org/FernandoMingo" target="_blank" className="show-all">Show all&gt;</a>
      </section>
      <section id="Contact">
        <h1>If you want to work with me...</h1>
        <p><em>do not hesitate to contact me</em></p>
        <div className="social-icons">
        <a id="profile-link" target="_blank" href="mailto:mingomorenof@gmail.com">
          <i className="fab fa-google" /> Gmail
        </a>
        <a id="profile-link" target="_blank" href="https://github.com/FernandoMingo">
            <i className="fab fa-github" /> Github
          </a>
          <a id="profile-link" target="_blank" href="https://instagram.com/ferchumingo">
            <i className="fab fa-instagram" /> Instagram
          </a>
          <a id="profile-link" target="_blank" href="https://www.freecodecamp.org/FernandoMingo">
            <i className="fab fa-free-code-camp" /> freeCodeCamp
          </a>
        </div>
        <hr />
        <p className="disclaimer">Projects with an * have not been made by me</p>
      </section>
    </div>
  );
}
export default WebContent;