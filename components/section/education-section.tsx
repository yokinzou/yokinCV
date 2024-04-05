import Section from "./section";
import { Icons } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";

const education: EducationProps[] = [
  {
    title: "MSc. Business Analytics",
    gpa: "Merit",
    org: {
      name: "University of Liverpool",
      logo: "/images/logos/liverpool.jpg",
    },
    time: "Sep 2020 - Mar 2022",
  },
  {
    title: "BA.Accounting",
    gpa: "top10%",
    org: {
      name: "Guangxi University of Finance and Economics",
      logo: "/images/logos/GXUFE.jpg",
    },
    time: "Sep 2014 - Jun 2018",
  },
];
function Education({ title, gpa, org, time }: EducationProps) {
  return (
    <section className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      <div className=""> {/* Removed 'hidden md:block' */}
        <div className="text-sm font-semibold flex flex-wrap justify-between text-zinc-700 dark:text-zinc-300">
          <div className="flex gap-x-4 flex-wrap">
            <LabelWithGraphic image={org.logo} content={org.name} />
            <span className="font-bold text-black dark:text-white">
              {title}
            </span>
            {/* <span>{gpa}</span> */}
          </div>
          <span>{time}</span>

          {title === "MSc. Business Analytics" && (
            <div className="flex text-sm">
              <div className="w-32 flex-shrink-0 flex justify-between">
                <span className="font-bold">Main Courses</span>:
              </div>
              <div className="font-normal">
                Database and database managements, Data miming & machine
                learning, Data structures and algorithm, Computer network, Big
                data application, Social network analysis, Econometrics
              </div>
            </div>
          )}

          {title === "BA. Accounting" && (
            <div className="flex text-sm">
              <div className="w-32 flex-shrink-0 flex justify-between">
                <span className="font-bold">Main Courses</span>:
              </div>
              <div className="font-normal">
                Linear Algebra, Calculus, Probability Theory, Statistics,
                Advanced Financial Modeling, Finance, Economics, Advanced
                Accounting, Flash Animation Design
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ... rest of the code remains the same */}
    </section>
  );
}


export default function EducationSection() {
  return (
    <Section title="EDUCATION">
      <div className="flex flex-col gap-y-1">
        {education.map((e, index) => (
          <Education key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
