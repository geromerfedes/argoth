
import HiltonComponent from "../hilton/HiltonComponent";
import "./banner-home.scss";

const BannerHome = () => {
  return (
    <>
      <section id="home" className="main-container">
        <div className="home_container">

          <h2 className="title">
            Oportunidad de <br />
            <span>inversión única</span>
          </h2>

          <h4 className="intro">
            Diseñado para el viajero profesional, <span>Argoth Hotel & Business</span> brinda un estilo de vida urbano y vibrante, donde se puede <br />
            trabajar, disfrutar y sentirse como en casa. Habitaciones, locales gastronómicos exclusivos, centro de negocios, rooftop bar, piscina y <br />
            solárium. Calidad, sofisticación, arte y negocios son los atributos que reflejan su esencia.
          </h4>

          <button className="button_home">
            ¡Quiero saber más!
          </button>
        </div>
      </section>
      <HiltonComponent />
    </>
  )
}

export default BannerHome;  