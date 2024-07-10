import Profile from "../images/people1.jpg"
import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import GithubIcon from "../images/github-icon.png"
// import LinkedinIcon from "../images/linkedin-icon.png"

export default function Card() {
    return (
        <div className="container">
            <div className="profile-info">

                <img src={Profile} alt="Profile" className="profileImg" />
                <h1 className="name">Eklavya</h1>
                <h4 className="work">Frontend Developer</h4>
                <h5 className="site">eklavya.website</h5>

                <button className="emailBtn"><i class="fa fa-envelope"></i>Email</button>
                <button className="linkedinBtn"><i class="fa fa-linkedin"></i>LinkedIn</button>

                <h3 className="title" >About</h3>
                <p className="about--p">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="title" >Interests</h3>
                <p className="title--p">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className="footer">
                <img src={TwitterIcon} alt="icon" className="icon"/>
                <img src={FacebookIcon} alt="icon" className="icon"/>
                <img src={InstagramIcon} alt="icon" className="icon"/>
                <img src={GithubIcon} alt="icon" className="icon"/>
                {/* <img src={LinkedinIcon} alt="icon" className="icon"/> */}
            </div>

        </div>
    )
}