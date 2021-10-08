import Card from "./Card";

type dailyReportData = {
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
  };
  title: string;
};
type dailyReport = {
  dailyReport: dailyReportData[];
};
const Daily = ({ dailyReport }: dailyReport) => {
  return (
    <>
      {dailyReport.map((data) => (
        <Card
          previousText="Yesterday"
          key={data.title}
          title={data.title}
          current={data.timeframes.daily.current}
          previous={data.timeframes.daily.previous}
        />
      ))}
    </>
  );
};

export default Daily;
