import s from "./mainPage.module.scss";
import TopNav from "./layots/TopNav/TopNav.jsx";
import Header from "./layots/Header/Header.jsx";
import StepByStepSupport from "./components/StepByStepSupport/StepByStepSupport.jsx";

function MainPage() {
    const mainWrapper = 1100;
    return (
        <div className={s.mainPage}>
            <TopNav/>
            <Header mainWrapper={mainWrapper}/>
            <StepByStepSupport mainWrapper={mainWrapper}/>
        </div>
    )
}

export default MainPage
