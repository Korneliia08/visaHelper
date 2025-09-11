import {useEffect, useState} from "react";
import s from "./ArrowToTop.module.scss";
import {IoIosArrowUp} from "react-icons/io";

function ArrowToTop() {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // кнопка з'являється після 50px скролу
                setVisible(true);
            } else { // на верху сторінки ховаємо
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`${s.arrowToTop} ${visible ? s.visible : ""}`}
            onClick={scrollToTop}
        >
            <IoIosArrowUp className={s.iconTop}/>
        </div>
    );
}

export default ArrowToTop;
