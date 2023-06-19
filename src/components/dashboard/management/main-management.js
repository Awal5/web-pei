import React from "react";
import { showFormattedDate } from "@/data";
import { Link } from "gatsby";
import { Image } from "react-bootstrap";

const MainManagement = props => {
  const { managements, errors } = props;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Managements</h1>
      </div>

      <div className="table-responsive">
        <Link
          className="btn btn-success mb-3"
          to="/dashboard/create-management"
        >
          Add Data +
        </Link>

        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Management Name</th>
              <th scope="col">Title Job</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Social Media</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {managements.length === 0 ? (
              <p className="position-absolute bottom-50 start-50">{errors}</p>
            ) : (
              managements.map((management, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <p className="text-break">{management.nama_direksi}</p>
                    </td>
                    <td>{management.jabatan}</td>
                    <td>{management.deskripsi}</td>
                    <td>
                      <Image
                        src={`http://localhost:4000/${management.image}`}
                        alt=""
                        className="img-thumbnail previewImg"
                      />
                    </td>
                    <td>
                      <Link to={management.facebook} target="_blank">
                        <i class="bi bi-facebook"></i>
                      </Link>
                      <Link
                        to={management.twitter}
                        className="mx-4"
                        target="_blank"
                      >
                        <i class="bi bi-twitter"></i>
                      </Link>

                      <Link to={management.linkedin} target="_blank">
                        <i class="bi bi-linkedin"></i>
                      </Link>
                    </td>
                    <td>{showFormattedDate(management.createdAt)}</td>
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

export default MainManagement;
