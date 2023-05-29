import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./Newstable.css";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { db } from "../../Server/firebase";

const columns = [
  { id: "id", label: "ID", minWidth: 60, align: "center" },
  { id: "title", label: "Title", minWidth: 80, align: "center" },
  {
    id: "content",
    label: "Content",
    minWidth: 200,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Datetime",
    label: "Date & Time",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "Action",
    label: "Action",
    minwidth: 170,
    renderCell: (params) => {
      const handleDelete = async (rows, setRows) => {
        try {
          await deleteDoc(doc(db, "users", params.id));
          const updatedRows = rows.filter((row) => row.id !== params.id);
          setRows(updatedRows);
          alert("deleted one row");
        } catch (err) {
          console.log(err);
        }
      };

      return (
        <button
          className="deleteButton"
          onClick={() => handleDelete(params.rows, params.api.setRows)}
        >
          Delete
        </button>
      );
    },
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const rows = [];

export default function MessageTable() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, "News")));
        setRows(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(rows);

  return (
    <div className="Page">
      <div className="table">
        <div className="message"></div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
