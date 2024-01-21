import { MarqueeData } from "@/app/types/marquee-data";
import { mediumData, awsData } from "@/constants/marquee-data";
import Marquee from "react-fast-marquee";
import Item from "./item";
import { getGithubFeaturedItems } from "@/lib/github";
import { Skeleton } from "../ui/skeleton";

const FeaturedItem = async () => {
  const data = await getGithubFeaturedItems();

  const githubData: MarqueeData[] = data.map((item) => ({
    name: item.nameWithOwner,
    description: item.description ?? "",
    url: item.url,
    source: "GITHUB",
  }));

  const allData = [...githubData, ...mediumData, ...awsData];

  const half = Math.ceil(allData.length / 2);

  const upperMarqueeData = allData.slice(0, half);
  const lowerMarqueeData = allData.slice(-half);

  return (
    <div className="space-y-4 md:space-y-8">
      <Marquee
        autoFill={true}
        gradient
        gradientColor="#10100E"
        gradientWidth={75}
        speed={25}
        pauseOnHover
      >
        {upperMarqueeData.map((item, idx) => (
          <Item key={`marquee-upper-${idx}`} {...item} />
        ))}
      </Marquee>
      <Marquee
        autoFill={true}
        gradient
        gradientColor="#10100E"
        gradientWidth={75}
        direction="right"
        speed={25}
        pauseOnHover
      >
        {lowerMarqueeData.map((item, idx) => (
          <Item key={`marquee-upper-${idx}`} {...item} />
        ))}
      </Marquee>
    </div>
  );
};

FeaturedItem.Skeleton = (() => {
  return (
    <div className="space-y-8">
      {Array.from({ length: 2 }).map((_, ix) => (
        <div key={`skeleton-${ix}`} className="flex space-x-4 md:space-x-8">
          {Array.from({ length: 3 }).map((_, iy) => (
            <Skeleton
              key={`skeleton-${ix}-item-${iy}`}
              className="w-full h-20 md:h-24"
            />
          ))}
        </div>
      ))}
    </div>
  );
}) as React.FC;

FeaturedItem.Skeleton.displayName = "FeaturedItem.Skeleton";

export default FeaturedItem;
