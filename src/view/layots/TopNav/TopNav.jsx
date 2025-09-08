import s from "./TopNav.module.scss";
import logo from "./../../../assets/logo.png";
import {FaTeamspeak} from "react-icons/fa";

function TopNav() {
    return (
        <div className={s.topNav}>
            <div className={s.divForLogo}>
                <img src={logo} alt="logo" className={s.logo}/>
                <h5 className={s.logoName}>visa-helper</h5>
            </div>
            <div className={s.containerForNavAndBtn}>
                <nav className={s.nav}>
                    <a href="">Про мене</a>
                    <a href="">Послуги</a>
                    <a href="">Відгуки</a>
                    <a href="">Питання</a>
                </nav>
                <div className={s.blockForBtn}>
                    <button className={s.btnContactMe}>Консультація</button>
                    <FaTeamspeak className={s.iconChat}/>
                </div>
            </div>
        </div>
    )
}

export default TopNav
