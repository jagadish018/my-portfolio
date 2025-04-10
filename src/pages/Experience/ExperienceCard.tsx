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
    <div className="bg-[#282626] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-bold text-amber-100">{role}</h2>
      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        {company}
      </a>
      <p className="text-sm text-gray-400">{duration}</p>
      <p className="mt-2 text-white">{description}</p>
    </div>
  );
};

export default ExperienceCard;
