import CardInfo from './CardInfo';
import Category from './Category';
import './Content.css';
import Introduction from './Introduction';
import Service from './Service';

function Content() {
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <Introduction/>

            <Category 
                name="Our services"
            />

            <Service
                name="PLANT IDENTIFICATION" id="plant" value=""
                hr="1.5px"
            />

            <div className='mt-3'></div>

            <Service
                name="TEXT EXTRACTION" 
                mt="true"
                id = "text"
                value=""
            />
        
            <Category 
                name="About us"
            />

            <div className="row mb-5">
                <CardInfo
                    name="Le Nguyen Minh Tri"
                    id="51900001"
                    img="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                />

                <CardInfo
                    name="Nguyen Trung Tin"
                    id="51900002"
                    img="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
                />

                <CardInfo
                    name="Nguyen Minh Phuoc"
                    id="51900003"
                    img="https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg"
                />
            </div>
        </div>
    );
}

export default Content;
