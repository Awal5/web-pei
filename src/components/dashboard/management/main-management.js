import React, { useState } from "react";
import { showFormattedDate } from "@/data";
import { Link } from "gatsby";
import { Image, Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/EmptyState";
import Search from "../Search";
import Sorting from "../Sorting";
import Filter from "../Filter";
import { Form } from "react-bootstrap";

const MainManagement = props => {
  const { managements, errors, onDelete, loading } = props;
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

  const sortedManagement = managements.sort((a, b) => {
    if (sort === "ASC" && filter === "date") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sort === "DESC" && filter === "date") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "ASC" && filter === "title") {
      return a.name.localeCompare(b.name);
    } else if (sort === "DESC" && filter === "title") {
      return b.name.localeCompare(a.name);
    } else {
      return managements;
    }
  });

  const searchManagement = sortedManagement.filter(management => {
    if (!search) {
      return managements;
    }
    return management.name.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  } else if (managements.length === 0) {
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
        <h1 className="h2">Direksi</h1>
      </div>

      <div className="table-responsive">
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-success mb-3"
            to="/dashboard/managements/create"
          >
            Tambah Direksi
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
                      <i className="bi bi-eye"></i>
                    </Link>

                    <Link
                      to={`/dashboard/managements/edit/${management.slug}`}
                      className="btn btn-warning mx-3"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>

                    <Button
                      className="btn btn-danger"
                      title="Hapus"
                      onClick={() => onDelete(management.slug)}
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

export default MainManagement;
