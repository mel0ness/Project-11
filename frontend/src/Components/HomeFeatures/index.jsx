import "../../Style/Components/HomeFeatures/homefeatures.scss"

const HomeFeatures = ({src, title, p}) => {
    return (
        <div className="feature-item">
        <img src={src} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>
         {p}
        </p>
      </div>
    )
}

export default HomeFeatures;