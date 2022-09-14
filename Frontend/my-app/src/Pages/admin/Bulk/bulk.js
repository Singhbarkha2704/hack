import { useState } from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from  "@mui/material"
import "../../../Styles/CsvReader.css";
import axios from 'axios';

export default function CsvReader(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        console.log(headers)
        const rows = str.slice(str.indexOf('\n')+1).split('\n');
        console.log(rows)

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                
                obj[header] = values[i];
                
                return obj;
            }, {})
            return eachObject;
        })
        console.log(newArray)
        setCsvArray(newArray)
        console.log(csvArray)
        axios.post('http://localhost:3005/api/products/allcsv',{csvArray}).then((res)=>console.log(res.data))
        
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
            
        }

        reader.readAsText(file);
    }

    return(
        <div className='csv-body'>
            <h3 className='csv-header'>Bulk Products Upload</h3>
            <span className='csv-span'>Please choose a file</span>
            
            <div className='csv-upload'>
        <form className='csv-reader-form' id='csv-form'>
         <input className='csvreader-input'
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
               
            </input>
           
            <br/>
           
            <button className='csvreader-btn'
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}

            >
               Upload
            </button> 


</form>
</div>
        

<TableContainer component={Paper} className="stock-Paper">
            <Table  aria-label='simple table' sx={{
    "& .MuiTableRow-root:hover": {
      backgroundColor: '#F2F1EF'
    }
  }}>
                <TableHead className="csv-head">
                    <TableRow>
                        
                        <TableCell align="center" fontWeight="bold">Product Title</TableCell>
                        <TableCell align="center" fontWeight="bold">Description</TableCell>
                        <TableCell align="center" fontWeight="bold">stock</TableCell>
                        <TableCell align="center" fontWeight="bold">Category</TableCell>
                        <TableCell align="center" fontWeight="bold">Price</TableCell>
                        <TableCell align="center" fontWeight="bold">Offer</TableCell>
                        <TableCell align="center" fontWeight="bold">Rating</TableCell>
                        <TableCell align="center" fontWeight="bold">Images</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        csvArray.map(item=>(
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th':{border: 0 }}}>
                                
                                <TableCell align="center">{item.title}</TableCell>
                                <TableCell align="center">{item.description}</TableCell>
                                <TableCell align="center">{item.stock}</TableCell>
                                <TableCell align="center">{item.category}</TableCell>
                                <TableCell align="center">{item.price}</TableCell>
                                <TableCell align="center">{item.discountPercentage}</TableCell>
                                <TableCell align="center">{item.rating}</TableCell>
                                <TableCell  align="center"><img src={item.images} style={{width:"100px",height:"100px",borderRadius:"50%"}}></img></TableCell>
                               
                                
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );

}
