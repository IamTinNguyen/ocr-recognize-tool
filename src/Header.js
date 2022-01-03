import './Header.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#385f77'}}>
            <a className="navbar-brand" href="#">RECOGNIZE TOOLS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link pl-5" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-5" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-5" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <div className="search-wrapper ml-5">
                            <form className="form-inline">
                                <input className="px-0 border-0 form-control" type="search" placeholder="Search..." />
                                <button id="search-btn" className="btn" type="submit">
                                    <i className="fas fa-search" />
                                </button>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
