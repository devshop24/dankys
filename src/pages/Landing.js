import React from "react";

import PageContainer from "../components/base/PageContainer";
import ImageHeader from "../components/landing/ImageHeader";
import CompanyHighlights from "../components/landing/CompanyHighlights";
import SloganBanner from "../components/landing/SloganBanner";
import ProductPreviews from "../components/landing/ProductPreviews";
import CTABanner from "../components/landing/CTABanner";


const Landing = () => (
    <PageContainer>
        <ImageHeader />
        <CompanyHighlights />
        <SloganBanner />
        <ProductPreviews />
        <CTABanner />
    </PageContainer>
);

export default Landing;