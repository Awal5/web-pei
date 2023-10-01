import React, { useState } from "react";
import { Link } from "gatsby";
import { showFormattedDate } from "@/data";
import { Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/EmptyState";
import Search from "../Search";
import Sorting from "../Sorting";
import CategoryFilter from "../CategoryFilter";

const MainArticle = props => {
  // Destructure the props object
  const { articles, errors, onDelete, loading } = props;

  // State variables
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  /**
   * Event handler for sorting articles
   * @param {string} sort - The sort option ("ASC", "DESC", "newest", "oldest")
   */
  const onSortHandler = sort => {
    setSort(sort);
  };

  /**
   * Event handler for filtering articles by category
   * @param {string} category - The category to filter by
   */
  const onCategoryHandler = category => {
    setCategory(category);
  };

  /**
   * Event handler for searching articles
   * @param {string} search - The search query
   */
  const onSearchHandler = search => {
    setSearch(search);
  };

  // Filter articles by category
  const filterArticleByCategory = articles.filter(article => {
    if (category) {
      return article.category === category;
    }
    return articles;
  });

  // Sort articles based on the selected sort option
  const sortedArticle = filterArticleByCategory.sort((a, b) => {
    if (sort === "ASC") {
      return a.title.localeCompare(b.title);
    } else if (sort === "DESC") {
      return b.title.localeCompare(a.title);
    } else if (sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    return filterArticleByCategory;
  });

  // Search articles based on the search query
  const searchArticle = sortedArticle.filter(article => {
    if (search) {
      return article.title.toLowerCase().includes(search.toLowerCase());
    }
    return sortedArticle;
  });

  // Return loading component if data is still loading
  if (loading) {
    return <Loading />;
  }
  // Return empty state component if there are no articles
  else if (articles.length === 0) {
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
        <h1 className="h2">Kelola Artikel</h1>
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
            <CategoryFilter
              filter={category}
              onFilterHandler={onCategoryHandler}
              datas={articles}
            />
            <Sorting sort={sort} onSortHandler={onSortHandler} />
            <Search search={search} onSearchHandler={onSearchHandler} />
          </div>
        </div>

        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Artikel</th>
              <th scope="col">Kategori</th>
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
                  <td>{article.category}</td>
                  <td>{showFormattedDate(article.createdAt)}</td>
                  <td>
                    <Link
                      className="btn btn-primary "
                      to={`/dashboard/articles/${article.slug}`}
                      title="Detail"
                    >
                      <i class="bi bi-info-circle"></i> Detail
                    </Link>

                    <Link
                      to={`/dashboard/articles/edit/${article.slug}`}
                      className="btn btn-warning mx-3"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </Link>

                    <Button
                      type="button"
                      className="btn btn-danger"
                      title="Delete"
                      onClick={() => onDelete(article.slug)}
                    >
                      <i className="bi bi-trash"></i> Hapus
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
