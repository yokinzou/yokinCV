import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Programming</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Python, Java, C#, JavaScript, SQL, Django, RestAPI,React, HTML5, CSS
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Others</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Machine Learning, MongoDB, dbt, Azure data factory, Azure Databricks,
          Bigquery, Snowflake, Power BI, Tableau, SQL Server, Git
        </div>
      </div>
    </Section>
  );
}
