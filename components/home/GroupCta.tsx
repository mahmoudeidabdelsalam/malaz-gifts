import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function GroupCta() {
  return (
    <section className="page-shell pb-16 md:pb-20">
      <div className="gradient-card flex flex-col items-center justify-between gap-6 rounded-[32px] px-7 py-9 text-center text-white md:flex-row md:px-12 md:py-12 md:text-start">
        <div>
          <h2 className="font-cairo text-2xl font-extrabold md:text-3xl">
            {site.groupHeading}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#FFEDE8] md:text-base">
            {site.groupDescription}
          </p>
        </div>
        <Button
          className="shrink-0"
          href={site.facebookGroup}
          rel="noopener noreferrer"
          target="_blank"
          variant="light"
        >
          {site.joinGroupAction}
        </Button>
      </div>
    </section>
  );
}
