import { useDataLayerValue } from "../components/DataLayer";
import Home from "../pages/Home";
import OtherPage from "../pages/OtherPage";

function Router() {
    const [{ page }] = useDataLayerValue();
    switch (page) {
        case "other":
            return <OtherPage />
        case "home":
        default:
            return <Home />
    }
}

export default Router;
