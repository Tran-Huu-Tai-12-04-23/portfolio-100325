import DevArtProfile from "./ui/DevArtprofile";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m <a className="text-[#4ECCA3] px-2" href="#">
              Tran Huu Tai
            </a>, a passionate full-stack developer with one year of experience at ApeTechs Solution.
At my company, I primarily work with NestJS and React Native, building scalable and efficient applications. However, my vision as a full-stack developer goes beyond just frameworks and technologies. I believe that a true full-stack developer is not defined by specific tools but by the ability to analyze problems, design effective solutions, and adapt based on experience.
I’m continuously learning and expanding my expertise to become a well-rounded problem solver, capable of building seamless and impactful applications. My goal is to refine my skills, explore new technologies, and contribute meaningful solutions to the developer community.
          </p>
        </div>
         <DevArtProfile/>
      </div>
    </section>
  );
};

export default AboutMe;
