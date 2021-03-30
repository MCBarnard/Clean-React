import {useDataLayerValue} from "./DataLayer";

const Route = ({ page, text }) => {
    const [{}, dispatch] = useDataLayerValue();
    const handleClick = () => {
        dispatch({
            type: "SET_PAGE",
            page: page
        });
    }

    return <button onClick={handleClick}>{text}</button>
}

export default Route;
