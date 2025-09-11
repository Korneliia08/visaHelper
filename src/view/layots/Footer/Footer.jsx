import s from "./Footer.module.scss";
import {FaFacebookMessenger, FaTelegram, FaViber} from "react-icons/fa";


function Footer({mainWrapper}) {
    const currentYear = new Date().getFullYear();
    return (
        <div className={s.footer} id={"contacts"}>
            <div className={s.wrapper} style={{width: mainWrapper}}>
                <div className={s.top}>
                    <div className={s.left}>
                        <div className={s.topInLeft}>
                            <div className={s.block}>
                                <div className={s.adress}>
                                    <p className={s.adressSpan}>місто Мостиська, вул.Галицького 56,Україна</p>
                                </div>
                                <div className={s.numberOfPhoneAndEmail}>
                                    <span className={s.number}>+380 96 770 79 45</span>
                                    <span className={s.email}>albina@gmail.com</span>
                                </div>
                            </div>
                            <div className={s.mapOfSite}>
                                <a href="" className={s.link}>Про мене</a>
                                <a href="" className={s.link}>Послуги</a>
                                <a href="" className={s.link}>Відгуки</a>
                                <a href="" className={s.link}>Консультація</a>
                            </div>
                        </div>
                        <div className={s.bottomInLeft}>
                            <div className={s.socials}>
                                <FaViber className={s.iconStyle}/>
                                <FaTelegram className={s.iconStyle}/>
                                <FaFacebookMessenger className={s.iconStyle}/>
                            </div>
                            <button className={s.btnContact}>Зателефонуйте до мене</button>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.blockRight}>
                            <h4 className={s.title}>Години відкриття</h4>
                            <div className={s.days}>
                                <p className={s.content}>Пн–Пт: 10:00 – 16:00</p>
                                <p className={s.content}>Сб–Нд: вихідні</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.bottom}>
                    <div className={s.smallBlock}>
                        <span className={s.allRight}> &copy; {currentYear} Всі права захищені.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
