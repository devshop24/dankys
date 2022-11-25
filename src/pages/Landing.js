import React from "react";

import PageContainer from "../components/base/PageContainer";
import TitleBar from "../components/landing/TitleBar";
import TopNavigation from "../components/base/TopNavigation";
import ImageHeader from "../components/landing/ImageHeader";
import CompanyHighlights from "../components/landing/CompanyHighlights";
import SloganBanner from "../components/landing/SloganBanner";
import ProductPreviews from "../components/landing/ProductPreviews";
import CTABanner from "../components/landing/CTABanner";
import Footer from '../components/base/Footer';


const Landing = () => (
    <PageContainer>
        <TitleBar />
        <TopNavigation />
        <ImageHeader />
        <CompanyHighlights />
        <SloganBanner />
        <ProductPreviews />
        <CTABanner />
        <Footer />
    </PageContainer>
);

export default Landing;