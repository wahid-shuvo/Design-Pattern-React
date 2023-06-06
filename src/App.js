import {CurrentUserLoader} from "./components/container-component/CurrentUserLoader"
import {UserLoader} from "./components/container-component/UserLoader"
import {UserInfo} from "./components/container-component/UserInfo";
import {ProductInfo} from "./components/container-component/ProductInfo";
import {ResourceLoader} from "./components/container-component/ResourceLoader"



function App() {
    return (
        <>
            <ResourceLoader resourceUrl={"/users/123"} resourceName={"user"}>
            <UserInfo/>
            </ResourceLoader>

            <ResourceLoader resourceUrl={"/products/1234"} resourceName={"product"}>
                <ProductInfo/>
            </ResourceLoader>

        </>
    );

}

export default App;
