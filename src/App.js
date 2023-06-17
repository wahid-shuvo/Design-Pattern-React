import {printProps} from "./components/higher-order-components/printProps"
import {UserInfo} from "./components/container-component/UserInfo";
import {withUser} from "./components/higher-order-components/withUser";
import {UserInfoForm} from "./components/higher-order-components/UserInfoForm";

const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {

    return (
        <UserInfoForm/>
    );
}

export default App;