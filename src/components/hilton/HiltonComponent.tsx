import './hilton.scss';
import hiltonImage from "../../assets/images/home/banner/hilton.png";

const HiltonComponent = () => {
  return (
    <div className="hilton">
      <h3 className='title__hilton'>
        Franquiciado por
      </h3>
      <img src={hiltonImage} alt="Hilton Garden Inn" />
    </div>
  )
}

export default HiltonComponent