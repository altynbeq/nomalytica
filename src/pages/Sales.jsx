import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';

import { DailySalesStats, BestSalesStats, BoxTotalStats, WeaklyTotalSalesChart, MonthlyTotalSalesChart, OverallRevenueChart } from '../components/Sales';
import { FirstRowStats } from '../components/General';
import { WeaklyStatistics } from '../components/Finance';

const Sales = ({dayFinanceData, dayLeadsData, monthFinanceData, weekFinanceData, weekLeadsData}) => {
    const { currentColor, currentMode,setActiveMenu } = useStateContext(); 
    return (
        <div className='mt-12 flex flex-col  justify-center '>
             <div className="flex  w-[100%] flex-wrap  justify-center align-top xs:flex-col  md:mx-3  gap-[0.5rem] items-center">
                <DailySalesStats dayFinanceData={dayFinanceData} dayLeadsData={dayLeadsData} />
                <WeaklyStatistics weekFinanceData={weekFinanceData} title="Дневная статистика" width="30%" />
            </div>
            <div className='flex md:mx-3 flex-wrap align-center justify-center gap-[1.5rem] items-center'> 
                <FirstRowStats />
            </div>
            <div className="flex w-[100%] align-center  flex-wrap justify-center gap-[0.5rem] mb-5  items-center">
                <WeaklyStatistics weekFinanceData={weekFinanceData} title="Недельная статистика" width="28%" />
                <WeaklyStatistics weekFinanceData={weekFinanceData} title="Месячная статистика"  width="28%" />
                <WeaklyStatistics weekFinanceData={weekFinanceData} title="Товарная статистика"  width="28%" />
            </div> 
            <div className="flex w-[100%] align-center  flex-wrap justify-center gap-[1.5rem]  items-center">
                <WeaklyTotalSalesChart weekFinanceData={weekFinanceData} weekLeadsData={weekLeadsData} />
                <MonthlyTotalSalesChart monthFinanceData={monthFinanceData} />
            </div>
            <div className="flex m-3 mt-5 align-center justify-center gap-[1.5rem] w-[100%] items-center">
                <OverallRevenueChart />
            </div>
        </div>
    )
}

export default Sales

{/* <div className="flex m-3 mt-5 flex-row md:flex-row sm:flex-col xs:flex-col justify-center gap-[1.5rem] w-[100%] items-center">
                <MonthlyTotalSalesChart />
            </div> */}