import s from "./StepByStepSupport.module.scss";
import Card from "./Card/Card.jsx";
import {data} from "./CardsData.jsx";

function StepByStepSupport({mainWrapper}) {
    return (
        <div className={s.stepByStepSupport}>
            <div className={s.wrapper} style={{width: mainWrapper}}>
                <div className={s.topContainer}>
                    <h5 className={s.title}>Допомагаю робити складні речі простішими</h5>
                    <p className={s.content}>Підтримую вас на кожному етапі процесу, щоб ви почувалися впевнено і
                        могли зосередитись на головному</p>
                </div>
                <div className={s.bottomContainer}>
                    {data.map((obj, index) => {
                        return <Card key={index} data={obj}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default StepByStepSupport
