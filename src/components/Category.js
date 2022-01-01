import './Category.css';

function Category(props) {
    return (
        <div className="row category">{props.name}</div>
    );
}

export default Category;