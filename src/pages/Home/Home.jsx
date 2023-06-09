import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { Button, Container } from "@components/atoms";
import { About, FAQ, Speakers, Sponsors } from "@components/organisms";

function Home() {
  return (
    <div>
      <Container className="space-y-24 mb-24">
        <section>
          <Fade>
            <img
              className="h-64 md:h-96 w-full max-w-screen-2xl object-cover rounded-lg border-2"
              src={require("@assets/images/iox-main-banner.png")}
              alt=""
            />
          </Fade>
        </section>

        <section>
          <Fade>
            <About />
          </Fade>
        </section>

        <section>
          <Fade>
            <div className="space-y-12">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold">Speakers</h1>
                <p className="text-lg font-semibold">
                  Our speakers are influential folks & allies who have been associated with communities within their
                  organisations, cities, country and beyond.
                </p>
              </div>
              <Speakers featured />

              <div className="flex items-center justify-start">
                <Button
                  linkTo="/speakers"
                  text="See All Speakers"
                  icon={<FiChevronRight />}
                />
              </div>
            </div>
          </Fade>
        </section>

        <section>
          <Fade>
            <div className="space-y-12">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold">Frequently asked questions</h1>
                <p className="text-lg font-semibold">Need Answers? Everything you need to know</p>
              </div>
              <FAQ />
            </div>
          </Fade>
        </section>

        <section>
          <Fade>
            <Sponsors />
          </Fade>
        </section>
      </Container>
    </div>
  );
}

export default Home;
