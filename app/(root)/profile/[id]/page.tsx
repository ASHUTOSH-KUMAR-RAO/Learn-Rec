import Header from "@/components/header";
import VideoCard from "@/components/video-card";
import { dummyCards } from "@/constants";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        title="Ashutosh Kumar Rao"
        subHeader="icoashutosh@gmail.com"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Page;
