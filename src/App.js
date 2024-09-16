import "./App.css";
import { useState,useEffect } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
 
const App = () => {
     
     const [courses, setCourses] = useState(null);
     const [loading, setLoading] = useState(true);
     const [category, setCategory] = useState(filterData[0].title);
  
         async function fetchData() {
            setLoading(true);
            try{
                let response = await fetch(apiUrl);
                let output = await response.json();
    //             // output
                setCourses(output.data);
            }
            catch(error) {
                toast.error("Network me koi dikkat hai");
            }
            setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
    <div className="min-h-screen flex flex-col bg-slate-600">
      <div>
        <Navbar/>
      </div>
      <div className="bg-slate-600">
       <div>
       <Filter
       filterData = {filterData}
        category = {category}
        setCategory = {setCategory}
       />
      </div>
     <div className="w-11/12 max-w-[1200px] 
     mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
        loading ? (<Spinner/>) : (<Cards courses ={courses} category={category}/>)  
        }
      </div>  
    </div>

    
    </div> 
    );
};

export default App;
