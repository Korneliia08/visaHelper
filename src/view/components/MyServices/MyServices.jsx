import s from "./MyServices.module.scss";

function MyServices() {
    return (
        <div className={s.mainWrapper}>
            <div className={s.topConsultation}>
                <div className={s.left}>
                    <h2 className={s.title}>
                        I am here for you and your business — every step of the way.
                    </h2>
                    <p className={s.description}>I am here for you and your business — every step of the way.</p>
                </div>
                <button className={s.btnConsulting}></button>
            </div>
            <div className={s.containerForServices}>
                <div className={s.service}>
                    <h4 className={s.title}>Marketing</h4>
                    <p className={s.description}>
                        Understand how marketing concepts work and approach your marketing tasks efficiently.
                    </p>
                </div>
                <div className={s.service}>
                    <h4 className={s.title}>Marketing</h4>
                    <p className={s.description}>
                        Understand how marketing concepts work and approach your marketing tasks efficiently.
                    </p>
                </div>
                <div className={s.service}>
                    <h4 className={s.title}>Marketing</h4>
                    <p className={s.description}>
                        Understand how marketing concepts work and approach your marketing tasks efficiently.
                    </p>
                </div>
                <div className={s.service}>
                    <h4 className={s.title}>Marketing</h4>
                    <p className={s.description}>
                        Understand how marketing concepts work and approach your marketing tasks efficiently.
                    </p>
                </div>
                <div className={s.service}>
                    <h4 className={s.title}>Marketing</h4>
                    <p className={s.description}>
                        Understand how marketing concepts work and approach your marketing tasks efficiently.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default MyServices
