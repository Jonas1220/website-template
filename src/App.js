// import logo from './logo.svg';
import './App.css';
import Project from './Project';
import Social from './Social';
import user from './user.json';

console.log(user.text);

function App() {
    return (
        <div className="cards">
            <div className="hero-section">
                {/* <img src="img/jk.jpg" alt=""> */}
                <h1 id="name">{user.name}</h1>
            </div>
            <div className="section">
                <div className="inner">
                    <div className="inner-head">
                        <h2>About</h2>
                    </div>
                    <div className="inner-content">
                        <p>{user.description}</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="inner">
                    <div className="inner-head">
                        <h2>Projects</h2>
                    </div>
                    <div className="inner-content">
                        <ul>
                            {user.projects.map((project)=>{
                                return <Project description={user.projectIcon+' '+project.name} link={project.link} btnText={user.projectBtn}/>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="inner">
                    <div className="inner-head">
                        <h2>Contact</h2>
                    </div>
                    <div className="inner-content contact-content">
                        {user.contact.socials.map((social)=>{
                            return <Social description={social.name} link={social.link}/>
                        })}
                        {(user.contact.email)&&
                            <Social description="Email" link={'mailto:'+user.contact.email}/>
                        }
                        <Social description="Phone" link={'tel:'+user.contact.phone}/>
                        {/* <a href="tel:+4915221994132" className="btn-contact">Phone</a> */}
                        {/* <a href="mailto:jonas@jonaskaatz.com" className="btn-contact">E-Mail</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
