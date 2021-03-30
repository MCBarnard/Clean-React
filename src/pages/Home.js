import { useEffect } from "react";
import "../css/Home.css";
import { useDataLayerValue } from "../components/DataLayer";
import Router from "../lib/Router";
import Route from "../components/Route";

const Home = () => {
    const [{ user }, dispatch] = useDataLayerValue();
    useEffect(() => {
        dispatch({
            type: "SET_USER",
            user: "Thinus"
        })
    }, [])
    return (
        <div className={"home"}>
            {user} <br/>
            Home Page<br/>
            <Route page={"other"} text={"Go to a different page"}/>
        </div>
    )
}
export default Home;
