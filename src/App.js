import {UserInfo} from "./components/custom-hooks-pattern/UserInfo";
import {withUser} from "./components/higher-order-components/withUser";
import {ProductInfo, productInfo} from "./components/container-component/ProductInfo"

const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {

    return (
        <>
            <UserInfo userId={"123"}/>
            <ProductInfo productId={"1234"}/>
        </>
    );
}

export default App;