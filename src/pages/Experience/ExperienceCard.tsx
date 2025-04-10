interface ExperienceCardProps {
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({
  role,
  company,
  companyUrl,
  duration,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="bg-[#282626] p-6 py-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <h2 className="text-start text-xl font-bold text-amber-100">{role}</h2>

        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-50 hover:text-amber-100 px-2 bg-purple-500 rounded-3xl cursor-pointer"
        >
          {company}
        </a>

        <span className="text-sm text-white bg-gray-400 px-2 rounded-3xl">
          {duration}
        </span>
      </div>

      <p className="mt-2 text-white">{description}</p>
    </div>
  );
};

export default ExperienceCard;
