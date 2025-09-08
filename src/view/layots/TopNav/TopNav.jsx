import s from "./TopNav.module.scss";
import logo from "./../../../assets/logo.png";
import tg from "./../../../assets/iconsSocialsMedia/tg.png";
import insta from "./../../../assets/iconsSocialsMedia/insta.png";

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
                    <a href="">Консультація</a>
                    <a href="">Контакти</a>
                </nav>
                <div className={s.blockForBtns}>
                    <img src={tg} alt="tg" className={s.iconContact}/>
                    <img src={insta} alt="insta" className={s.iconContact}/>
                </div>
            </div>
        </div>
    )
}

export default TopNav
