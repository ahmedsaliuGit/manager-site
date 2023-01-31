import { useEffect, useState } from "react";

import AvatarAli from "../images/avatar-ali.png";
import AvatarAnisha from "../images/avatar-anisha.png";
import AvatarRichard from "../images/avatar-richard.png";
import AvatarShanai from "../images/avatar-shanai.png";

const getCarouselItemsLength = function () {
  return window.innerWidth >= 1028 ? 3 : 1;
};

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      name: "Anisha Li",
      image: AvatarAnisha,
      testimonial:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      name: "Ali Bravo",
      image: AvatarAli,
      testimonial: `“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`,
    },
    {
      name: "Richard Watts",
      image: AvatarRichard,
      testimonial: `“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`,
    },
    {
      name: "Shanai Gough",
      image: AvatarShanai,
      testimonial: `“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`,
    },
  ];

  useEffect(() => {
    const timeId = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);

    return () => clearInterval(timeId);
  });

  const carouselInfiniteScroll = function () {
    if (currentIndex === data.length - getCarouselItemsLength())
      return setCurrentIndex(0);

    return setCurrentIndex(currentIndex + 1);
  };

  return (
    <main className="-mt-5 lg:mt-5">
      <div>
        <div className="md:bg-[url('images/bg-tablet-pattern.svg')] bg-no-repeat bg-[left_top_6em] bg-pattern3 lg:bg-[url('images/bg-tablet-pattern.svg')] lg:bg-no-repeat lg:bg-[left_-28em_bottom_-19em] lg:pb-20">
          <div className="lg:flex items-start lg:justify-between lg:container lg:mx-auto">
            <div className="text-center lg:text-left mb-5 md:mt-16 w-11/12 container mx-auto">
              <h2 className="text-4xl text-dark-blue font-bold mb-5">
                What’s different about Manage?
              </h2>
              <p className="text-base lg:text-lg text-dark-grayish-blue lg:w-9/12">
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
            <div className="my-14 text-dark-blue">
              <div className="ml-5 mb-5 lg:w-[73%] lg:ml-auto">
                <h3 className="bg-v-pale-red lg:bg-white w-full py-2  mb-5 font-bold rounded-l-full">
                  <span className="w-8 rounded-full text-white text-center bg-b-red py-2 px-6 mr-5 lg:mr-6">
                    01
                  </span>
                  Track company-wide progress
                </h3>
                <p className="w-auto lg:ml-[5.5rem] text-dark-grayish-blue text-base">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
              <div className="ml-5 mb-5 lg:w-[73%] lg:ml-auto">
                <h3 className="bg-v-pale-red lg:bg-white w-full py-2  mb-5 font-bold rounded-l-full">
                  <span className="w-8 rounded-full text-white text-center bg-b-red py-2 px-6 mr-5 lg:mr-6">
                    02
                  </span>
                  Advanced built-in reports
                </h3>
                <p className="w-auto lg:ml-[5.5rem] text-dark-grayish-blue text-base">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
              <div className="ml-5 mb-5 lg:w-[73%] lg:ml-auto">
                <h3 className="bg-v-pale-red lg:bg-white w-full py-2  mb-5 font-bold rounded-l-full">
                  <span className="w-8 rounded-full text-white text-center bg-b-red py-2 px-6 mr-5 lg:mr-6">
                    03
                  </span>
                  Everything you need in one place
                </h3>
                <p className="w-auto lg:ml-[5.5rem] text-dark-grayish-blue text-base">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-4xl text-dark-blue text-center font-bold mb-5">
            What they’ve said
          </h2>
          <div>
            <div className="w-full flex flex-nowrap overflow-hidden mb-10 mt-20">
              {data.map((test, index) => (
                <div
                  key={index}
                  className="relative min-w-full w-full lg:min-w-[33%] lg:w-2/6 carousel-item"
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                >
                  <figure
                    className={`bg-v-light-gray text-center pt-20 pb-10 px-8 mt-14 w-11/12 mx-auto rounded-sm`}
                  >
                    <img
                      src={test.image}
                      alt="thumbnail"
                      className="w-1/4 md:w-[15%] lg:w-[23%] absolute top-0 inset-x-0 mx-auto"
                    />
                    <figcaption className="text-dark-blue font-bold mb-5">
                      {test.name}
                    </figcaption>
                    <blockquote className="text-base text-dark-grayish-blue">
                      {test.testimonial}
                    </blockquote>
                  </figure>
                </div>
              ))}
            </div>
            <div className="w-1/2 mx-auto my-5 lg:hidden">
              <div className="w-1/3 mx-auto flex justify-between items-center">
                {data.map((item, index) => (
                  <span
                    className={`w-3 h-3 rounded-full border-2 border-b-red ${
                      currentIndex === index && "bg-b-red"
                    }`}
                    key={index}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="py-4 px-8 text-white font-medium bg-b-red rounded-full shadow-bottom mx-auto lg:hover:bg-opacity-50">
              Get Started
            </button>
          </div>
        </div>

        <div className="py-24 lg:py-16 lg:mt-40 text-center lg:text-left bg-[url('images/bg-simplify-section-mobile.svg')] bg-no-repeat bg-[left_top_3em] lg:bg-[url('images/bg-simplify-section-desktop.svg')] lg:bg-[left_10em_top_-7em] bg-b-red">
          <div className="w-11/12 container mx-auto lg:flex justify-between items-center">
            <h1 className="text-white text-4xl font-bold leading-[1.3em] px-4 lg:px-0 lg:w-2/5">
              Simplify how your team works today.
            </h1>
            <button className="py-3 px-8 text-b-red font-medium bg-white rounded-full shadow-bottom mx-auto lg:mx-0 lg:ml-auto mt-5 lg:mt-0 lg:hover:text-opacity-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
