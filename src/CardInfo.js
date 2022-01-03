import './CardInfo.css';

function CardInfo(props) {

    return (
        <div className="col-lg-4 col-md-12">
            <div className="info-card card mt-1 mx-auto p-0">
                <img className="card-img-top mt-4" src={props.img} />
                <div className="card-body">
                    <h5 className="card-title mt-3 mb-2">{props.name}</h5>
                    <p className="card-text mx-auto text-center text-muted">{props.id}</p>
                    <div className="media-links">
                        <a href="#" className>
                            <i className="fab fa-facebook" />
                        </a>
                        <a href="#" className>
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="#" className>
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className>
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;