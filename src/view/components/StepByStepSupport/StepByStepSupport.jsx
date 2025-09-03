import s from "./StepByStepSupport.module.scss";

function StepByStepSupport({mainWrapper}) {
    return (
        <div className={s.stepByStepSupport}>
            <div className={s.wrapper} style={{width: mainWrapper}}>
                <div className={s.topContainer}>
                    <h5 className={s.title}>I help people tackle their business issues</h5>
                    <p className={s.content}>It’s easy to get the results you want with the top-quality advice.</p>
                </div>
            </div>
        </div>
    )
}

export default StepByStepSupport
