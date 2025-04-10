import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const details = [
    {
      role: "Senior Software Engineer",
      company: "INDMoney",
      companyUrl: "https://indmoney.com",
      duration: "2022 - 2023",
      description:
        "Developed key features of INDMoney's flagship app and contributed across several verticals.",
    },
    {
      role: "Senior Software Engineer",
      company: "INDMoney",
      companyUrl: "https://indmoney.com",
      duration: "2022 - 2023",
      description:
        "Developed key features of INDMoney's flagship app and contributed across several verticals.",
    },
  ];

  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto border-2 border-amber-50 px-2 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Work Experience
        </h1>
      </div>
      <div className="flex flex-col gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <ExperienceCard
            key={index}
            role={item.role}
            company={item.company}
            companyUrl={item.companyUrl}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
