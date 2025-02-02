import React, { useEffect, useState } from "react";
import { Stacked } from '..';
import { GoPrimitiveDot } from 'react-icons/go';
import { Skeleton } from "..";
import { useStateContext } from "../../contexts/ContextProvider";

const RevenueByWeekStacked = ({sales1C, width}) => {
  const { dateRanges } = useStateContext();
  const dateOne = dateRanges[1].startDate.split('%')[0].split('-')[2];
  const dateTwo = dateRanges[1].endDate.split('%')[0].split('-')[2];
  const finalDate = dateOne + '-' + dateTwo + ' ' + dateRanges[1].startDate.split('%')[0].split('-')[1] + '.' + dateRanges[1].startDate.split('%')[0].split('-')[0];
  const [ ready, setReady ] = useState(true);
  const list = sales1C.salesSumSeries;
  const maxSeriesVal = sales1C.salesSumSeries.reduce((acc, item) => {
    return Math.max(acc, item.y);
  }, 0);
  const minSeriesVal = sales1C.salesSumSeries.reduce((acc, item) => {
    if (item.y !== 0 || acc === Infinity) {
      return Math.min(acc, item.y);
    }
    return acc;
  }, Infinity);
  
  const finalMinSeriesVal = minSeriesVal === Infinity ? 0 : minSeriesVal / 2;

  const range = maxSeriesVal - finalMinSeriesVal;

  let interval;
  if (range <= 10) {
    interval = 1;
  } else if (range <= 100) {
    interval = 10;
  } else if (range <= 1000) {
    interval = 100;
  } else if (range <= 10000) {
    interval = 1000;
  } else if (range <= 100000) {
    interval = 10000;
  } else if (range <= 1000000) {
    interval = 100000;
  } else {
    interval = 1000000;
  }

  let stackedCustomSeries = [
    { 
      dataSource: list,
      xName: 'x',
      yName: 'y',
      name: 'Продажи',
      type: 'StackingColumn',
      background: 'blue',
    },
  ];
  
  let stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: finalMinSeriesVal,
    maximum: maxSeriesVal > 0 ? maxSeriesVal * 1.5 : 10,
    interval: interval,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };

  let stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
  };
  
  if(!ready) { return <Skeleton /> }

  return (
    <div className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-[90%] md:w-${width ? width : '[55%]'} subtle-border`}>
      <div className="flex justify-between items-center gap-2 mb-10">
          <p className="text-xl font-semibold">Доход за неделю</p>
          <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
              <span>
                  <GoPrimitiveDot />
              </span>
              <span>{finalDate}</span>
              </p>
          </div>
        </div>
        <div className="md:w-full overflow-auto">
            <Stacked id="stackedTotalRevenue" stackedCustomSeries={stackedCustomSeries} stackedPrimaryXAxis={stackedPrimaryXAxis} stackedPrimaryYAxis={stackedPrimaryYAxis}  />
        </div>
    </div>
  )
}

export default RevenueByWeekStacked