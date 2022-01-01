import './IntroductionCard.css';

function IntroductionCard(props) {
    return (
        <div className="row">
            <div className="card" id={props.id}>
                <h1>{props.name}</h1>
                <button className="btn btn-info mt-3">Click here to discover!</button>
            </div>
        </div>
    );
}

export default IntroductionCard;