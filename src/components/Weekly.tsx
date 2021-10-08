import Card from "./Card";

type weeklyReportData = {
  timeframes: {
    weekly: {
      current: number;
      previous: number;
    };
  };
  title: string;
};
type weeklyReport = {
  weeklyReport: weeklyReportData[];
};
const Weekly = ({ weeklyReport }: weeklyReport) => {
  return (
    <>
      {weeklyReport.map((data) => (
        <Card
          previousText="Last Week"
          key={data.title}
          title={data.title}
          current={data.timeframes.weekly.current}
          previous={data.timeframes.weekly.previous}
        />
      ))}
    </>
  );
};

export default Weekly;
