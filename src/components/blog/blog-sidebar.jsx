import React, { Fragment } from "react";
import { showFormattedDate } from "@/data";

// component yang berfungsi menampilkan berita terbaru di sidebar
const BlogSidebar = ({ articles }) => {
  return (
    <Fragment>
      <aside className="widget recent_posts ">
        <h3 className="widget_title">Berita Terbaru</h3>
        <div className="meipaly_post_widget">
          {articles.map(article => (
            <div className="mpw_item">
              <a key={article.id} href={`/news/${article.slug}`}>
                {article.articleImages.map(image => (
                  <img
                    src={`http://localhost:4000/images/${image.imagePath}`}
                    alt=""
                  />
                ))}
                <h4 className="text-orange">{article.title}</h4>

                <small className="text-black">
                  {showFormattedDate(article.createdAt)}
                </small>
              </a>
            </div>
          ))}
        </div>
      </aside>
    </Fragment>
  );
};

export default BlogSidebar;
