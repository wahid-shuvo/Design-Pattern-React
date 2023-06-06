import {ControlledModal} from "./components/controlled-uncontrolled/ControlledModal";
import {useState} from 'react';

function App() {
    const [shouldShowModal, setshouldShowModal] = useState(false);
    return (
        <>
            <ControlledModal
                shouldShow={shouldShowModal}
                onRequestClose={() => setshouldShowModal(false)}

            >
                <h1>Hello</h1>
            </ControlledModal>

            <button onClick={() =>
                setshouldShowModal(!shouldShowModal)}
            >
                {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
            </button>
        </>

    )
}

export default App;
