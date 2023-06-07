import {printProps} from "./components/higher-order-components/printProps"
import {UserInfo} from "./components/container-component/UserInfo";
import {withUser} from "./components/higher-order-components/withUser";

const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {

    return (
        <UserInfoWithLoader/>
    );
}

export default App;