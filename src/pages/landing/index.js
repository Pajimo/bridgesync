import { Helmet } from "react-helmet";
import Wrapper from "../../components/Wrapper";
import colors from "../../theme/color";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Intelliver - AI Copilot / Bot for your business</title>
        <meta property="og:title" content="Homepage" />
        <meta property="og:site_name" content="Intelliver" />
        {/* <meta property="og:url" content="https://germiny.org" /> */}
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:description"
          content="Germiny&reg; &mdash; A technological solution which aims to improve the primary healthcare system in the world. Our Motto: Germiny&reg;. Redefining existence through technology. At Germiny®, we work to provide the best solutions to global issues, through the power of technology and team work."
        /> */}

        {/* <script type="application/ld+json">
              {organizationStructuredData({
                headline: "Collaboration, Innovation, Technology.",
                authorName: "Arifayan Idowu",
                description:
                  "We are a technology driven company focused on the development of mobile softwares aimed at bringing convenient world class services to individuals, families, and companies, wherever they are",
              })}
            </script> */}
      </Helmet>
      <Wrapper>
        <div style={{ paddingTop: 20 }} className="2xl:pl-56 xl:pl-16 px-8">
          <div className="lg:flex justify-between">
            <div>
              <h1
                style={{
                  fontFamily: "Nineteenth",
                  color: colors.white,
                }}
                className="lg:text-7xl text-5xl"
              >
                Healthcare Productivity with AI
              </h1>
              <p
                className="lg:text-2xl text-lg pt-6"
                style={{ color: "#C0C0C0" }}
              >
                Transforming Your Healthcare Collaboration Experience with the
                Power of AI.
              </p>
              <Link
                to={"/auth/user/login"}
                className="rounded-xl md:w-2/5 w-3/4 mt-10 py-4 px-6 bg-black flex items-center gap-2 justify-between cursor-pointer"
                // style={{ backgroundColor: "#7DF9FF" }}
              >
                <p
                  style={{ color: colors.white }}
                  className="md:text-lg text-base"
                >
                  Create Workspace
                </p>
                <FaArrowRight color="white" />
              </Link>
            </div>
            <div className="w-full h-[35rem]"></div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default LandingPage;
