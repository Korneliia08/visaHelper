import s from "./TopNav.module.scss";
import logo from "./../../../assets/logo.png";
import viber from "./../../../assets/socialMedia/viber.png";
import tg from "./../../../assets/socialMedia/tg.png";
import mess from "./../../../assets/socialMedia/mess.png";

function TopNav() {
    const handleAnchorClick = (el) => {
        el.preventDefault(); // відміняємо стандартний перехід
        const href = el.currentTarget.getAttribute("href"); // отримуємо href
        const id = href.replace("#", ""); // витягуємо id
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };
    return (
        <div className={s.topNav}>
            <div className={s.divForLogo}>
                <img src={logo} alt="logo" className={s.logo}/>
                <h5 className={s.logoName}>visa-helper</h5>
            </div>
            <div className={s.containerForNavAndBtn}>
                <nav className={s.nav}>
                    <a href="#aboutMe" onClick={handleAnchorClick}>Про мене</a>
                    <a href="#servicesAndConsultation" onClick={handleAnchorClick}>Послуги</a>
                    <a href="#opinions" onClick={handleAnchorClick}>Відгуки</a>
                    <a href="#servicesAndConsultation" onClick={handleAnchorClick}>Консультація</a>
                    <a href="#contacts" onClick={handleAnchorClick}>Контакти</a>
                </nav>
                <div className={s.blockForBtns}>
                    <img src={viber} alt="viber" className={s.iconContact}/>
                    <img src={tg} alt="tg" className={s.iconContact}/>
                    <img src={mess} alt="mess" className={s.iconContact}/>
                </div>
            </div>
        </div>
    );
}


export default TopNav;
