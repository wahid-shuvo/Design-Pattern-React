import {CurrentUserLoader} from "./components/container-component/CurrentUserLoader"
import {UserLoader} from "./components/container-component/UserLoader"
import {UserInfo} from "./components/container-component/UserInfo";
import {ResourceLoader} from "./components/container-component/ResourceLoader"

const userIds = ['123', '234', '345']

function App() {
    return (
        <>
            {userIds.map((id) =>
                <UserLoader userId={id}>
                    <UserInfo/>
                </UserLoader>
            )}

        </>
    );

}

export default App;
