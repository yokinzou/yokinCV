import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";

const exp: ExperienceProps[] = [
  {
    head1: "Data Analytics Engineer",
    ///  head2: <LabelWithGraphic icon={Icons.Stack} content="JavaScript, AWS" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/moomoo.jpg"
        content="Moomoo, Shenzhen (HongKong Company)"
      />
    ),
    head4: "Sep 2023 - Pres",
    bulletPoints: [
      "Maintain the data warehouse and build the Power BI reports to monitor the business KPI.",
      "Build the machine learning pipeline to improve the new low quality user deposit ",
    ],
  },
  {
    head1: "Data Engineer",
    //head2: <LabelWithGraphic icon={Icons.Stack} content="Financial Modeling" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/idemia.jpg"
        content="IDEMIA, Shenzhen (French Company)"
      />
    ),
    head4: "Feb 2022 - Sep 2023",
    bulletPoints: [
      "I am the data engineer and data science technical lead in Shenzhen Factory and lead the PTM and other engineers to finish digital projects by following the sprint workflow",
      "Building Power BI reports cooperating with cross-functional departments",
      "Build the ETL pipelines (Python,SSIS,Azure data factory,dbt,Kettle) to extract manufacturing BOM data to automate and optimize the business process",
      "Build the machine learning model to predict the actual BOM quantity to reduce  production overs",
      "Maintain data warehouse performance including tables and views redesign and query performance optimization",
      "Develop the automation algorithms(Python code) and applications (Power APP) to optimize company business process",
      "Provide data science training to company colleagues to discover valuable digital projects",
    ],
  },
  {
    head1: "Data Scientist Intern",
    // head2: <LabelWithGraphic icon={Icons.Stack} content="Content Creation" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/didi.jpg"
        content="DiDi Global, Beijing"
      />
    ),
    head4: "Aug 2021 - Nov 2021",
    bulletPoints: [
      "Conduct AB Testing experiments to support the business decision",
      "Build the Tableau dashboards to automate the data generation",
    ],
  },
];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE (2 years +)">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
