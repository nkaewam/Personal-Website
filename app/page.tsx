import AssociatedCompanies from "@/components/associated-companies";
import Description from "@/components/description";
import FeaturedItem from "@/components/featured-item";
import FeaturedItemSkeleton from "@/components/featured-item/skeleton";
import Links from "@/components/links";
import Name from "@/components/name";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col-reverse gap-12 h-full w-full p-6 md:p-12 md:flex-row">
      <section className="flex flex-col h-full w-full p-4 justify-between md:w-7/12">
        <div className="flex flex-col space-y-6 w-full md:space-y-12">
          <div className="space-y-2 overflow-x-hidden w-full">
            <Name />
            <Links />
          </div>
          <div className="space-y-6">
            <Description />
            <AssociatedCompanies />
          </div>
          <Suspense fallback={<FeaturedItemSkeleton />}>
            <FeaturedItem />
          </Suspense>
        </div>
        <Link href="mailto:work@nkaewam.dev">
          <Button className="mt-10 p-4 md:p-6 md:text-base md:mt-0">
            Contact Me
          </Button>
        </Link>
      </section>
      <section className="w-full h-[720px] bg-gray-400 md:flex-grow md:h-full md:w-auto">
        <div className="relative w-full h-full">
          <Image
            src="/img/tontan.JPEG"
            alt="tontan"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </section>
    </main>
  );
}
