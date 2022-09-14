import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper, Button} from  "@mui/material"
import salesdata from "../../Sales/Salesdata"
import DraftsIcon from '@mui/icons-material/Drafts';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ListIcon from '@mui/icons-material/List';
import TitleIcon from '@mui/icons-material/Title';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ColorizeIcon from '@mui/icons-material/Colorize';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../../Styles/Sales.css"
import { Fragment } from "react";



function ProductTable(){
    //  const classes = useStyles();
    return(
        <Fragment>
            <Button>Add Product</Button>
        <TableContainer component={Paper} className="sale-Paper">
            <Table  aria-label='simple table' sx={{
    "& .MuiTableRow-root:hover": {
      backgroundColor: 'rgb(211,211,211)'
    }
  }}>
                    <TableHead className="sale-head">
                    
                    <TableRow>
                        <TableCell align="center" fontWeight="bold"><ListIcon></ListIcon></TableCell>
                        <TableCell align="center" fontWeight="bold"><TitleIcon></TitleIcon>Product Title</TableCell>
                        <TableCell align="center" fontWeight="bold"><LocalOfferIcon></LocalOfferIcon>Price</TableCell>
                        <TableCell align="center" fontWeight="bold"><CalendarMonthIcon></CalendarMonthIcon>Quantity</TableCell>
                        <TableCell align="center" fontWeight="bold"><ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Email</TableCell>
                        <TableCell align="center" fontWeight="bold"><RemoveRedEyeIcon></RemoveRedEyeIcon>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        salesdata.map(row=>(
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th':{border: 0 }}}>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center"> {row.price}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                {/* <TableCell align="center">{row.email}</TableCell> */}
                                <TableCell  align="center"><ColorizeIcon></ColorizeIcon>  <DeleteOutlineIcon></DeleteOutlineIcon></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </Fragment>

    )
}
export default ProductTable
