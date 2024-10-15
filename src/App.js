import React from 'react';
import UserList from './components/UserList'; // Asegúrate de que la ruta sea correcta

function App() {
    return (
        <div className="App">
            <h1>Bienvenido a la Aplicación Labomac</h1>
            <UserList /> {/* Aquí se muestra la lista de usuarios */}
        </div>
    );
}

export default App;
