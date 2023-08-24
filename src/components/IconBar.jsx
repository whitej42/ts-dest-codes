import { FaInstagram, FaEnvelope } from "react-icons/fa";

function IconBar() {
    return (
        <div className="icon-bar">
            <h2 className="contact-title">Contact</h2>
            <ul className="icon-list">
                <li className="hover"><a className="btn hover" href="https://www.instagram.com/smej_trains/?utm_source=ig_embed&ig_rid=475e99c4-cbbd-45b4-b7b2-616a9cbac587" target="_blank"><FaInstagram /></a></li>
                <li className="hover"><a className="btn "><FaEnvelope /></a></li>
            </ul>
        </div>
    )
}

export default IconBar
