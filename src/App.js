import {SplitScreen} from "./design-pattern/SplitScreen";

const LeftHandComponent = ({name}) => (
    <h1 style={{backgroundColor: "green"}}>{name}!</h1>
)

const RightHandComponent = ({msg}) => (
    <p style={{backgroundColor: "red"}}>{msg}!</p>
)

function App() {
    return (
        <SplitScreen
            leftWeight={1}
            rightWeight={3}
        >
            <LeftHandComponent name={"Shuvo"}/>
            <RightHandComponent msg={"Hello"}/>
        </SplitScreen>
    );
}

export default App;
