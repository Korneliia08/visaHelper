import s from "./TopNav.module.scss";
import logo from "./../../../assets/logo.png";
import viber from "./../../../assets/socialMedia/viber.png";
import tg from "./../../../assets/socialMedia/tg.png";
import mess from "./../../../assets/socialMedia/mess.png";
import fb from "./../../../assets/socialMedia/fb.png";
import insta from "./../../../assets/socialMedia/insta.png";


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
                    <img src={viber} alt="viber" className={s.iconContact}/>
                    <img src={tg} alt="tg" className={s.iconContact}/>
                    <img src={mess} alt="mess" className={s.iconContact}/>
                    <img src={fb} alt="fb" className={s.iconContact}/>
                    <img src={insta} alt="insta" className={s.iconContact}/>
                </div>
            </div>
        </div>
    )
}

export default TopNav;
