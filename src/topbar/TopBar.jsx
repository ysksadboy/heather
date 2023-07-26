import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i class="topIcon fa-brands fa-square-facebook"></i>
                <i class="topIcon fa-brands fa-linkedin"></i>
                <i class="topIcon fa-brands fa-twitter"></i>
                <i class="topIcon fa-brands fa-square-instagram"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">LogOut</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://media.licdn.com/dms/image/C4E03AQGE2lzlYdy4Xw/profile-displayphoto-shrink_800_800/0/1659843215944?e=1695859200&v=beta&t=D4djwUxbb0CIXApA86QVgzq75fZ3XwfnQxgdUvzlQxY"
                    alt=""
                />
                <i className="topSearchIcon fa-brands fa-searchengin"></i>
            </div>
        </div>
    )
}
