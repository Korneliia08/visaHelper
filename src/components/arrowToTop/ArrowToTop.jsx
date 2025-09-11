import s from "./ArrowToTop.module.scss";
import {IoIosArrowUp} from "react-icons/io";

function arrowToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className={s.arrowToTop} onClick={scrollToTop}><IoIosArrowUp className={s.iconTop}/></div>
    )
}

export default arrowToTop;
