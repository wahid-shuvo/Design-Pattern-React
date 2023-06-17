
import {UserInfo} from "./components/custom-hooks-pattern/UserInfo";
import {withUser} from "./components/higher-order-components/withUser";

const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {

    return (
        <UserInfo/>
    );
}

export default App;