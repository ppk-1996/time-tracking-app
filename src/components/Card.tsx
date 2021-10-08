import work from "../assets/icon-work.svg";
import play from "../assets/icon-play.svg";
import study from "../assets/icon-study.svg";
import exercise from "../assets/icon-exercise.svg";
import social from "../assets/icon-social.svg";
import selfcare from "../assets/icon-self-care.svg";
import ellipsis from "../assets/icon-ellipsis.svg";

type cardData = {
  previousText: string;
  title: string;
  current: number;
  previous: number;
};

const Card = ({ title, current, previous, previousText }: cardData) => {
  var color = getBgClass(title);

  return (
    <div className="md:col-span-1 pt-3 relative z-20 w-full">
      <section className={`${color} rounded-xl pt-10 relative z-10`}>
        <div className="absolute -top-2.5 right-7 z-20 bg-veryDarkBlue w-1/2 h-2.5"></div>
        <img src={getImage(title)} className="absolute -top-2 right-3 z-10" />

        <div className="p-6 rounded-lg bg-darkBlue relative z-10  hover:opacity-90">
          <div className="flex justify-between relative">
            <h2 className="text-lg font-medium">{title}</h2>
            <button className="w-4 hover:opacity-80" type="button">
              <img src={ellipsis} className="object-contain" />
            </button>
          </div>
          <div className="flex justify-between items-center md:block">
            <p className="text-3xl font-light">{current}hrs</p>

            <p className="text-sm text-desaturatedBlue">
              {previousText} - {previous}hrs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;

function getImage(str: String) {
  switch (str) {
    case "Work":
      return work;
    case "Play":
      return play;
    case "Study":
      return study;
    case "Exercise":
      return exercise;
    case "Social":
      return social;
    case "Self Care":
      return selfcare;
  }
  return work;
}
function getBgClass(str: String) {
  switch (str) {
    case "Work":
      return "bg-work";
    case "Play":
      return "bg-play";
    case "Study":
      return "bg-study";
    case "Exercise":
      return "bg-exercise";
    case "Social":
      return "bg-social";
    case "Self Care":
      return "bg-selfCare";
  }
  return "bg-blue";
}
