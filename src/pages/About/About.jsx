import React from "react";
import "./index.css";
import locimg from "./Images/locationimage.png";
import Story1 from "./Images/Story1.jpg";
import Story2 from "./Images/Story2.jpg";
import Story3 from "./Images/Story3.jpg";
import Story4 from "./Images/Story4.jpg";

import Diff1 from "./Images/Diff1.png";
import Diff2 from "./Images/Diff2.png";
import Diff3 from "./Images/Diff3.png";
import Diff4 from "./Images/Diff4.png";

export default function About() {
  return (
    <div className="about_comp">
      <div className="FirstSection bg-img">
        <div className="inner-container _718px center">
          <div class="text-center">
            <h1 class="display-2 color-neutral-100">About Strider</h1>
            <p class="color-neutral-300 mg-bottom-56px">
              Discover the perfect blend of Airbnb's diverse accommodations and
              Couchsurfing's authentic cultural experiences on our innovative
              travel website. Connect with welcoming hosts worldwide and find
              unique accommodations that cater to your travel preferences. Join
              our community for personalized and enriching journeys beyond
              traditional accommodations.
            </p>
          </div>
        </div>
      </div>

      {/* OUR LOCATIONS */}

      <div id="locations" className="section wf-section">
        <div className="container-default w-container">
          <div className="inner-container _554px center">
            <div className="text-center mg-bottom-48px">
              <h2>Meet our locations</h2>
              <p className="mg-bottom-0">
                Explore our wide range of guest rooms available in carefully
                selected locations worldwide. From bustling city centers to
                serene countryside retreats, our collection of accommodations
                offers something for every traveler. Discover your ideal
                destination and book a comfortable stay with us today.
              </p>
            </div>
          </div>

          <div class="mg-bottom-80px">
            <div class="grid-2-columns _1fr---1-5fr _1-col-tablet">
              <div className="inner-container _430px">
                <div className="card locations mg-bottom-24px">
                  <h3 className="heading-h4-size mg-bottom-16px">
                    Banglore,Karnataka
                  </h3>
                  <div className="flex">
                    <div className="line-rounded-icon color-accent-1 mg-right-12px">
                      
                    </div>
                    <div>2950 Kammanhali Rd, Marathaali, India - 469233</div>
                  </div>
                </div>

                <div className="card locations mg-bottom-24px">
                  <h3 className="heading-h4-size mg-bottom-16px">
                    Chennai, Tamil Nadu
                  </h3>
                  <div className="flex">
                    <div className="line-rounded-icon color-accent-1 mg-right-12px">
                      
                    </div>
                    <div>999 Gift Street, Santa's Pocket, India - 231943</div>
                  </div>
                </div>

                <div className="card locations small">
                  <h3 className="heading-h4-size mg-bottom-16px">
                    {" "}
                    Ahmedabad, Gujarat
                  </h3>
                  <div className="flex">
                    <div className="line-rounded-icon color-accent-1 mg-right-12px">
                      
                    </div>
                    <div>225, Vierra Residency II, India - 379001</div>
                  </div>
                </div>
              </div>

              <img
                src={locimg}
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 56vw, 715.203125px"
                alt="Our different locations"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OUR STORY */}

      <div class="section bg-neutral-200 wf-section">
        <div class="container-default w-container">
          <div class="grid-2-columns mg-bottom-48px">
            <div class="inner-container _520px tablet-max-width-100">
              <h2>How we started</h2>
              <p class="mg-bottom-0">
                We began our business with a passion for connecting travelers
                with unique experiences. Inspired by the success of Airbnb and
                Couchsurfing, we combined their best features to create a
                platform that offers diverse accommodations and authentic
                cultural exchanges, shaping the way people travel and connect
                around the world. Our journey started with a vision to
                revolutionize the travel industry, providing a seamless platform
                that combines the best aspects of Airbnb and Couchsurfing for an
                exceptional travel experience.{" "}
              </p>
            </div>
            <div class="inner-container _562px tablet-max-width-100">
              <h2>Our story</h2>
              <p class="mg-bottom-0">
                Our story began with a group of travel enthusiasts who shared a
                common desire to create meaningful connections and memorable
                experiences for fellow travelers. We embarked on a journey,
                building a platform that seamlessly blended the best features of
                Airbnb and Couchsurfing, allowing us to curate a diverse range
                of accommodations and foster authentic cultural exchanges. Over
                the years, our dedication has enabled us to create a thriving
                global community that continues to shape the way people explore
                the world.
              </p>
            </div>
          </div>
          <div class="grid-2-columns gap-24px     _76fr---1fr opaci">
            <div
              id="Story1"
              class="border-radius-24px border-radius-16px-mbl overflow-hidden"
            >
              <img
                src={Story1}
                loading="eager"
                sizes="      (max-width: 479px) 38vw,    (max-width: 767px) 39vw, (max-width: 1439px) 40vw, 516.    453125px"
                alt="Our Story     -    Rental    X Webflow Template"
                class="height-100 fit-cover width-100"
              />
            </div>
            <div class="grid-1-column gap-row-24px">
              <div class="grid-2-columns _2-col-mbl gap-24px">
                <img
                  src={Story2}
                  loading="eager"
                  sizes="      (max-width: 479px) 23vw,     (max-width: 767px) 24vw, (max-width:     1439px) 25vw, 327.    7734375px"
                  alt="Our     Story     -    Rental    X Webflow Template"
                  class="border-radius-24px border-radius-16px-mbl     width-100"
                />
                <img
                  src={Story3}
                  loading="eager"
                  sizes="      (max-width: 479px) 23vw,     (max-width: 767px) 24vw, (max-width:     1439px) 25vw, 327.    7734375px"
                  alt="Our     Story     -    Rental    X Webflow Template"
                  class="border-radius-24px border-radius-16px-mbl     width-100"
                />
              </div>
              <img
                src={Story4}
                loading="eager"
                sizes="       (max-width:    479px) 50vw, (max-width: 767px) 51vw, (max-width: 1439px) 53vw, 679.546875px"
                alt="Our Story     -     Rental    X    Webflow Template"
                class="border-radius-24px border-radius-16px-mbl width-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What makes us Differerent */}

      <div class="section wf-section">
        <div class="container-default w-container">
          <div>
            <h2 class="text-center diffheading">
              What makes Strider different?
            </h2>
            <div class="inner-container _574px center">
              <div class="text-center mg-bottom-32px">
                <p class="mg-bottom-48">
                  We offer a curated selection of unique accommodations combined
                  with the opportunity to connect with welcoming local hosts,
                  creating a truly immersive and personalized travel experience.
                </p>
              </div>
            </div>
          </div>
          <div class="grid-2-columns gap-row-56px _1-col-tablet">
            <div className="block">
              <div class="flex align-center vertical-align-left-mbp">
                <img
                  src={Diff1}
                  loading="eager"
                  alt="Unique Experience - Rental X Webflow Template"
                  class="mg-right-32px       mg-bottom-16px-mbp    max-width-206px"
                />
                <div>
                  <h3 class="diffheading">Unique experience</h3>
                  <p class="mg-bottom-0">
                    Unlike traditional platforms, we go beyond providing
                    accommodations by offering curated experiences, local
                    recommendations, and personalized itineraries tailored to
                    each traveler's interests.{" "}
                  </p>
                </div>
              </div>
              <div class="flex align-center vertical-align-left-mbp">
                <img
                  src={Diff2}
                  loading="eager"
                  alt="Customer First - Rental X Webflow Template"
                  class="mg-right-32px    mg-bottom-16px-mbp    max-width-206px"
                />
                <div>
                  <h3 class="diffheading">Customer-first</h3>
                  <p class="mg-bottom-0">
                    Putting the customer first is at the core of our values. We
                    prioritize the needs and preferences of our customers by
                    providing a user-friendly platform, responsive customer
                    support, and personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="block">
              <div class="flex align-center vertical-align-left-mbp">
                <img
                  src={Diff3}
                  loading="eager"
                  alt="Eco    Friendly - Rental X Webflow Template"
                  class="mg-right-32px    mg-bottom-16px-mbp max-width-206px"
                />
                <div>
                  <h3 class="diffheading">Accommodations</h3>
                  <p class="mg-bottom-0">
                    We offer a curated selection of diverse and distinctive
                    accommodations, ranging from boutique hotels to cozy
                    homestays, ensuring that each traveler finds a space that
                    suits their preferences and enriches their travel
                    experience.
                  </p>
                </div>
              </div>
              <div class="flex align-center vertical-align-left-mbp">
                <img
                  src={Diff4}
                  loading="eager"
                  alt="Sustainable - Rental X Webflow Template"
                  class="mg-right-32px    mg-bottom-16px-mbp max-width-206px"
                />
                <div>
                  <h3 class="diffheading">Local Insights</h3>
                  <p class="mg-bottom-0">
                    {" "}
                    Our platform provides valuable local insights and
                    recommendations, allowing travelers to discover hidden gems
                    and authentic experiences that go beyond tourist
                    attractions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
