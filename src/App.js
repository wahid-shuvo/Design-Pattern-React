import {UserInfo} from "./components/custom-hooks-pattern/UserInfo";

function App() {

    return (
        <>
            <UserInfo userId="123"/>
            <UserInfo userId="234"/>
            <UserInfo userId="345"/>
        </>
    );
}

export default App;