import Card from "./Card";

type monthlyReportData = {
  timeframes: {
    monthly: {
      current: number;
      previous: number;
    };
  };
  title: string;
};
type monthlyReport = {
  monthlyReport: monthlyReportData[];
};
const Monthly = ({ monthlyReport }: monthlyReport) => {
  return (
    <>
      {monthlyReport.map((data) => (
        <Card
          previousText="Last Month"
          key={data.title}
          title={data.title}
          current={data.timeframes.monthly.current}
          previous={data.timeframes.monthly.previous}
        />
      ))}
    </>
  );
};

export default Monthly;
