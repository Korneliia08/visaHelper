import s from "./MyServices.module.scss";
import {FaArrowRight} from "react-icons/fa";

function MyServices({mainWrapper}) {
    return (
        <div className={s.wrapper} style={{width: mainWrapper}} id={"servicesAndConsultation"}>
            <div className={s.mainWrapper}>
                <div className={s.topConsultation}>
                    <div className={s.left}>
                        <h2 className={s.title}>
                            Доступні послуги
                        </h2>
                        <p className={s.description}>Оберіть потрібну послугу зі списку та дізнайтеся деталі.</p>
                    </div>
                    <button className={s.btnConsulting}>Консультація</button>
                </div>
                <div className={s.containerForServices}>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Робоча віза</h4>
                        </div>
                        <p className={s.description}>Робоча віза – документ для легальної роботи за кордоном.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Віза по карті поляка</h4>
                        </div>
                        <p className={s.description}>Віза по карті поляка – дозволяє легально перебувати і працювати в
                            Польщі.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Реєстрація на першу карту поляка</h4>
                        </div>
                        <p className={s.description}>Перша карта поляка – підтверджує польське походження та права її
                            власника.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Продовження карти поляка</h4>
                        </div>
                        <p className={s.description}>Продовження карти поляка – оновлення прав та дозволів для власника
                            карти.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Реєстрація на MRG</h4>
                        </div>
                        <p className={s.description}>MRG – медична страховка для перебування у Польщі.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Заповнення анкети на стали побит</h4>
                        </div>
                        <p className={s.description}>Документ для отримання дозволу на постійне
                            проживання в Польщі.
                            роботу.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Автоцивілка</h4>
                        </div>
                        <p className={s.description}>Автоцивілка – обов’язкова страхування для автомобіля.</p>
                    </div>
                    <div className={s.service}>
                        <div className={s.topBlock}>
                            <FaArrowRight className={s.icArrow}/>
                            <h4 className={s.title}>Зелена карта</h4>
                        </div>
                        <p className={s.description}>Зелена карта – міжнародна страховка для авто за кордоном.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyServices
