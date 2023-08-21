import lo from "../assets/logos.svg"
import linkedin from "../assets/linkedin-icon.svg"
import snapchat from "../assets/snapchat-icon.svg"
import youtube from "../assets/youtube-icon.svg"
import twitter from "../assets/twitter-icon.svg"
import discord from "../assets/discord-icon.svg"
import Logo from '../assets/logo.svg'



function Footer() {
  return (
    <>
        <footer className="footer py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 d-flex flex-row-reverse align-items-center" >
            <li className="nav-item"><a href="#" className="nav-link px-2 me-5">
                <img src={Logo} alt="" width={176.83} height={134.82} /></a></li>
            <li className="nav-item me-5">
            <div>
                <a href="#" className="nav-link px-2">شارك كمدرب</a>
                </div>
                <div>
                <a href="#" className="nav-link px-2">حول الأكاديمية</a>
                </div>
            </li>
            <li className="nav-item me-5">
                <div>
                <a href="#" className="nav-link px-2">الشروط والأحكام</a>
                </div>
                <div>
                <a href="#" className="nav-link px-2">سياسة الخصوصية</a>
                </div>
                </li>
            <li className="nav-item"><a href="#" className="nav-link px-2 me-5">
                <div>
                    <img src={discord} alt="" width={25.6} height={26.82} className="me-2"/>
                    <img src={twitter} alt="" width={25.6} height={26.82} className="me-2"/>
                    <img src={youtube} alt="" width={25.6} height={26.82} className="me-2"/>
                    <img src={snapchat} alt="" width={25.6} height={26.82} className="me-2"/>
                    <img src={linkedin} alt="" width={25.6} height={26.82} className="me-2"/>
                </div>
                <div>
                    <h6>@TuwaiqAcademy</h6>
                </div>
                </a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 me-5"><img src={lo} alt="" /></a></li>
        </ul>
        <p className="text-center">© جميع الحقوق محفوظة لأكاديمية طويق 2023</p>
    </footer>
    </>
  )
}

export default Footer