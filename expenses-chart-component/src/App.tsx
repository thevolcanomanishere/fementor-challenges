const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
function App() {
  const renderChart = (chartData: typeof data) => {
    const maxAmount = Math.max(...chartData.map((item) => item.amount));

    const renderBar = (day: { day: string; amount: number }, index: number) => {
      const barPercentage = (day.amount / maxAmount) * 100;
      const barHeight = Math.round((barPercentage / 100) * 144);
      const baseStyle = `rounded`;
      const bgColor = day.amount === maxAmount ? "bg-cyan" : "bg-softRed";
      const style = `${bgColor} ${baseStyle} hover:opacity-50`;
      return (
        <div className="flex flex-col justify-end group" key={index}>
          <div className="bg-black opacity-75 py-1 text-center text-white mb-1 md:mb-2 rounded invisible group-hover:visible">
            ${day.amount}
          </div>
          <div className="flex flex-col mx-2">
            <div style={{ height: barHeight }} className={style}></div>
            <span className="self-center text-gray-400">{day.day}</span>
          </div>
        </div>
      );
    };
    return chartData.map(renderBar);
  };
  return (
    <main className="flex flex-col justify-center align-middle items-center">
      <div className="flex flex-col h-screen justify-center">
        <div className="flex bg-softRed text-white justify-between p-5 rounded-3xl shadow-md">
          <div className="flex flex-col">
            <span className="text-lg">My balance</span>
            <span className="text-3xl pt-2">$921.48</span>
          </div>
          <div className="flex z-10 -space-x-5">
            <div className="self-center h-12 w-12 border-2 rounded-full z-10 border-white"></div>
            <div className="self-center h-12 w-12 border ml-10 -z-1 rounded-full border-black bg-black inline-block"></div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-3xl mt-5 shadow-md">
          <span className="text-3xl font-semibold p-5">
            Spending - Last 7 Days
          </span>
          <div className="flex flex-row justify-center pb-5">
            {renderChart(data)}
          </div>
          <div className="border max-w-[90%] ml-6"></div>
          <div className="flex justify-between flex-row px-8 py-10">
            <div className="flex flex-col">
              <span className="text-gray-400">Total this month</span>
              <span className="text-5xl font-bold">$478.33</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="self-end font-bold">+2.4%</span>
              <span className="text-gray-400">from last month</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
