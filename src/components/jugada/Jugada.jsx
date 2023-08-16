import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Jugada() {
    const [showAlert, setShowAlert] = useState(false);

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    const handleAlertShow = () => {
        setShowAlert(true);
    };

    return (
        <div>
            <Button onClick={handleAlertShow} variant="primary">
                Desafio
            </Button>

            {showAlert && (
                <Alert variant="danger" onClose={handleAlertClose} dismissible>
                    <Alert.Heading>Asegúrate de completar todos los espacios</Alert.Heading>
                    <p>
                        Cambia esto y aquello y vuelve a intentarlo. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                        elit. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>
            )}
        </div>
    );
}

export default Jugada;