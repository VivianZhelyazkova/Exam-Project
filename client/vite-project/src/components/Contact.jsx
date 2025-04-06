export default function Contact() {
    function onSumbit() {}
    return (
        <>
            <h1>Contact us</h1>
            <form action={onSumbit}  className="column">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="message">Message</label> 
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
}
