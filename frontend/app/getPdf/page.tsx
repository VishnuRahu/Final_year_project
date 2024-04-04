"use client"


import { useState ,useEffect} from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { ILeave } from '@/types/leaverequest';


const DisplayPdf = () => {
    const [pdfData, setPdfData] = useState('');
    const searchParams = useSearchParams();
    const [data, setData] = useState('');

    const _id = searchParams.get('id');

    useEffect(()=>{
       
        const fetchData = async () => {
            try {
                const _id = searchParams.get('id');
                console.log(_id)
                const response = await axios.post("http://localhost:8000/getLeaveById", { _id: _id });
                console.log(response.data[0].email);
                setData(response.data[0])
                const pdf_response = await axios.post('http://localhost:8000/getPdf',{email:response.data[0].email,from:response.data[0].from,
                 to:response.data[0].to,leave_type:response.data[0].type_of_leave,alternate:response.data[0].alternate_class });
                setPdfData(response.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [searchParams])

    const fetchPdf = async () => {
        try {
           console.log("hello")
            const response = await axios.post('http://localhost:8000/getPdf');
            console.log("hi")
            setPdfData(response.data.content);
            console.log(response)
            console.log("data: ",response.data.content)
        } catch (error) {
            console.error('Error fetching PDF:', error);
        }
    };

    return (
      <div>
        
      <button onClick={fetchPdf}>Fetch PDF</button>

      {pdfData && (
          <embed src={`data:application/pdf;base64,${pdfData}`} type="application/pdf" width="100%" height="500px" />
      )}
  </div>
    );
};

export default DisplayPdf;
