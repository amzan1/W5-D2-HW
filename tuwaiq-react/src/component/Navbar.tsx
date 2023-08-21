import Logo from '../assets/logo.svg'

function Navbar() {
    return (
    
    <>
        <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid d-flex flex-row-reverse">
            <a className="navbar-brand" href="#"><img src={Logo} alt="" width={213}height={48} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
            <ul className="navbar-nav me-4">
                <li className="nav-item">
                <a className="nav-link " href="#">الاكاديميات التابعة</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">حول الاكادمية</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">المعسكرات والبرامج</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">الرئيسية</a>
                    </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
    )
}

export default Navbar