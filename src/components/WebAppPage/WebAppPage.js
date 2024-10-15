import React from "react";
import WebAppBody from "./WebAppBody";
import SectionContainer from "../Shared/SectionContainer";
import PageWithHeader from "../Shared/PageWithHeader";

function WebAppPage() {
    return (
        <PageWithHeader HomeHeaderText={"Web Application Projects"}>
            <SectionContainer id="section1" marginT="2rem" marginB="5rem">
                <WebAppBody />
            </SectionContainer>
        </PageWithHeader>
    );
}

export default WebAppPage;
