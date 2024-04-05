import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { type ImageProps } from "next/image";
import { headers } from "next/headers";

type ProjectTitleProps = {
  image: ImageProps["src"];
  title: string;
  link: string;
};

async function getStarNumber(owner: string, repo: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const queryParams = new URLSearchParams({ owner, repo }).toString();
  const res = await fetch(
    `${protocol}://${host}/api/github/star?${queryParams}`,
    {
      cache: "no-cache",
    }
  );
  const { starNumber } = await res.json();
  return starNumber;
}

function ProjectTitle({ image, title, link }: ProjectTitleProps) {
  return null;
  // <Link
  //   href={link}
  //   target="_blank"
  //   className="flex items-center gap-x-1 group"
  // >
  //   <LabelWithGraphic image={image} content={title} />
  //   <Icons.Link
  //     size={12}
  //     className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
  //   />
  // </Link>
}

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    // {
    //   // head1: (
    //   //   <ProjectTitle
    //   //     image="/images/logos/nextjs.png"
    //   //     title="nk data extraction and Process automation"
    //   //     link="https://nextjs.org/"
    //   //   />
    //   // ),
    //   head1:
    //     // <LabelWithGraphic
    //     //   icon={Icons.Stack}
    //     "Ink BOM Data Extraction and Process Automation (Deployed in the Company Level)",
    //   // />
    //   // head3: (
    //   //   <LabelWithGraphic
    //   //     icon={Icons.Star}
    //   //     content={`# Github Stars: ${await getStarNumber(
    //   //       "vercel",
    //   //       "next.js"
    //   //     )}`}
    //   //   />
    //   // ),
    //   // head4: "Sep 2022 - Oct 2022",
    //   bulletPoints: [
    //     "Extract the BOM data of ink in excel files using python to save the data in json file then to import the json data to database and deploy the script in remote server to run in daily basis",
    //     "Build a Power BI report to use the extracted data to automate the ink consumption calculation of daily manufactuing work orders with parameters input from sharepoint to save ink operators 90% of daily working time",
    //   ],
    // }
    // // ,
    // // {
    // //   head1:
    // //     "Physical Access Application Development in Power APP (Deployed in the Company Level)",
    //   // (
    //   //   <ProjectTitle
    //   //     image="/images/logos/tailwind.webp"
    //   //     title="Tailwind CSS"
    //   //     link="https://tailwindcss.com/"
    //   //   />
    //   // ),

    //   // head2: <LabelWithGraphic icon={Icons.Stack} content="HTML, CSS" />,
    //   // head3: <LabelWithGraphic icon={Icons.Star} content={`# Users: 412343`} />,
    //   // head4: "May 2023 - July 2023",
    // //   bulletPoints: [
    // //     "Collaborate with the business owner to define the app workflow",
    // //     "Develop the physical application app to realize the different managers to approve their own physical access and save the data in sharepoint automatically to save 1 hour per time and papers",
    // //   ],
    // // },
    // // // {
    // //   head1:
    // //     "Printing Overs Data Science Project (Deployed in the company level)",
    // //   // (
    // //   //   <ProjectTitle
    // //   //     image="/images/logos/tailwind.webp"
    // //   //     title="Tailwind CSS"
    // //   //     link="https://tailwindcss.com/"
    // //   //   />
    // //   // ),

    // //   // head2: <LabelWithGraphic icon={Icons.Stack} content="HTML, CSS" />,
    // //   // head3: <LabelWithGraphic icon={Icons.Star} content={`# Users: 412343`} />,
    // //   head4: "May 2023 - July 2023",
    // //   bulletPoints: [
    // //     "Collaborate with the business owner to define the app workflow",
    // //     "Develop the physical application app to realize the different managers to approve their own physical access and save the data in sharepoint automatically to save the time(1 hour per time) and papers",
    // //   ],
    // // },
  ];

  return (
    <Section title="PROJECT">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
