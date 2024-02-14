import { useState } from "react";
import Header from "../components/Header";
import PageI from "../components/PageI";
import PageII from "../components/PageII";
import Pagination from "../components/Pagination";

export default function SignupPage(){
    const [Page,setPage]=useState(1);
    const [Page1Data,setPage1Data]=useState({
        MemberEmail:null,
        MemberPassword:null,
        MemberRole:null,
        companyName:null,
        industryType:null,
        personName:null,
        contactNumber:null,
    })
    const [Page2Data,setPage2Data]=useState({
        position:null,
        QuestionaireResponse:{
            question1:"what is your name",
            ans1:null,
            question2:"industryType",
            ans2:null,
            question3:"your hobbies",
            ans3:null,
            question4:"name some places ?",
            ans4:null,
            question5:"xyz",
            ans5:null,
        }
    })
    
    return(
        <div className="mt-5">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            {
                Page===1 && <PageI setPage1Data={setPage1Data} Page1Data={Page1Data} />
            }{
                Page===2 && <PageII Page2Data={Page2Data} setPage2Data={setPage2Data} />
            }
            <Pagination Page={Page} setPage={setPage} Page1Data={Page1Data} Page2Data={Page2Data} />
        </div>
    )
}