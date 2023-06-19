import React from "react";
import { Link } from "gatsby";

import { showFormattedDate } from "@/data";

const MainArticle = props => {
  const { articles, errors } = props;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Article</h1>
      </div>
      <div className="table-responsive">
        <Link className="btn btn-success mb-3" to="/dashboard/articles/create">
          Add Data +
        </Link>
        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Article Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 ? (
              <p className="position-absolute bottom-50 start-50">{errors}</p>
            ) : (
              articles.map((article, index) => {
                return (
                  <tr key={article.id}>
                    <td>{index + 1}</td>
                    <td>
                      <p className="text-break">{article.title}</p>
                    </td>
                    <td>{article.description}</td>
                    {article.articleImages.map(image => {
                      return (
                        <td key={image.id}>
                          <img
                            src={`http://localhost:4000/images/${image.imagePath}`}
                            alt=""
                            className="img-thumbnail previewImg"
                          />
                        </td>
                      );
                    })}
                    <td>{showFormattedDate(article.createdAt)}</td>
                    <td>
                      <a className="btn btn-primary " href="" title="Detail">
                        <i className="bi bi-eye"></i>
                      </a>

                      <a className="btn btn-warning mx-3" href="" title="Edit">
                        <i className="bi bi-pencil-square"></i>
                      </a>

                      <a className="btn btn-danger" href="" title="Delete">
                        <i className="bi bi-trash"></i>
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainArticle;
