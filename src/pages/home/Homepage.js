import { useState } from "react";
import Locations from "./Locations";
import TrustedBy from "./TrustedBy";
import Instagram from "./Instagram";
import LuxuriCars from "./luxuryCars";
import HeroSection from "./HeroSection";
import LuxuryYachts from "./LuxuryYachts";
import Testimonials from "./testimonials";
import { HomePageContainer } from "./style";
import FirstOneToKnow from "./FirstOneToKnow";
import SearchModal from "common/searchModalScenario";

const Index = () => {
  const [searchModalState, setSearchModalState] = useState(false);

  return (
    <HomePageContainer>
      {searchModalState ? (
        <SearchModal setSearchModalState={setSearchModalState} />
      ) : null}
      <HeroSection setSearchModalState={setSearchModalState} />
      <Locations />
      <LuxuriCars />
      <LuxuryYachts />
      <Testimonials />
      <Instagram />
      <FirstOneToKnow />
      <TrustedBy />
    </HomePageContainer>
  );
};

export default Index;