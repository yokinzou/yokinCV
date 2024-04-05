import { Icons } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import Link from "next/link";
import ActionButton from "@/components/action-button";
import { cn } from "@/lib/utils";

type Props = {
  usage: "live" | "pdf";
};

export default function HeaderSection({ usage }: Props) {
  return (
    <section>

     

      <div className="flex justify-between items-center">
   
        <div className="flex items-center">
        <img
              src="/images/portrait.jpeg"
              alt="Portrait"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-400/40"
            />
          <h2 className="text-2xl font-bold mr-4 my-1"> &nbsp;&nbsp; Yuanjian Zou (Yokin)</h2>
          <SocialLink
            href="https://github.com/yokinzou"
            platform="github"
            aria-label="My GitHub"
            className="mx-1 h-4 w-4"
          />
          <SocialLink
            href="https://www.linkedin.com/in/yuanjianzou/"
            platform="linkedin"
            aria-label="My LinkedIn"
            className="mx-1 h-4 w-4"
          />
        </div>
        
        <ActionButton
          text={usage === "live" ? "Download Resume" : "View Live Resume"}
          usage={usage}
          className={cn(usage === "live" && "hidden sm:block")}
        />
      </div>
      <div className="flex flex-wrap gap-4 gap-y-1 text-sm">
        <Link
          href="mailto:your.name@email.com"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.Mail size={12} className="group-hover:animate-shake" />
          yokinzou@outlook.com
        </Link>
        <Link
          href="tel:+11234567890"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.PhoneCall size={12} className="group-hover:animate-shake" />
          (+86) 18820487196 (Whatsapp)
        </Link>
      </div>
    </section>
  );
}
