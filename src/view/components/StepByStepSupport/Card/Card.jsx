import s from "./Card.module.scss";

function Card({data}) {
    const Icon = data.icon;
    return (
        <div className={s.card} style={{backgroundColor: data.color}}>
            <Icon className={s.iconStyle}/>
            <div className={s.blockForContent}>
                <h3 className={s.title}>
                    {data.title}
                </h3>
                <p className={s.content}>
                    {data.content}
                </p>
            </div>
        </div>
    )
}

export default Card
