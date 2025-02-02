import React, { useEffect } from 'react'
import { floristList, cusSupportList, tasksList } from '../data/workersData';
import { floristsStats, callCenterStats } from '../data/workersData';

import { FloristList, SupportList, Tasks, WorkerStats } from '../components/Workers';
import { useStateContext } from '../contexts/ContextProvider';

const Workers = () => {
  const { setActiveMenu } = useStateContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mt-12 flex flex-col justify-center align-center '>
        <div className="flex w-[100%] mt-8 md:mt-0 flex-wrap lg:flex-nowrap gap-5 justify-center  ">
          <FloristList data={floristList} title="Список флористов" />
          <SupportList data={cusSupportList} title="Рейтинг сотрудников" />
          <Tasks data={tasksList} title="Список задач" />
        </div>
        <div className="flex w-[100%] flex-wrap  gap-5 justify-center   ">
          <WorkerStats workersList={floristsStats} mainTitle="Показатели флористов" />
          <WorkerStats workersList={callCenterStats} mainTitle="Показатели call center" />
        </div>
    </div>
  )
}

export default Workers