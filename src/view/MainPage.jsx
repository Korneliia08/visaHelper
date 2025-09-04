import s from "./mainPage.module.scss";
import TopNav from "./layots/TopNav/TopNav.jsx";
import Header from "./layots/Header/Header.jsx";
import StepByStepSupport from "./components/StepByStepSupport/StepByStepSupport.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import MyServices from "./components/MyServices/MyServices.jsx";

function MainPage() {
    const mainWrapper = 1100;
    return (
        <div className={s.mainPage}>
            <TopNav/>
            <Header mainWrapper={mainWrapper}/>
            <StepByStepSupport mainWrapper={mainWrapper}/>
            <AboutMe mainWrapper={mainWrapper}/>
            <MyServices/>
        </div>
    )
}

export default MainPage
