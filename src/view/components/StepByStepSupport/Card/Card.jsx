import s from "./Card.module.scss";

function Card({data}) {
    return (
        <div className={s.card}>
            <h3 className={s.title}>
                {data.title}
            </h3>
            <p className={s.content}>
                {data.content}
            </p>
        </div>
    )
}

export default Card
