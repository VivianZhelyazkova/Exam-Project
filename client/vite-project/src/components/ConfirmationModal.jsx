export default function ConfirmationModal({
    onDelete,
    onCancel
}) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h3>Are you sure you want to delete this monster?</h3>
                <div className="modal-buttons-container">
                    <button className="modal-delete-button" onClick={onDelete}>Delete</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
