import logo from '../images/film-reel (2).png';
import './header.css';

function Header(){
 return <nav>
    <div className="container">
        <div className="nav-wrapper">
            <a href="!#" className="brand-logo center">React <img src={logo}/> Movie</a>

        </div>
    </div>
</nav>
}
export{Header};