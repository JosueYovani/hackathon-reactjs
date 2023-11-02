import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="prose prose-blue lg:prose-xl">
      <h1>¡Bienvenido a la empresa!</h1>

      <p>Como parte de tu entrenamiento, hemos asignado este reto para ver como logras solucionar los problemas de este proyecto.</p>

      <p>
        Este proyecto tiene errores de código, errores de organización en el árbol de archivos y errores para ejecutar bien el proyecto.
      </p>
      <p>Consideraciones:</p>
      <ul>
        <li>Este proyecto debería de poder ejecutar SCSS.</li>
        <li>Este proyecto debería de poder ejecutar JSX.</li>
        <li>Este proyecto debería de poder ejecutar Tailwind CSS.</li>
        <li>Este proyecto debería de poder hacer uso del Router de React</li>
        <li>Al yo visitar la ruta de /notes, me debería dejar ver las notas que están en la aplicación.</li>
        <li>Las notas deberían de cargarse através de un contexto.</li>
      </ul>

      <p>Hablando en números:</p>
      <ul>
        <li>Este proyecto tiene al rededor de 15 errores de código provenientes de nombramiento de variables, nombre de clases y orden del código.</li>
        <li>El último pasante, dejó un desorden en el sistema de archivos por lo que tendrás que ordenarlo.</li>
        <li>Este proyecto tiene al rededor de 5 errores de configuración.</li>
      </ul>
      <h2>Resources</h2>

      <ul>
        <li>
          <a href="https://reactjs.com" target="_blank">
            React
          </a>

          <ul>
            <li>
              <a href="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform">
                React 17 JSX Transform
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </a>

          <ul>
            <li>
              <a href="https://tailwindcss.com/docs/typography-plugin">
                @tailwindcss/typography
              </a>
            </li>

            <li>
              <a href="https://tailwindcss-forms.vercel.app/">
                @tailwindcss/forms
              </a>
            </li>

            <li>
              <a href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio">
                @tailwindcss/aspect-ratio
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://reactrouter.com/">React Router</a>
        </li>

        <li>
          <a href="https://webpack.js.org/">Webpack</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
