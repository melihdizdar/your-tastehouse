import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerLeft"></div>
            <div className="footerCenter">
                <ul className="footerSocialList">
                    <li><a href="https://www.instagram.com/lezzeteviniz/"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/lezzetevin"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UC8Q4r1zS4Dcck6tM1ImeGXw"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://twitter.com/lezzeteviniz"><i class="fab fa-twitter"></i></a></li>
                </ul>
                <h4>Copyright 2021 © Bütün hakları saklıdır.</h4>
            </div>
            <div className="footerRight"></div>
        </div>
    )
}
