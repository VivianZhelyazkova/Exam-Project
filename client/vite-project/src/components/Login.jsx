export default function Login() {
   return (
     <>
     <h1>Login</h1>
     <form style={{display:"flex", flexDirection:"column"}}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>

        <input type="submit" name="login" value="Login" />

     </form>
     </>
   );
}