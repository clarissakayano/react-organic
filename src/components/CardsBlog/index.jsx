import {CardBlog, Cover} from "./styles";


const CardsBlog =({image, alt, title, description1, description2}) => (

    <CardBlog className="card w-100 flex-md-row flex-column-md-reverse flex-lg-column m-3">
        <div className=" ratio ratio-1x1">
        <Cover image={image} alt={alt} className="card-img-top img-fluid img-wrapper " />
        </div>
        <div className="card-body px-4 px-lg-4">
            <h5 className="card-title mt-3">{title}</h5>
            <p className="card-text mt-3 color-text">{description1}</p>
        <div className="card-footer mb-2 mt-3 px-1">
            <small className="text-gray">{description2}</small>
        </div>
        </div>
    </CardBlog>
);

export default CardsBlog;

