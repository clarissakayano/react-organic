import {CardBlog} from "./styles";


const CardsBlogRev =({image, title, description1, description2}) => (
    <CardBlog class="card h-100">
        <div className="card-body px-5">
            <h5 className="card-title mt-5">{title}</h5>
            <p className="card-text mt-3 color-text">{description1}</p>
        </div>
        <div className="card-footer mb-5 mt-5 px-5">
            <small className="text-muted">{description2}</small>
        </div>
        <img src={image} className="card-img-top img-fluid" alt="..." />


    </CardBlog>
);

export default CardsBlogRev;


