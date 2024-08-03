import React, { useEffect } from 'react'
import { Header } from '../components';
import { SkladStatistivs, SkladStats } from '../components/Sklad';
import { Orders } from '../pages';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import LoadingSkeleton from '../components/LoadingSkeleton'

const Sklad = () => {
  const { skeletonUp } = useStateContext();
  if(skeletonUp){
    return(
      <div className='flex mx-10 flex-col gap-6 justify-evenly align-center text-center w-[100%]'>
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    )
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col w-[100%] md:flex-row gap-10 justify-center align-top md:m-5 lg:flex-row 2xl:flex-row items-center">
        <SkladStatistivs />
        <SkladStats />
      </div>
      <div className="w-[100%] flex justify-center align-center mr-5">
        <div className="w-[90%] lg:w-[80%] mt-10 bg-white rounded-3xl">
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default Sklad;
