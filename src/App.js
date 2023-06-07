import {printProps} from "./components/higher-order-components/printProps"
import {UserInfo} from "./components/container-component/UserInfo"

const UserInfoWrapped = printProps(UserInfo)

function App() {

    return(
        <UserInfoWrapped a={1} b="Hello" c={{name:"Shaon"}}/>
    );
}

export default App;