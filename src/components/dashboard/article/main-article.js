import React, { useState } from "react";
import { Link } from "gatsby";
import { showFormattedDate } from "@/data";
import { Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/EmptyState";
import Search from "../Search";
import Sorting from "../Sorting";
import Filter from "../Filter";

const MainArticle = props => {
  const { articles, errors, onDelete, loading } = props;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const onFilterHandler = filter => {
    setFilter(filter);
  };

  const onSortHandler = sort => {
    setSort(sort);
  };

  const onSearchHandler = search => {
    setSearch(search);
  };

  const sortedArticle = articles.sort((a, b) => {
    if (sort === "ASC" && filter === "date") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sort === "DESC" && filter === "date") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "ASC" && filter === "title") {
      return a.title.localeCompare(b.title);
    } else if (sort === "DESC" && filter === "title") {
      return b.title.localeCompare(a.title);
    } else {
      return articles;
    }
  });

  const searchArticle = sortedArticle.filter(article => {
    return article.title.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  } else if (articles.length === 0) {
    return (
      <EmptyState
        title="Artikel"
        errors={errors}
        addLink="/dashboard/articles/create"
      />
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Artikel</h1>
      </div>
      <div className="table-responsive">
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-success mb-3"
            to="/dashboard/articles/create"
          >
            Tambah Data +
          </Link>

          <div className="w-50 d-flex justify-content-end gap-2">
            <Filter filter={filter} onFilterHandler={onFilterHandler} />
            <Sorting sort={sort} onSortHandler={onSortHandler} />
            <Search search={search} onSearchHandler={onSearchHandler} />
          </div>
        </div>

        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Artikel</th>
              <th scope="col">Dibuat Pada</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {searchArticle.map((article, index) => {
              return (
                <tr key={article.id}>
                  <td>{index + 1}</td>
                  <td>
                    <p className="text-break">{article.title}</p>
                  </td>

                  <td>{showFormattedDate(article.createdAt)}</td>
                  <td>
                    <Link
                      className="btn btn-primary "
                      to={`/dashboard/articles/${article.slug}`}
                      title="Detail"
                    >
                      <i className="bi bi-eye"></i>
                    </Link>

                    <Link
                      to={`/dashboard/articles/edit/${article.slug}`}
                      className="btn btn-warning mx-3"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>

                    <Button
                      type="button"
                      className="btn btn-danger"
                      title="Delete"
                      onClick={() => onDelete(article.slug)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainArticle;
