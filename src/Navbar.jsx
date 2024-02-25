import './Navbar.css'
import hamburgerIcon from './assets/icon-hamburger.svg'

const Navbar = () => {
    const clicked = ()=>{
        
    }
   return(
    <>
        <nav>
            <div><a href="#">Logo</a></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>

        <div className='mobileNav'>
            <div className='logoHamburgerContainer'>
                <div><a href="#">Logo</a></div>
                 <img src={hamburgerIcon} alt="hamburgerIcon" onClick={clicked} />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    </>
   )
};
  
  export default Navbar;
