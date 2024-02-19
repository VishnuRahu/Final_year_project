import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BellIcon } from "@radix-ui/react-icons"
  
interface Announcement {
    title: string;
    description: string;
    uploaded_time: string;
    author: string;
}

type Props = {
    announcement: Announcement;
}

const Banner: React.FC<Props> = ({ announcement }) => {

    const { title, description, uploaded_time, author } = announcement;

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
            return "Invalid date";
        }
    
        const options: Intl.DateTimeFormatOptions = {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false, // Use 24-hour format
          timeZone: 'Europe/Paris'
        };

        // Format the date using the options
        let formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
        // Remove the last comma
        formattedDate = formattedDate.replace(/,\s*$/, '');
        return formattedDate;

    };
      

    return (
        <>
            <Card className="transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md">
                <CardHeader>
                    <div className=" flex items-center space-x-4 ">
                        <div className="border rounded-full p-2 bg-blue-400 text-white"> <BellIcon /> </div>
                        <div className="flex-1 space-y-1">
                            <CardTitle> {title} </CardTitle>
                            <CardDescription> {author} | {formatDate(uploaded_time)} </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent> <p className="rounded-md border p-4"> {description} </p> </CardContent>
            </Card>
        </>
    )

}

export default Banner