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
    head4: "Sep 2023 - Pres.",
    bulletPoints: [
      "Aliquip exercitation ut sunt ullamco magna cillum eiusmod proident sunt pariatur minim mollit labore.",
      "Do laborum deserunt officia sit fugiat laborum est esse tempor commodo nisi magna sint.",
      "Qui enim pariatur ea ullamco laborum do ipsum sit laboris voluptate deserunt ut irure do.",
      "Amet culpa nostrud cillum ut pariatur enim velit.",
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
    head4: "Jul 2020 - Sep 2022",
    bulletPoints: [
      "Sint fugiat eu magna irure eu incididunt est sint occaecat fugiat tempor.",
      "Ipsum culpa fugiat consectetur nulla enim consequat ea tempor fugiat. Reprehenderit ullamco cillum consectetur dolore tempor voluptate consectetur.",
      "Nostrud quis reprehenderit non officia ullamco magna. Magna Lorem minim nisi occaecat adipisicing.",
    ],
  },
  {
    head1: "Data Scientist Intern",
   // head2: <LabelWithGraphic icon={Icons.Stack} content="Content Creation" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/didi.jpg"
        content="Didi Global, Beijing"
      />
    ),
    head4: "Jun 2019 - Jul 2020",
    bulletPoints: [
      "Voluptate occaecat reprehenderit aliqua mollit do amet eiusmod minim velit et non deserunt ex.",
      "Anim laborum elit eiusmod ullamco deserunt aliqua id est.",
    ],
  },

];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
