import React from "react";
import InternshipBody from "./InternshipBody";
import PageWithHeader from "../Shared/PageWithHeader";
import SectionContainer from "../Shared/SectionContainer";

function WebAppPage() {
    return (
        <PageWithHeader HomeHeaderText={"Internships"}>
            <SectionContainer id="section1" marginT="2rem" marginB="5rem">
                <InternshipBody />
            </SectionContainer>
        </PageWithHeader>
    );
}

export default WebAppPage;
