import React from "react"
import  Hero  from "../../pages/LandingPageComp/Hero";
import FirstComponents from "../../pages/LandingPageComp/firstCompo";
import SecondComp from "../../pages/LandingPageComp/secondCompo";
import ThirdComponents from "../../pages/LandingPageComp/thirdComponent";
import FourthComponents from "../../pages/LandingPageComp/fourthComponent";
import LastComponents from "../LandingPageComp/lastComponents";



const LandingPage = () => {
    return (
        <div>
            <Hero />
            <FirstComponents/>
            <SecondComp/>
            <ThirdComponents/>
            <FourthComponents/>
            <LastComponents/>
            
           
          
        </div>
    )
}

export default LandingPage;