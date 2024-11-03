import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './Components';
import { AnimatePresence } from 'framer-motion';
import { StateProvider, useStateValue } from './Context/StateProvider'; 
import { actionType, reducer } from './Context/Reducer'; 
import { initialState } from './Context/initialState'; 
import { getAllFoodItems } from './utils/firebaseFunctions';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Showusers from './Components/Showusers';
import ShowOrders from './Components/Showorders';
import Showreservation from './Components/Showreservation';

// Main App component
function App() {
  const [{ foodItems }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true); // State for loading

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const data = await getAllFoodItems();
      console.log("Fetched data from Firestore in APP JS:", data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    } catch (error) {
      console.error("Error fetching food items: ", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence>
        {loading ? ( // Show spinner while loading
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            <main className='mt-14 md:mt-20 md:px-16 px-4 py-4 w-full'>
              <Routes>
                <Route path='/*' element={<MainContainer />} />
                <Route path='/createItem' element={<CreateContainer />} />
                <Route path='/dashboard/showusers' element={<Showusers />} />
                <Route path='/dashboard/showorders' element={<ShowOrders />} />
                <Route path='/dashboard/showreservation' element={<Showreservation />} />
                <Route path='/dashboard/*' element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        )}
      </AnimatePresence>
    </StateProvider>
  );
}

export default App;
