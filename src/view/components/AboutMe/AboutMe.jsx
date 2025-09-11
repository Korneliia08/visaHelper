import s from "./AboutMe.module.scss";
import {FaCheck} from "react-icons/fa";
import aboutMePhoto from "./../../../assets/header.png";

function AboutMe({mainWrapper}) {
    return (
        <div className={s.aboutMe}>
            <div className={s.wrapper} style={{width: mainWrapper}}>
                <div className={s.left}>
                    <div className={s.contentBlock}>
                        <h4 className={s.title}>
                            Ваш провідник у складних ситуаціях — <span className={s.gradientText}>Альбіна Мушак</span>
                        </h4>
                        <p className={s.content}>
                            Мене звати Альбіна Мушак, і вже багато років я допомагаю людям знаходити правильні рішення у
                            складних ситуаціях.
                            Моя мета – не лише дати відповідь на запитання, а й підтримати, пояснити всі можливі
                            варіанти та супроводити на кожному етапі.
                            <div className={s.list}>
                                <h4 className={s.subtitle}> Чому саме я?</h4>
                                <div className={s.row}>
                                    <FaCheck className={s.icCheck}/>
                                    <span className={s.liStyle}>Багаторічний досвід консультацій</span>
                                </div>
                                <div className={s.row}>
                                    <FaCheck className={s.icCheck}/>
                                    <span className={s.liStyle}>Індивідуальний підхід до кожного клієнта</span>
                                </div>
                                <div className={s.row}>
                                    <FaCheck className={s.icCheck}/>
                                    <span className={s.liStyle}>Відповідальність і увага до деталей</span>
                                </div>
                            </div>

                            Я вірю, що кожен має право отримати зрозумілу допомогу, без зайвих труднощів та стресу. Саме
                            тому моя робота – зробити процес максимально простим і зрозумілим для вас.
                        </p>
                    </div>
                    <div className={s.statistics}>
                        <div className={s.blockOfStatistic}>
                            <h3 className={s.number}>82%</h3>
                            <p className={s.description}>повторних звернень</p>
                        </div>
                        <div className={s.blockOfStatistic}>
                            <h3 className={s.number}>99%</h3>
                            <p className={s.description}>довіри від тих, хто звертається</p>
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <img src={aboutMePhoto} alt="aboutMePhoto" className={s.imgStyle}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
