import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://media.licdn.com/dms/image/C4E03AQGE2lzlYdy4Xw/profile-displayphoto-shrink_800_800/0/1659843215944?e=1695859200&v=beta&t=D4djwUxbb0CIXApA86QVgzq75fZ3XwfnQxgdUvzlQxY"
                    alt=""
                />
                <p>
                    I am an awarded program and project management professional with extensive experience providing the leadership and support needed to drive the achievement of key organizational business-related goals.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">#diversity</li>
                    <li className="sidebarListItem">#leadership</li>
                    <li className="sidebarListItem">#findyourvoice</li>
                    <li className="sidebarListItem">#personaldevelopment</li>
                    <li className="sidebarListItem">#LifeLongLearners</li>
                    <li className="sidebarListItem">#personalHealth</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Social Media</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon" class="topIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon" class="topIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon" class="topIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon" class="topIcon fa-brands fa-square-instagram"></i>

                </div>

            </div>
        </div>
    );
}