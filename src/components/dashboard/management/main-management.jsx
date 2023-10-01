import React, { useState } from "react";
import { showFormattedDate } from "@/data";
import { Link } from "gatsby";
import { Image, Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/EmptyState";
import Search from "../Search";
import Sorting from "../Sorting";

const MainManagement = props => {
  // Destructure props
  const { managements, errors, onDelete, loading } = props;

  // State for search and sort
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  /**
   * Event handler for sorting
   * @param {string} sort - The sort type
   */
  const onSortHandler = sort => {
    setSort(sort);
  };

  /**
   * Event handler for searching
   * @param {string} search - The search query
   */
  const onSearchHandler = search => {
    setSearch(search);
  };

  // Sort the managements based on the selected sort option
  const sortedManagement = managements.sort((a, b) => {
    if (sort === "ASC") {
      return a.name.localeCompare(b.name);
    } else if (sort === "DESC") {
      return b.name.localeCompare(a.name);
    } else if (sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return managements; // Return unsorted managements if no sort option is selected
    }
  });

  // Filter the sorted managements based on the search query
  const searchManagement = sortedManagement.filter(management => {
    if (!search) {
      return managements; // Return all managements if no search query is entered
    }
    return management.name.toLowerCase().includes(search.toLowerCase());
  });

  // Render loading state if loading is true
  if (loading) {
    return <Loading />;
  }
  // Render empty state if no managements are available
  else if (managements.length === 0) {
    return (
      <EmptyState
        title="Direksi"
        errors={errors}
        addLink="/dashboard/managements/create"
      />
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Kelola Manajemen</h1>
      </div>

      <div className="table-responsive">
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-success mb-3"
            to="/dashboard/managements/create"
          >
            Tambah Manajemen
          </Link>

          <div className="w-50 d-flex justify-content-end gap-2">
            <Sorting sort={sort} onSortHandler={onSortHandler} />
            <Search search={search} onSearchHandler={onSearchHandler} />
          </div>
        </div>

        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Direksi</th>
              <th scope="col">Posisi</th>
              <th scope="col">Gambar</th>
              <th scope="col">Dibuat Pada</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {searchManagement.map((management, index) => {
              return (
                <tr key={management.id}>
                  <td>{index + 1}</td>
                  <td>
                    <p className="text-break">{management.name}</p>
                  </td>
                  <td>{management.position}</td>

                  <td>
                    <Image
                      src={`http://localhost:4000/images/${management.image}`}
                      alt=""
                      className="img-thumbnail previewImg"
                    />
                  </td>

                  <td>{showFormattedDate(management.createdAt)}</td>
                  <td>
                    <Link
                      to={`/dashboard/managements/${management.slug}`}
                      className="btn btn-primary "
                      title="Detail"
                    >
                      <i class="bi bi-info-circle"></i> Detail
                    </Link>

                    <Link
                      to={`/dashboard/managements/edit/${management.slug}`}
                      className="btn btn-warning mx-3"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </Link>

                    <Button
                      className="btn btn-danger"
                      title="Hapus"
                      onClick={() => onDelete(management.slug)}
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

export default MainManagement;
