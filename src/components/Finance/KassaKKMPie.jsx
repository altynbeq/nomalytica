import React, { useState, useEffect } from 'react'
import { Pie, Skeleton } from '../../components';


const KassaKKMPie = ({id, comb, title, sales1C}) => {
  const [ ready, setReady ] = useState(false);
  const [ pieSeries, setSeries ] = useState([]);
  const formattedTotalSum =  new Intl.NumberFormat().format(Math.round(sales1C.totalSum)) ;

  useEffect(()=>{
    if (!sales1C || !sales1C.paidTo) {
      return;
    }
    const kassaKKMData = sales1C.KassaKKMName;
    const total = Math.round(sales1C.totalSum) // Assuming total is directly available in sales1C

    function seriesCollector() {
      // Assuming sales1C has been defined and contains the necessary data
    
      const seriesData = Object.entries(kassaKKMData).map(([key, value]) => {
        const roundedValue = Math.round(value);
        const percentage = total > 0 ? ((value / total) * 100).toFixed(2) + '%' : '0%';
        return {
          x: key,
          y: roundedValue,
          text: percentage
        };
      });
    
      setSeries(seriesData);
    }

    seriesCollector();
    setReady(true);
  }, [])

  if(!ready){
    return(
      <Skeleton />
    )
  }
  return (
    <div className={`bg-white dark:text-gray-200 overflow-hidden dark:bg-secondary-dark-bg rounded-2xl w-[90%] md:w-[${comb ? '100%' : '43%'}]  p-4  flex flex-col justify-center items-center  subtle-border`}>
        <div className='text-center'>
            <p className="text-2xl font-semibold ">{title}</p>
            <p className="text-gray-400 text-2xl">{formattedTotalSum} тг</p>
        </div>

        <div className="w-[100%]">
          <Pie id={id} data={pieSeries} legendVisiblity={true} height="180px" />
        </div>
    </div>
  )
}

export default KassaKKMPie