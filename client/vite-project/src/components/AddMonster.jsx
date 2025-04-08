export default function AddMonster() {
    return (
        <>
            <h1>Add Monster</h1>
            <form className={"column form-card"} action="">
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="image">Photo</label>
                    </div>
                    <input className="form-input" type="text" name="image" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <input className="form-input" type="text" name="name" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="powers">Powers</label>
                    </div>
                    <textarea className="form-input" name="powers" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="weaknesses">Weaknesses</label>
                    </div>
                    <textarea className="form-input" name="weaknesses" />
                </div>
                <button  className="form-button" type="submit">CREATE</button>
            </form>
        </>
    );
}
