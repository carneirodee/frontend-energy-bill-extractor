import { AreaCards, AreaCharts, AreaTable } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDashboard } from '../actions/dashboard.action'

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(state => state.dashboardReducer.dashboard)
  const isLoadingDashboard = useSelector(state => state.dashboardReducer.isLoadingDashboard)

  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch])


  useEffect(()=> {
    console.log(dashboard)
  }, [isLoadingDashboard])

  return (
    <div className="content-area">
      <header className="">
        <h1 className="text-green-900 text-3xl text-gray-900 mb-3">Dashboard</h1>
        <h5 className="text-gray-400 text-base text-gray-900 ">Dashboard &gt;</h5>
      </header>
      {
        isLoadingDashboard ? 'Carregando...' :
          <>
            <AreaCards cardValues={dashboard}/>
            <AreaCharts statValues={dashboard}/>
          </>
      }

    </div>
  );
};

export default Dashboard;
