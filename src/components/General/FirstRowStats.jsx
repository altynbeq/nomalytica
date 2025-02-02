import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';

import { Button } from '../../components';
import { earningData } from '../../data/ecomData';
import { useStateContext } from '../../contexts/ContextProvider';



const FirstRowStats = () => {
    const { currentColor, currentMode } = useStateContext();
    return (
        <div className="grid justify-center xl:w-full xl:mx-8 xl:pl-0  md:p-50 w-[90%]  ">
            <div className="grid grid-cols-2 gap-4  sm:grid-cols-2 p-8 md:p-5   md:grid-cols-2 lg:grid-cols-4 mr-5 md:mr-0">
                {earningData.map((item) => (
                    <div key={item.title} className="   bg-white  h-full md:w-[90%] lg:w-[90%]  dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 pt-9 rounded-2xl flex-shrink-0
                    xl:w-full xl:pt-6  xl:pb-7 xl:pr-20 xl:pl-20 2xl:mx-15  sm:w-[105%]  xs:p-7 subtle-border
                    ">
                        <button
                        type="button"
                        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                        className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                        >
                            {item.icon}
                        </button>
                        <p className="mt-3">
                        <span className="text-lg font-semibold">{item.amount}</span>
                        <span className={`text-sm text-${item.pcColor} ml-2 mr-5`}>
                            {item.percentage}
                        </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FirstRowStats