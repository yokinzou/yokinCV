import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";


const exp: ExperienceProps[] = [
  {
    head1: "Data Engineer",
    ///  head2: <LabelWithGraphic icon={Icons.Stack} content="JavaScript, AWS" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/pg.jpg"
        content="Procter & Gamble(Global Top 500) "
      />
    ),
    head4: "Dec 2023 - Pres",
    bulletPoints: [
      "Led the Migration of Synapse Database to Databricks (over 100 tables and over 200 views) to reduce the database cost and save maintenance effort",
      "Built robust ETL pipeline on databricks platform and azure data factory for multi departments to provide high quality data",
      "Designed BI report data quality checking tool to monitor the data source availability to reduce incidents(at least 50 incidents reduced per day) to improve user experience",
      "Develped BI semantic models (over 20 in production) to help users to realize the self-serve BI service to contribute to company digital strategy of data democracy"
    ],
  },
  {
    head1: "Data Engineer",
    //head2: <LabelWithGraphic icon={Icons.Stack} content="Financial Modeling" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/idemia.jpg"
        content="IDEMIA, Shenzhen (French Big Company)"
      />
    ),
    head4: "Feb 2022 - Sep 2023",
    bulletPoints: [
      "I am the data engineer and data science tech lead in Shenzhen Factory and lead the PTM and other engineers to finish digital projects by following the sprint workflow",
      "Built over 20 Power BI reports cooperating with cross-functional departments colleagues",
      "Developed over 30 ETL pipelines (Python,SSIS,Azure data factory,dbt,Kettle) to extract manufacturing BOM data to automate and optimize the business process",
      "Led the machine learning project to predict the actual BOM quantity needed to reduce  production overs (at least 1 million RMB per year)",
      "Improved data warehouse performance including tables and views redesign and query fine-tune",
      "Led the automation algorithms(Python) to automate supply chain works (at least 4 working hours per day) and developed low code applications (Power APP) to optimize company business process",
      "Provided training on the application of data science (machine learning) to company colleagues (with more than 50 participants) to enhance colleagues' mindset of digital benefits"
     
    ],
  },
  {
    head1: "Data Scientist Intern",
    // head2: <LabelWithGraphic icon={Icons.Stack} content="Content Creation" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/didi.jpg"
        content="DiDi Global, Beijing (China Uber)"
      />
    ),
    head4: "Aug 2021 - Jan 2022",
    bulletPoints: [
      "Conducted AB Testing experiments to support the business decision",
      "Build the Tableau dashboards to automate data generation",
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
