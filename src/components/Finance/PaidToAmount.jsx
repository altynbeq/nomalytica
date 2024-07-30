import React from 'react'
import { ecomPieChartData } from '../../data/ecomData';
import { Pie } from '../../components';

const PaidToAmount = ({id, title, amount}) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl w-[90%] md:w-[28%]  p-4  flex flex-col justify-center items-center  subtle-border">
        <div>
            <p className="text-2xl font-semibold ">За день</p>
            <p className="text-gray-400">оплачено в</p>
        </div>

        <div className="w-60">
        <Pie id={id} data={ecomPieChartData} legendVisiblity={true} height="180px" />
        </div>
    </div>
  )
}

export default PaidToAmount