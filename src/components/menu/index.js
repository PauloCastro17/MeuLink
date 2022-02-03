import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://www.youtube.com/channel/UC20O7cplZyp1U9iCnfF-jqA">
                <BsYoutube size={24} color="#FFF" />
            </a>
            <a className="social" href="https://www.instagram.com/caxtroooo/">
                <BsInstagram size={24} color="#FFF" />
            </a>
            <Link to="/links" className="menu-item">
                Meus Links
            </Link>
        </div>
    );
}

export default Menu;