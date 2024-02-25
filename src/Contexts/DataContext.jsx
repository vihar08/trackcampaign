
import { createContext , useContext} from "react";

const data=[
    {
        "city":"Amaravathi",
        "date":"09-02-2024",
        "position":{
            "lat":16.513494544336695, 
            "lng":80.51625036169007
        },
        "id": 12
    },
    {
        "city":"Didugu",
        "date":"08-02-2024",
        "position":{
            "lat":16.576946249011947,
            "lng": 80.29677148024308
        },
        "id": 13
    },
    {
        "city":"Mangalgiri",
        "date":"09-01-2024",
        "position":{
            "lat":16.436437543912856,
            "lng": 80.56308741031685
        },
        "id": 14
    },
    {
        "city":"Vykuntapuram",
        "date":"13-02-2024",
        "position":{
            "lat":16.56885980832691, 
            "lng":80.4211966621779
        },
        "id": 15
    },

]

const DataContext= createContext();

function DataProvider({children}){
    return(
        <DataContext.Provider value={{
            data:data
        }}>
            {children}
        </DataContext.Provider>
    )
}

function useData(){
    const context= useContext(DataContext);
    if(context===undefined){
        throw new Error("Error in useData hook");
    }
    return context;
}
export {DataProvider,useData};