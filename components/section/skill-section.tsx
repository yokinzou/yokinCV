import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Programming</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Python,SQL,Java,Django,RestAPI,React,C#,HTML,CSS,JavaScript
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Data Engineering</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
         Azure data factory, Azure Databricks,dbt,MongoDB,Snowflake,Power BI,Tableau,SQL Server,Git,Machine Learning
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Certificates</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
         Databricks data engineer associate,Azure Fundamentals,PSM Scrum Master
        </div>
      </div>
    </Section>
  );
}
