"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const DisplayPdf = () => {
    const [pdfData, setPdfData] = useState('');
    const searchParams = useSearchParams();
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _id = searchParams.get('id');
                const response = await axios.post("http://localhost:8000/getLeaveById", { _id });
                setEmail(response.data[0].email);
                console.log("fetched data:", response.data[0].email);

                const pdfResponse = await axios.post("http://localhost:8000/getPdf", {
                    email: response.data[0].email,
                    from: response.data[0].from,
                    to: response.data[0].to,
                    leave_type: response.data[0].type_of_leave,
                    alternate: response.data[0].alternate_class,
                    reason:response.data[0].reason
                });
                console.log("PDF RESPONSE:", pdfResponse.data);
                setPdfData(pdfResponse.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {pdfData && (
                <embed src={`data:application/pdf;base64,${pdfData}`} type="application/pdf" width="100%" height="800px" />
            )}
        </div>
    );
};

export default DisplayPdf;
