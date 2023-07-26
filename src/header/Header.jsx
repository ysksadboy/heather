import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Heather</span>
                <span className="headerTitleLg">Vaughn</span>

            </div>
            <img
                className="headerImg"
                src="https://cdn.wallpapersafari.com/6/83/LWOn0X.jpg"
                alt=""
            />
        </div>
    )
}
