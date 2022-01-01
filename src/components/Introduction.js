import IntroductionCard from './IntroductionCard';
import IntroductionText from './IntroductionText';

function Introduction() {
    return (
        <div className="row">
            <IntroductionText/>

            <div className="col-md-12 col-lg-6">
                <IntroductionCard
                    id="card-1"
                    name="Plant identification"
                />
        
                <IntroductionCard
                    id="card-2"
                    name="Text extraction"
                />
            </div>
        </div>
    );
}

export default Introduction;
