import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked } from '../../components';
import { stackedCustomSeriesYearly, stackedPrimaryYAxisYearly, stackedPrimaryXAxisYearly } from '../../data/salesData';

const OverallRevenueChart = () => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6  w-[100%] md:w-[80%]  rounded-2xl mr-10">
        <div className="flex justify-between items-center gap-2 mb-10">
        <p className="md:text-xl font-semibold">Продажи за год</p>
        <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
            <span>
                <GoPrimitiveDot />
            </span>
            <span>2024</span>
            </p>
        </div>
        </div>
          <Stacked id="OverallRevenueChart" stackedCustomSeries={stackedCustomSeriesYearly} stackedPrimaryXAxis={stackedPrimaryYAxisYearly} stackedPrimaryYAxis={stackedPrimaryXAxisYearly}   />
    </div>
  );
}

export default OverallRevenueChart