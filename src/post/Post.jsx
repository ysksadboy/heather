
import "./post.css";

export default function Post({ img }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://i.ibb.co/zhpLhCd/1659843215944.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>

            </div>
        </div>
    );
}