import {CurrentUserLoader} from "./components/container-component/CurrentUserLoader";
import {UserLoader} from "./components/container-component/UserLoader";
import {UserInfo} from "./components/container-component/UserInfo";
import {ProductInfo} from "./components/container-component/ProductInfo";
import {ResourceLoader} from "./components/container-component/ResourceLoader";
import {DataSourceLoader} from "./components/container-component/DataSourceLoader";
import axios from 'axios';

const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;
}
const getLocalStorageData = key => () => {
    return localStorage.getItem(key)
}

const Text=({message})=> <h1>{message}</h1>

function App() {
    return (
        <>
            <DataSourceLoader getDataFunc={getServerData('users/123')} resourceName={"user"}>
                <UserInfo/>
            </DataSourceLoader>

            <DataSourceLoader getDataFunc={getLocalStorageData('message')} resourceName={"message"}>
                <Text/>
            </DataSourceLoader>

        </>
    );

}

export default App;
