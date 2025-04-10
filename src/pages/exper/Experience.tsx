import Card from "./Card";

const Experience = () => {
  const details = [
    {
      role: "Fullstack Developer Intern",
      company: "Stacklane",
      companyUrl: "https://stacklane.co/",
      duration: "Mar - Jun 2025",
      description: "Developed Hackernews server clone",
    },
  ];

  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-5 max-w-screen-md mx-auto  px-2 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Work Experience
        </h1>
      </div>
      <div className="flex flex-col gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <Card
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
