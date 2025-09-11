import s from "./mainPage.module.scss";
import Header from "./layots/Header/Header.jsx";
import StepByStepSupport from "./components/StepByStepSupport/StepByStepSupport.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import MyServices from "./components/MyServices/MyServices.jsx";
import TopNav from "./layots/TopNav/TopNav.jsx";
import Footer from "./layots/Footer/Footer.jsx";
import ArrowToTop from "../components/arrowToTop/ArrowToTop.jsx";

function MainPage() {
    const mainWrapper = 1100;
    return (
        <div className={s.mainPage}>
            <TopNav/>
            <Header mainWrapper={mainWrapper}/>
            <StepByStepSupport mainWrapper={mainWrapper}/>
            <AboutMe mainWrapper={mainWrapper}/>
            <MyServices mainWrapper={mainWrapper}/>
            <Footer mainWrapper={mainWrapper}/>
            <ArrowToTop/>
        </div>
    )
}

export default MainPage
