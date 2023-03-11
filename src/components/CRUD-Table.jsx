import MaterialTable from 'material-table';
import { ThemeProvider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../theme/theme';


export default function CRUDTable({ columns, data, editable, title, actions}) {

  return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <ThemeProvider theme={theme}>
          <MaterialTable
            columns={columns} data={data}
            editable={editable}
            actions={actions}
            onSelectionChange={(selectedRows) => console.log(selectedRows)}
            options={{
              sorting: true, search: true,
              searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
              paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
              paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "bottom", exportButton: true,
              exportAllData: true, addRowPosition: "first", actionsColumnIndex: -1, selection: false, filtering: false,
              showSelectAllCheckbox: false, showTextRowsSelected: false, 
              columnsButton: true,
              rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
              headerStyle: { background: theme.palette.primary.main, color: 'white' }
            }}
            title={title}
            icons={{
              Add: () => <AddIcon />, Edit: () => <EditIcon style={{ color: theme.palette.editIcon.main }} />,
              Delete: () => <DeleteIcon style={{ color: theme.palette.deleteIcon.main }} />
            }} />

        </ThemeProvider>
      </div>
  );

}