import React, { Fragment } from 'react';
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from  "@mui/material"
import salesdata from "./Salesdata";
import Sidebar from '../admin/components/Sidebar/Sidebar';
import TopNav from '../admin/components/TopNav/TopNav';
import DraftsIcon from '@mui/icons-material/Drafts';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TitleIcon from '@mui/icons-material/Title';
import "../../Styles/Sales.css"
import { Helmet } from 'react-helmet';
import '../../Styles/sidebar.css';
import '../../Styles/top-nav.css';



function SalesTable(){
    //  const classes = useStyles();
    return (
        <Fragment> 
           
            <Helmet><title>Sales</title></Helmet>

            <div className="layout">
                <Sidebar />
                <div className="main__layout">
                </div>
            </div>

            <h1 className='heading'>Sales Report</h1>
        <TableContainer component={Paper} className="sale-Paper">
            <Table  aria-label='simple table' sx={{
    "& .MuiTableRow-root:hover": {
      backgroundColor: 'rgb(211,211,211)'
    }
  }}>
    <TableHead className="sale-head">
        <TableRow>
            <TableCell align="center" fontWeight="bold"><PanoramaFishEyeIcon></PanoramaFishEyeIcon></TableCell>
            <TableCell align="center" fontWeight="bold"><TitleIcon></TitleIcon>Product Title</TableCell>
            <TableCell align="center" fontWeight="bold"><LocalOfferIcon></LocalOfferIcon>Price</TableCell>
            <TableCell align="center" fontWeight="bold"><CalendarMonthIcon></CalendarMonthIcon>Date and Time</TableCell>
            <TableCell align="center" fontWeight="bold"><ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Quantity</TableCell>
            <TableCell align="center" fontWeight="bold"><MarkAsUnreadIcon></MarkAsUnreadIcon>Email</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {
        salesdata.map(row=>(
        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th':{border: 0 }}}>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center"> {row.price}</TableCell>
                                <TableCell align="center">{row.date}, {row.time}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                {/* <TableCell align="center">{row.email}</TableCell> */}
                                <TableCell  align="center">{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </TableContainer>
            </Fragment>

    )
}
export default SalesTable

