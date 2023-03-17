import cx from 'classnames';
import styles from '../styles/signin.module.css';


export default function Signin() {
   return (
         <>
         <main className={cx(styles["form-signin"],"text-center","mt-5")}>
<form>
      <h1 className="fw-normal h1 mb-5" >Login Loser</h1>
      <div className ='form-floating'>
            <input type='email' className='form-control' id='floatingInput' placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating" >
         <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> I won't have dementia
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in Loser</button>
<img src="starfetcherssketch.jpg" alt="cool sword"  width= "400"
    height= '350'/>
</form>
         </main>
        </>


)
}