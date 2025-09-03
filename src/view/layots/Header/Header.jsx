import s from "./Header.module.scss";
import imgHeader from "./../../../assets/header.png";

function Header({mainWrapper}) {
    return (
        <div className={s.header}>
            <div className={s.wrapper} style={{width: mainWrapper}}>
                <div className={s.left}>
                    <h1 className={s.subtitle}>Ваші документи під контролем.</h1>
                    <p className={s.content}>
                        Швидке і безпечне оформлення всіх необхідних документів.
                    </p>
                    <div className={s.blockForBtns}>
                        <button className={s.aboutMeBtn}>Про мене</button>
                        <button className={s.consultationBtn}>Консультація</button>
                    </div>
                </div>
                <div className={s.right}>
                    <img src={imgHeader} alt="imgHeader" className={s.imgHeader}/>
                </div>
            </div>
        </div>
    )
}

export default Header
