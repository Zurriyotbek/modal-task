import Modal from "./components/Modal/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const list = {
    margin: "0 auto",
    marginTop: "50px",
    width: "400px",
    background: "dodgerblue",
  };

  const [modalState, setModalState] = useState(false);

  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      {modalState && (
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          setUsers={setUsers}
          users={users}
        />
      )}
      {!modalState && (
        <button
          onClick={(e) => setModalState((prev) => !prev)}
          className="modal__open"
        >
          Open Modal
        </button>
      )}

      {users && (
        <ul style={list}>
          {users?.map((user) => {
            return <li>{user.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
