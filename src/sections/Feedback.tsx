import Francois from "@/assets/Franco.webp";
import Sharanya from "@/assets/shar.webp";
import Karim from "@/assets/Karim.webp";

const feedbacks = [
  {
    title:
      "Levende quickly gained proficiency in our Frontend stack (VueJS + Typescript + ServiceWorker), even within the dynamic context of our startup environment.",
    id: "1",
    owner: "François Guérin",
    potision: "Backend Software Engineer",

    image: Francois,
  },
  {
    title:
      "Levende is an excellent team member who took a great interest in subjects that went far beyond his role and responsibilities.",
    id: "2",
    owner: "Sharanya Thakur",
    potision: "Identity Verification | Authentication | Digital identity",

    image: Sharanya,
  },
  {
    title:
      "Levende was a brillant student of mine: a very quick learner, autonomous and very friendly.",
    id: "3",
    owner: "Karim Makhloufi",
    potision: "Lead Instructor",

    image: Karim,
  },
];
type FeedbacksItemProps = {
  title: string;
  id: string;
  potision: string;

  owner: string;
  image: string;
};
function FeedbacksItem({ title, owner, potision, image }: FeedbacksItemProps) {
  // const isMobile = useIsMobile()

  return (
    <div className="md:grid md:grid-cols-6  flex flex-col items-center gap-8   md:p-24  p-8 justify-center">
      <div className="   col-span-5 ">
        <p className="text-foreground md:text-[2.5vw] text-[6vw] font-bold md:leading-[5rem] -tracking-wide  ">
          <b className="text-secondary-ts relative inline-block ">“</b>
          {title}
        </p>
      </div>
      <div className=" w-[80vw] flex  md:flex-col flex-row  md:gap-5 gap-5 ">
        <img
          src={image}
          alt="levende"
          className="rounded-full block md:w-[100px] w-16 "
        />
        <p className="md:text-xl w-1/2 font-bold   ">
          {owner}
          <p className="md:text-sm font-normal">{potision}</p>
        </p>
      </div>
    </div>
  );
}

export const Feedbacks = () => {
  return (
    <section className="mt-[800px] md:mt-[400px] max-w-[1700px] mx-auto  ">
      <div className="max-w-[1700px]">
        <h1 className="md:text-3xl text-2xl mb-24 font-thin uppercase">
          _003_Feedbacks___
        </h1>
        <div className="flex flex-col md:gap-1 gap-24">
          {feedbacks.map(({ title, owner, potision, id, image }) => (
            <FeedbacksItem
              image={image}
              key={id}
              title={title}
              id={id}
              potision={potision}
              owner={owner}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
