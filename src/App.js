import fotoPerfil from './fotoperfil.jpg'
import "./App.css"

function App() {
  return (
    <div>
      <header>
        <h1></h1>
        <img src={fotoPerfil}></img>
        <h2>Jean Henrique=</h2>
      </header>

      <main>
        <section>
          <h1>Dados para contato</h1>
          <p>Jean Henrique</p>
          <p>44 98839-3065</p>
          <p>Email: silva.santos.jean1901@gmail.com</p>
          <p>Linkdin: xxxxxxx</p>
          <p>Github: xxxx</p>
        </section>
        <section>
          <h1>Formação</h1>
          <div>
            <article>
              <h2>Ensino Medio Profissionalizante em Desenvolvimento de Sistemas</h2>
              <p>Instituição:Colegio Santa Maria Goretti</p>
              <p>Ano de Conclusão: 2027</p>
            </article>

            <article>
              <h2></h2>
              <p>Instituição</p>
              <p>Ano de Conclusão:</p>
            </article>

          </div>
        </section>
        <section>

        </section>
      </main>

      </div>
      );
}
      export default App;