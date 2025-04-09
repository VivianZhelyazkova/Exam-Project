export default function ErrorModal({ onClose ,message}) {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal">
                <h3>{message}</h3>
                <div className="modal-buttons-container">
                    <button className="modal-delete-button" onClick={onClose}>
                        OK
                    </button>
                   
                </div>
            </div>
        </div>
    );
}
