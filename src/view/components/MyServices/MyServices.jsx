import s from "./MyServices.module.scss";

function MyServices({mainWrapper}) {
    return (
        <div className={s.wrapper} style={{width: mainWrapper}}>
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
                        <h4 className={s.title}>Віза</h4>
                        <p className={s.description}>
                            Допомога у підготовці та оформленні візи для подорожей чи навчання.
                        </p>
                    </div>
                    <div className={s.service}>
                        <h4 className={s.title}>Карта поляка</h4>
                        <p className={s.description}>
                            Консультація та супровід у отриманні Карти поляка.
                        </p>
                    </div>
                    <div className={s.service}>
                        <h4 className={s.title}>Закордонний паспорт</h4>
                        <p className={s.description}>
                            Оформлення та продовження закордонного паспорта для виїзду за кордон.
                        </p>
                    </div>
                    <div className={s.service}>
                        <h4 className={s.title}>Номер PESEL</h4>
                        <p className={s.description}>
                            Допомога у реєстрації та отриманні польського номера PESEL.
                        </p>
                    </div>
                    <div className={s.service}>
                        <h4 className={s.title}>Медична страховка</h4>
                        <p className={s.description}>
                            Підбір та оформлення медичної страховки для перебування за кордоном.
                        </p>
                    </div>
                    <div className={s.service}>
                        <h4 className={s.title}>Дозвіл на роботу</h4>
                        <p className={s.description}>
                            Супровід у отриманні дозволу на роботу в Польщі.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyServices
